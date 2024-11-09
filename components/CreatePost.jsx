import React, { useState } from 'react';
import axios from 'axios';
const CreatePost = () => {
  // Initial state for form inputs
  const [jobDetails, setJobDetails] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobDescription: '',
    jobType: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails({ ...jobDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5173/api/user/postJob', jobDetails);
      if (response.status === 200) {
        alert("Job posted successfully!");
      }
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Failed to post job.");
    }
  };

  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.formContainer}>
        <h2 style={styles.formHeader}>Post a Job Opening</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="jobTitle" style={styles.label}>Job Title:</label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={jobDetails.jobTitle}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="companyName" style={styles.label}>Company Name:</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={jobDetails.companyName}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="location" style={styles.label}>Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              value={jobDetails.location}
              onChange={handleInputChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="jobDescription" style={styles.label}>Job Description:</label>
            <textarea
              id="jobDescription"
              name="jobDescription"
              value={jobDetails.jobDescription}
              onChange={handleInputChange}
              required
              style={styles.textArea}
            />
          </div>

          {/* <div style={styles.inputGroup}>
            <label htmlFor="requirements" style={styles.label}>Requirements:</label>
            <textarea
              id="requirements"
              name="requirements"
              value={jobDetails.requirements}
              onChange={handleInputChange}
              required
              style={styles.textArea}
            />
          </div> */}


          <div style={styles.inputGroup}>
            <label htmlFor="jobType" style={styles.label}>Job Type:</label>
            <select
              id="jobType"
              name="jobType"
              value={jobDetails.jobType}
              onChange={handleInputChange}
              required
              style={styles.input}
            >
              <option value="">Select job type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          <button type="submit" style={styles.postButton}>Post Job</button>
        </form>
      </div>
    </div>
  );
};

// Styles for the form and background
const styles = {
  backgroundContainer: {
    width: '100%',
    height: '100vh', // Full viewport height
    backgroundImage: 'url(https://res.cloudinary.com/dqskebjcf/image/upload/v1731051920/Reviews_and_testomonials_dpgvdl.png)', // Replace with your image path
    backgroundSize: 'cover', // Cover entire area
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex', // Center form container
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    width: '450px',
    padding: '20px',
    borderRadius: '8px',
    border:"0.1px solid #fff",
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    backgroundColor:"#000",
  },
  formHeader: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#fff', 
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    color: '#fff', 
  },
  input: {
    width: '95%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #444',
    marginTop: '5px',
    backgroundColor: '#444', 
    color: '#fff',
  },
  textArea: {
    width: '95%',
    height: '30px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #444',
    marginTop: '5px',
    resize: 'vertical',
    backgroundColor: '#444',
    color: '#fff',
  },
  postButton: {
    padding: '10px',
    backgroundColor: '#28a745', 
    color: '#fff',
    fontSize: '18px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default CreatePost;