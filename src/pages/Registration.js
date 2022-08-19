import React, { useState } from 'react';

const initialForm = {
    "username": "",
    "first_name": "",
    "last_name": "",
    "email": "",
    "password": ""
};



const Registration= () => {
    console.log("Render")

      const [form, setForm] = useState(initialForm)
      const [loading, setLoading] = useState(false);
//   const [book, setBook] = useState({});
//  
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(
//       "http://127.0.0.1:8000/people/"
//     )
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw response;
//       })
//       .then((data) => {
//         console.log(data);
//         setBook(data);
//       })
//       .catch((error) => {
//         console.log(error);
//         setError(error);
//       })
//       .finally(() => setLoading(false));
//   }, []);

  // if (loading) return 'Loading...';
  // if (error) return 'Error...';

 const  handleSubmit  = (event) => {
    event.preventDefault()
    console.log("Hellow")
    setLoading(true)
    
    fetch(
          "http://127.0.0.1:8000/api/register/",
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




                    <span className="help-block">Required. 150 characters or fewer. Letters, digits and @/./+/-/_
                        only.</span>

                </div>
            </div>




            <div className="form-group ">

                <label className="col-sm-2 control-label ">
                    First name
                </label>


                <div className="col-sm-10">
                    <input name="first_name" className="form-control" type="text"  value={form.first_name} onChange={(e) => setForm(prevState =>  ({...prevState,first_name: e.target.value})) } 
                    disabled = {loading}
                    />




                </div>
            </div>




            <div className="form-group ">

                <label className="col-sm-2 control-label ">
                    Last name
                </label>


                <div className="col-sm-10">
                    <input name="last_name" className="form-control" type="text" value={form.last_name} onChange={(e) =>  setForm(prevState =>  ({...prevState, last_name: e.target.value}))}
                     disabled = {loading}
                     />




                </div>
            </div>




            <div className="form-group ">

                <label className="col-sm-2 control-label ">
                    Email address
                </label>


                <div className="col-sm-10">
                    <input name="email" className="form-control" type="email" value={form.email} onChange={(e) => setForm(prevState =>  ({...prevState, email: e.target.value}))}
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

export default Registration;