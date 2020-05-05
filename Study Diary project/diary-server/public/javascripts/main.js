//Set eventlistener to add topic button
document.getElementById("addTopic").addEventListener("click", postNew);

//At start, list all old topics
getAll();

//Set starting date
    function getDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = yyyy + '-' + mm + '-' + dd;
        console.log(today);
        document.getElementById("formDate").value = today;
    }


    window.onload = function () {
        getDate();
    };

//Get all old topics
function getAll() {
    url = 'http://localhost:3000/topics'
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            document.getElementById('topics').innerText = "";
            for (i = 0; i < data.length; i++) {

                // selecting elements
                var topics = document.getElementById('topics');

                // creating new elements
                var topicDiv = document.createElement('div');
                var topicTitle = document.createElement('h3');
                var topicLegend = document.createElement('p');
                var topicStartTime = document.createElement('p');
                var topicFinishTime = document.createElement('p');

                // nodes and appends
                var topicTitleNode = document.createTextNode(data[i].title)
                var topicLegendNode = document.createTextNode(data[i].legend);
                var topicStartTimeNode = document.createTextNode('Aloitettu: ' + data[i].starttime);
                if (data[i].finishtime != null) {
                var topicFinishTimeNode = document.createTextNode('Valmistunut: ' + data[i].finishtime);
                    topicFinishTime.appendChild(topicFinishTimeNode);
                }
                if (data[i].finishtime == null) {
                    topicFinishTimeNode = document.createTextNode('Aiheen opiskelu on kesken!');
                    topicFinishTime.appendChild(topicFinishTimeNode);
                }

                var deleteButton = document.createElement('button');
                var updateButton = document.createElement('button');

                deleteButton.setAttribute('onclick', `deleteTopic('${data[i].id}')`);
                deleteButton.innerText = 'Poista';

                updateButton.setAttribute('onclick', `updateData('${data[i].title}','${data[i].legend}','${data[i].id}')`);
                updateButton.innerText = 'Muokkaa';

                topicTitle.appendChild(topicTitleNode);
                topicLegend.appendChild(topicLegendNode);
                topicStartTime.appendChild(topicStartTimeNode);

                topicDiv.appendChild(topicTitle);
                topicDiv.appendChild(topicLegend);
                topicDiv.appendChild(topicStartTime);
                topicDiv.appendChild(topicFinishTime);
                topicDiv.appendChild(deleteButton);
                topicDiv.appendChild(updateButton);

                topics.appendChild(topicDiv);
            }
        })
};

// function post new data entry and run function to get old entries
function postNew() {
    event.preventDefault();
    var setTitle = document.getElementById('formTitle').value;
    var setLegend = document.getElementById('formLegend').value;
    var setStartTime = document.getElementById('formDate').value;
    var setFinishTime = document.getElementById('formDateFinished').value;

    if (setTitle == '' || setLegend == '') {
        alert('Täytä jokainen kenttä ennenkuin tallennat')
    } else {
        var items = { title: setTitle, legend: setLegend, starttime: setStartTime, finishtime: setFinishTime }
        url = 'http://localhost:3000/topics'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(items)
        })
            .then(() => {
                document.getElementById('formTitle').value = '';
                document.getElementById('formLegend').value = '';
                getAll();
            })
    }
}

// function to delete specific data entry
function deleteTopic(id) {
    url = 'http://localhost:3000/topics/' + id;
    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
    })
        .then(() => {
            getAll();
        })
}