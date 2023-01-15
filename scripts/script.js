const iframe = document.getElementById('map');

let onClick = () => {
    let start = document.getElementById('start').value;
    let destination = document.getElementById('dest').value;

    map.src = `https://maps.google.com/?q=from-${start}-to-${destination}&output=embed`
    map.reload();
}
