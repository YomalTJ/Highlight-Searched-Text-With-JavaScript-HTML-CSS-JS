function search(){
    let textToSearch = document.getElementById("text-to-search").value;
    let paragraph = document.getElementById("paragraph");
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/,"\\$&");

    let pattern = new RegExp(`${textToSearch}`,"gi");

    paragraph.innerHTML = paragraph.textContent.replace(pattern, match => 
      `<mark>${match}</mark>`);
}