document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function issuesList() {
    return localStorage.getItem('issues') ? 
        JSON.parse(localStorage.getItem('issues')) :
        [];
}

function fetchIssues(){
    const issues = this.issuesList();
    const issuesList = document.getElementById('issuesList');

    issuesList.innerHTML = '';

    if (issues) {
        issues.forEach(element => {
            const {id, status, description, severity, assignedTo} = element;

            issuesList.innerHTML +=   `<div class="well">
            <h6>Issue ID:  ${id} </h6>
            <p><span class="label label-info">${status}</span></p>
            <h3>${description}</h3>
            <p><span class="glyphicon glyphicon-time"></span>${severity}
            <span class="glyphicon glyphicon-user"></span>${assignedTo}</p>
            <a href="#" class="btn btn-warning" onclick="setStatusClosed('${id}')">Close</a>
            <a href="#" class="btn btn-danger" onclick="deleteIssue('${id}')">Delete</a>
            </div>`;
        });
    }
}

function saveIssue(e) {
    const id = chance.guid();
    const description = document.getElementById('issueDescInput').value || 'No Description Provided';
    const severity = document.getElementById('issueSeverityInput').value;
    const assignedTo = document.getElementById('issueAssignedToInput').value || 'No User Assigned.';  
    const issues =  JSON.parse(localStorage.getItem('issues')) || [];

    issues.push({
        id,
        description,
        severity,
        assignedTo,
        status: 'Open'
      });

    localStorage.setItem('issues', JSON.stringify(issues))
    document.getElementById('issueInputForm').reset();
   
    fetchIssues();
    
    e.preventDefault(); 
  }

  function setStatusClosed (id) {
    const issues = this.issuesList(); 
    const updateIssue = issues.find(issueToClose => {
        return issueToClose.id === id
    })

    const indOf = issues.indexOf(updateIssue)
    issues.splice(indOf, 1)
    issues.push({
        id : updateIssue.id,
        description : updateIssue.description,
        severity : updateIssue.severity,
        assignedTo : updateIssue.assignedTo,
        status: 'Closed'
    })
 
    localStorage.setItem('issues', JSON.stringify(issues));
    
    fetchIssues();
  }

  function deleteIssue (id) {
    const issues = this.issuesList();
    const issueToDelete = issues.find(issueToFind => {
        return issueToFind.id === id
    });
    
    const indOf = issues.indexOf(issueToDelete)
    issues.splice(indOf, 1)
    localStorage.setItem('issues', JSON.stringify(issues));
    
    fetchIssues();
  }
  