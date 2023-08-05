let playList=document.querySelector(".createPlaylist");

playList.addEventListener("click",(event)=>{
    event.preventDefault();
    let name=prompt('what is the name of your playlist?');
    let newPlaylist=document.createElement("div");
    newPlaylist.className="playlist";
    newPlaylist.appendChild(document.createTextNode( name));
    let library=document.querySelector(".YourLibrary");
    // console.log(newPlaylist.textContent);
    library.appendChild(newPlaylist)
})