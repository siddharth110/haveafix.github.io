
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
    var toggleFlag = true;
     function clickity () {
      toggleFlag ? openForm() : closeForm();
      toggleFlag = !toggleFlag;
     
  }
