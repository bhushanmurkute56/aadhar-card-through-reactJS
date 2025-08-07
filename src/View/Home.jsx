import { Link } from 'react-router';
import { useState } from 'react';
import aadharimg from "./../assets/aadhar-card-pp4.avif"

function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState(''); 
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [aadhar, setAadhar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className=''>
      <div className='h-20 bg-gray-200 flex justify-center items-center text-2xl border-b-1 border-gray-400 text-gray-700'>
        Aadhar Card Maker <img src={aadharimg} alt="" className='h-12 w-16 border-none shadow-none ml-1 p-1'/>
      </div>
      
      <div className="h-[460px] w-[300px] bg-gray-100 mx-auto mt-20 p-5 rounded-xl shadow-2xl border-gray-300 border-1">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name : </label><br />
          <input type="text" 
          id="firstName" 
          name='firstname' 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value.toUpperCase())} 
          className="border mb-2 p-1 w-full bg-white rounded-md" required /><br />

          <label htmlFor="lastName">Last Name:</label><br />
          <input type="text" 
          id="lastName" 
          name='lastname' 
          value={lastName}
          onChange={(e) => setLastName(e.target.value.toUpperCase())}
          className="border mb-2 p-1 w-full bg-white rounded-md"
          required /><br />

          <label htmlFor="gender">Gender : </label><br />
          <select 
          name="gender" 
          id="gender" 
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border mb-2 p-1 w-full bg-white rounded-md"
          required
          >
            <option value="">Please choose an option : </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <br />

          <label htmlFor="DOB">Date of Birth:</label><br />
          <input type="date" 
          id="DOB" 
          name='DOB'
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="border mb-2 p-1 w-full bg-white rounded-md" required /><br />

          <label htmlFor="AadharNo">Aadhar Number:</label><br />
          <input type="number" 
          id="AadharNo"
          name='aadhar' 
          value={aadhar}
          onChange={(e) => setAadhar(e.target.value)}
          className="border mb-2 p-1 w-full bg-white rounded-md" required/><br />

          <div className='flex flex-col'>
            <div className="flex justify-center mt-2">
              <button className="border-2 px-4 py-1 rounded-md cursor-pointer hover:bg-gray-300" type='submit'>
                Submit
              </button>
            </div>

            <div className='p-2 mx-auto mt-2'>
              {submitted && (
                <Link
                  to="/Aadhar"
                  state={{ firstName, lastName, dob, aadhar, gender }}
                  className="border-2 px-4 py-1 rounded-md bg-blue-100 hover:bg-blue-200 text-center block"
                >
                  Go to Aadhar Card Page
                </Link>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;