const letter_month = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];

export function dateFormatLetter(){
    let today = new Date().toLocaleDateString("es-MX");
    let day = today.split("/")[0];
    let month = today.split("/")[1];
    let year = today.split("/")[2];

    if(day < 10) day = `0${day}`;

    return `${day} ${letter_month[month - 1]} ${year} ` 
}