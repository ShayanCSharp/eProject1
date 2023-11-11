function show_hide() {
    let passwordInput = document.querySelector('#passwordInput');
    let showIcon = document.querySelector('#show');
    let hideIcon = document.querySelector('#hide');
  
    showIcon.addEventListener('click', function() {
      passwordInput.type = 'text'; // Show the password
      showIcon.style.display = 'none';
      hideIcon.style.display = 'block';
    });
  
    hideIcon.addEventListener('click', function() {
      passwordInput.type = 'password'; // Hide the password
      hideIcon.style.display = 'none';
      showIcon.style.display = 'block';
    });
  }
  
  show_hide();

  function email_vali(){
    let email = document.querySelector('#emailINP')
    let error = document.querySelector('#emailError')
    let email_vali_regex = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}$/;
    
    if(email.value == ""){
      error.style.borderBottom = '1px solid #ff0000'
      return false
    }
    else if(!email_vali_regex.test(email.value)){
      error.style.borderBottom = '1px solid #ff0000'
      return false
    }
    else{
      error.style.borderBottom = ''
      return true
    }
  }

  function pass_vali(){
    let email = document.querySelector('#passwordInput')
    let error = document.querySelector('#pass')
    let email_vali_regex = /^[a-zA-Z0-9.-_]{8,25}$/;
    
    if(email.value == ""){
      error.style.borderBottom = '1px solid #ff0000'
      return false
    }
    else if(!email_vali_regex.test(email.value)){
      error.style.borderBottom = '1px solid #ff0000'
      return false
    }
    else{
      error.style.borderBottom = ''
      return true
    }
  }

  document.querySelector('.wrapper form').addEventListener('submit',function(e){
    e.preventDefault()

    if(email_vali() && pass_vali()){
      Swal.fire('Login','go to home page <a href="home.html">Home<a/>','success')
    }
    else{
      Swal.fire('Error','Please recheck the values','error')
    }
  })