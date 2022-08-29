import React, { useState } from 'react';

const initialForm = {
    "username": "",
    "password": ""
};



const Login= () => {
    console.log("Render")

      const [form, setForm] = useState(initialForm)
      const [loading, setLoading] = useState(false);

 const  handleSubmit  = (event) => {
    event.preventDefault()
    console.log("Hellow")
    setLoading(true)
    
    fetch(
          "http://127.0.0.1:8000/api-token-auth/",
           {
     
            // Adding method type
            method: "POST",
             
            // Adding body or contents to send
            body: JSON.stringify(
               form
            ),
             
            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }
          )
              .then((response) => {
               if (response.ok) {
                   return response.json();
                 }
                throw response;
               })
              .then((data) => {
                console.log(data);
              })
              .catch((error) => {
                console.log(error);
              }).finally(() => setLoading(false));
              

 }
  
  return (
  <div>
    <div className="well tab-content">

<div className="tab-pane active" id="post-object-form">

    <form  onSubmit={handleSubmit} encType="multipart/form-data" className="form-horizontal" noValidate="" >
        <fieldset>


            <div className="form-group ">

                <label className="col-sm-2 control-label ">
                    Username
                </label>


                <div className="col-sm-10">
                    <input name="username" className="form-control" type="text" value={form.username} onChange={(e) => setForm(prevState =>  ({...prevState, username: e.target.value})) }
                    disabled = {loading}
                    />
                </div>
            </div>





            <div className="form-group ">

                <label className="col-sm-2 control-label ">
                    Password
                </label>


                <div className="col-sm-10">
                    <input name="password" className="form-control" type="text" value={form.password} onChange={(e) =>setForm(prevState =>  ({...prevState, password: e.target.value}))}
                     disabled = {loading}
                     />


                </div>
            </div>




            <div className="form-actions">
                <button className="btn btn-primary js-tooltip"  disabled = {loading}
                    >POST</button>
            </div>
        </fieldset>
    </form>

</div>



</div>
  </div>
  );
};

export default Login;