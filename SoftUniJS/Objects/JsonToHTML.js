function JSONToHTML(json) {
    let arr = JSON.parse(json);

    function escapeHTML(input) {
        if (typeof input === 'string' && input.includes('&')) {
            return input.replace('&', '&amp;');
        } else {
            return input;
        }
    };

    function makeKeyRow(obj) {
        let keyRow = '<tr>';

        for (const key in obj) {
            keyRow += `<th>${key}</th>`;
        }

        keyRow += '</tr>';

        output.Arr.push(keyRow);
    };

    function makeValueRow(arr) {
        let valueRow = '';

        arr.forEach(element => {
            valueRow = '<tr>';

            for (const key in element){
                value += `<td>${escapeHTML(element[key])}</td>`;
            }

            valueRow += '</tr>';

            outputArr.push(valueRow);
    })
    };

    let outputArr = ["<table>"];
    makeKeyRow(arr[0]);
    makeValueRow(arr);
    outputArr.push("</table>");

    console.log(outputArr.join('\n'));

}