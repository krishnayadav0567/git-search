const input = document.getElementById('user-input');

input.addEventListener('keypress', function(event) {
  if(event.key === 'Enter'){
    this.blur();
  }
});

input.addEventListener('blur', function(event) {
  search();
  event.target.style.background = "";
});

input.addEventListener("focus", function(event) {
  event.target.style.background = "rgba(240,198,93,0.7)";
});

function search() {
  reset()
  fetch(`https://api.github.com/users/${input.value}`)
  .then(response => response.json())
  .then(json => {
    if (json.message == 'Not Found') {
      document.getElementById('username').innerText = 'User Not Found';
    } else {
        document.getElementById('username').innerText = json.login;
        document.getElementById('real-name').innerText = json.name;
        document.getElementById('avatar').setAttribute('src', json.avatar_url);
        document.getElementById('location').innerText = json.location;
        document.getElementById('bio').innerText = json.bio;
        document.getElementById('html-url').setAttribute('href', json.html_url);
        document.getElementById('followers').innerText = json.followers;
      }
    })
}

function reset() {
  document.getElementById('followers-panel').innerText = '';
  document.getElementById('username').innerText = '';
  document.getElementById('real-name').innerText = '';
  document.getElementById('avatar').setAttribute('src', 'http://via.placeholder.com/462x462/B2FFC9?text=Find+a+GitHub+user');
  document.getElementById('location').innerText = '';
  document.getElementById('bio').innerText = '';
  document.getElementById('html-url').setAttribute('href', '');
  document.getElementById('followers').innerText = '';
}