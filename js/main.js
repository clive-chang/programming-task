import { getUniqueValues, getHighestOccurences } from './_utilities.js';

window.addEventListener('DOMContentLoaded', () => {
    const fileUpload = document.querySelector('.file-uploader');

    if (fileUpload) {
        fileUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if(!file.name.match(/\.log$/)) {
                fileUpload.value = '';
                console.log('Please only upload .log files');
                return;
            }
            
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                const currentTarget = e.currentTarget;
                const result = currentTarget.result;
                const lines = result
                    .toLowerCase()
                    .split('\n')
                    .filter((item) => item.trim() !== '');

                const ipAddressRegex = new RegExp(
                    /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)/
                );
                const urlRegex = new RegExp(/\"[get]+\s((?:[http\:]?)+[\/]+(?:[\w+-\.\/]+)?)/);

                const ipAddresses = lines.map((line) => line.match(ipAddressRegex)?.[0]);
                const urls = lines.map((line) => line.match(urlRegex)?.[1]);

                const uniqueIpAddress = ipAddresses?.length && getUniqueValues(ipAddresses);
                const topThreeUrls = urls?.length && getHighestOccurences(urls, 3);
                const topThreeIpAddresses = urls?.length && getHighestOccurences(ipAddresses, 3);
                
                console.table({
                    "Number of Unique Addresses": uniqueIpAddress.length,
                    "Top 3 most visited URLs": topThreeUrls.map(url=>url[0]).join(', '),
                    "Top 3 Most active IP Addresses": topThreeIpAddresses.map(ip=>ip[0]).join(', ')
                })

                fileUpload.value = '';
            };

            fileReader.readAsText(file);
        });
    }
});
