(async ({
    referrer,
    baseUrl,
    name,
    type,
    pageSize,
    group
}) => {
    const singlePage = async (page = 1) => {
        const res = await fetch(`${baseUrl}/inventory/search`, {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "priority": "u=1, i",
                "sec-ch-device-memory": "8",
                "sec-ch-ua": "\"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"144\", \"Google Chrome\";v=\"144\"",
                "sec-ch-ua-arch": "\"x86\"",
                "sec-ch-ua-full-version-list": "\"Not(A:Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"144.0.7559.96\", \"Google Chrome\";v=\"144.0.7559.96\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-model": "\"\"",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": referrer,
            "body": `PageNumber=${page}&Sort=MakeAsc&StockNumber=&Condition=&BodyStyle=&Make=&MaxPrice=&Mileage=&SoldStatus=AllVehicles&StockNumber=&X-Requested-With=XMLHttpRequest`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });
        // html text
        const text = await res.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const listingElements = doc.querySelectorAll('li.vehicle-snapshot');
        console.log(`Found ${listingElements.length} listings on page ${page}`);
        const totalElm = doc.querySelector('.data-inventory-total-records').value;
        console.log(`Total records: ${totalElm}`);
        const listings = [];
        for (const elm of listingElements) {
            const previousScriptSiblingElm = elm.previousElementSibling;
            const scriptContent = previousScriptSiblingElm.textContent;
            const jsonData = JSON.parse(scriptContent);
            const listing = {
                "Dealer Group": group,
                "Dealership Name": name,
                "Used or New": type,
                "URL": (() => {
                    const titleElm = elm.querySelector('h3 a');
                    return titleElm ? `${baseUrl}${titleElm.getAttribute('href')}` : "";
                })(),
                "Year": jsonData.vehicleModelDate,
                "Make": jsonData.manufacturer,
                "Model": jsonData.model,
                "Trim": (() => {
                    const title = elm.querySelector('h3 a')?.textContent || "";
                    const yearMakeModel = `${jsonData.vehicleModelDate} ${jsonData.manufacturer} ${jsonData.model}`;
                    return title.replace(yearMakeModel, "").trim();
                })(),
                "Price": jsonData.offers?.price || "0",
                "Mileage": (() => {
                    // Convert NodeList to Array so .find() works
                    const items = [...elm.querySelectorAll('.vehicle-snapshot__main-info-item')];
                    const mileageElm = items.find(item => item.textContent.includes('Mileage'));

                    if (mileageElm) {
                        const mileageText = mileageElm.querySelector(".vehicle-snapshot__main-info");
                        return mileageText ? mileageText.textContent.replace(/[^0-9]/g, "") : "";
                    } else {
                        return "";
                    }
                })(),
                "Vin#": await (async () => {
                    const titleElm = elm.querySelector('h3 a');
                    // await new Promise(r => setTimeout(r, 1000));
                    const URL = titleElm ? `${baseUrl}${titleElm.getAttribute('href')}` : "";
                    const detailRes = await fetch(`${URL}`, {
                        "headers": {
                            "accept": "*/*",
                            "accept-language": "en-US,en;q=0.9",
                            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                            "priority": "u=1, i",
                            "sec-ch-device-memory": "8",
                            "sec-ch-ua": "\"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"144\", \"Google Chrome\";v=\"144\"",
                            "sec-ch-ua-arch": "\"x86\"",
                            "sec-ch-ua-full-version-list": "\"Not(A:Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"144.0.7559.96\", \"Google Chrome\";v=\"144.0.7559.96\"",
                            "sec-ch-ua-mobile": "?0",
                            "sec-ch-ua-model": "\"\"",
                            "sec-ch-ua-platform": "\"Windows\"",
                            "sec-fetch-dest": "empty",
                            "sec-fetch-mode": "cors",
                            "sec-fetch-site": "same-origin",
                            "x-requested-with": "XMLHttpRequest"
                        },
                        "referrer": referrer,
                        "mode": "cors",
                        "credentials": "include"
                    });
                    const detailText = await detailRes.text();
                    const detailDoc = parser.parseFromString(detailText, 'text/html');
                    const vinElm = detailDoc.querySelector('.vdp-info-block__info-item-description.js-vin-message');
                    return vinElm ? vinElm.textContent.trim() : "";
                })(),
                "Date": new Date().toLocaleDateString("en-US")
            };
            listings.push(listing);
            console.log(listing);
        };
        return { listings, totalPages: Math.ceil(totalElm / pageSize) };
    }
    await singlePage();
})({
    scrapingType: 'searchHtml',
    baseUrl: "https://www.allwheelsdriven.com",
    type: "Used",
    name: 'All Wheels Driven',
    referrer: "https://www.allwheelsdriven.com/cars-for-sale",
    pageSize: 24,
})