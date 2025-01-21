const password_box = document.querySelector('#main_input');
const copy_button = document.querySelector('#copy');
const Generate_passBtn = document.querySelector('#generate_pass');


function Random_generatePass() {
  let pass = "";
  const length = 12;
  const allchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789"
  const special_synmbol = "!@#$%^&*()_+"

  pass += uppercase[Math.floor(Math.random() * uppercase.length)];
  pass += lowercase[Math.floor(Math.random() * lowercase.length)];
  pass += numbers[Math.floor(Math.random() * numbers.length)];
  pass += special_synmbol[Math.floor(Math.random() * special_synmbol.length)];

 while(length > pass.length){
   pass += allchars[Math.floor(Math.random() * allchars.length)];
 }
 return  pass; 

}


Generate_passBtn.addEventListener('click', (e) => {
  const INput_pass = Random_generatePass();
 password_box.value = `${INput_pass}`

 copy_button.addEventListener('click',(e)=>{
  navigator.clipboard.writeText(password_box.value)

  .then(()=>{
      copy_button.textContent = "textcopied";
      setTimeout(() => {
          copy_button.textContent = "refresh for generate more password" 
      }, 1000);
  })
  .catch(()=>{
     copy_button.textContent = "failed to copy the text";
  })
})


})

