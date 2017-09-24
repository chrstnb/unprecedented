var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var djt = text;

            if (text.includes('President Trump')) {
                djt = text.replace(/President Trump/gi, 'Precedent Trump');
            } else if (text.includes('President Donald')) {
                djt = text.replace(/President Donald/gi, 'Precedent Donald');
            } else if (text.includes('President Pence')) {
                djt = text.replace(/President Pence/gi, 'Precedent Pence');
            } else if (text.includes('President Mike')) {
                djt = text.replace(/President Mike/gi, 'Precedent Mike');
            } else if (text.includes('Trump for President')) {
                djt = text.replace(/Trump for President/gi, 'Trump for Precedent');
            } else if (text.includes('Trump presidential')) {
                djt = text.replace(/Trump presidential/gi, 'Trump precedential');
            } else if (text.includes('45th President')) {
                djt = text.replace(/45th President/gi, '45th Precedent');
            }
            if (djt !== text) {
                element.replaceChild(document.createTextNode(djt), node);
            } 
        }
    }
}