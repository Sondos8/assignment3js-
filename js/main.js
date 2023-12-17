var nameDate = document.getElementById('bookmarkName')
var urlDate = document.getElementById('bookmarkURL')
allData = []

if (localStorage.getItem('data')) {
    allData = JSON.parse(localStorage.getItem('data'))
    displayBookmark()  
}

function getInpData() {
    inputData() 
    displayBookmark() 
    clear() 
}

function inputData() {
    var data = {
        name: nameDate.value,
        url: urlDate.value
    }
    if (check(nameDate.value)){
        document.getElementById('alert').style.display = 'none'
        allData.push(data)
        localStorage.setItem('data',JSON.stringify(allData))
    } else {
        document.getElementById('alert').style.display = 'block'
    } 
    if (check2(urlDate.value)){
        document.getElementById('alert2').style.display = 'none'
        allData.push(data)
        localStorage.setItem('data',JSON.stringify(allData))
    } else {
        document.getElementById('alert2').style.display = 'block'
    } 

}

function displayBookmark() {
    var table = ''
    for (var i = 0 ; i < allData.length ; i++) {
        table += `
        <tr>
        <td>${i}</td>
        <td>${allData[i].name}</td>
        <td><a href="${allData[i].url}" target="_blank" class="btn btn-visit">
            <i class="fa-solid fa-eye pe-2"></i>
            Visit
        </a>
        </td>
        <td><but onclick="deleteData(${i})" class="btn btn-delete">
            <i class="fa-solid fa-trash-can"></i>
            Delete
        </but></td>
    </tr>
        `
    }
    document.getElementById('tableContent').innerHTML = table
}

function clear() {
    nameDate.value = ""
    urlDate.value = ""
}

function deleteData(index) {
    allData.splice(index, 1)
    localStorage.setItem('data',JSON.stringify(allData))
    displayBookmark() 
}

function check(word) {
    var regex = /^[A-Za-z]{3,50}/
    return regex.test(word)
}

function check2(word) {
    var regex = /^https:[a-z./]{1,50}/
    return regex.test(word)
}




  