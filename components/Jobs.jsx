import React from 'react';
import jobData from './jobPostData'; 

const Jobs = () => {
  return (
    <div style={styles.backgroundContainer}>

      <div style={styles.container}>
        {jobData.map((job) => (
          <div key={job.id} style={styles.cardContainer}>
            <div style={styles.cardHeader}>
              <img src={job.logo} alt={`${job.companyName} logo`} style={styles.logo} />
              <div>
                <h2 style={styles.jobTitle}>{job.jobTitle}</h2>
                <p style={styles.companyName}>{job.companyName}</p>
                <p style={styles.location}>{job.location}</p>
              </div>
            </div>
            <div style={styles.cardBody}>
              <p style={styles.jobDescription}>{job.jobDescription}</p>
            </div>

            <div style={styles.cardFooter}>
              <button style={styles.applyButton} onClick={() => window.location.href = '/apply'}>
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  backgroundContainer: {
    width: '100%',
    height: '100vh', 
    backgroundImage: 'url(https://res.cloudinary.com/dqskebjcf/image/upload/v1731051920/Reviews_and_testomonials_dpgvdl.png)', // Add the path to your background image here
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'center',
    position: 'relative',
    zIndex: '-1', 
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '10px',
    position: 'relative',
    zIndex: '1',
  },
  cardContainer: {
    width: '350px',
    backgroundColor: '#000',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    overflow: 'hidden',
    margin: '10px',
    padding: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '0.1px solid #fff',
    marginTop: '5rem',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #444',
    paddingBottom: '10px',
  },
  logo: {
    width: '50px',
    height: '50px',
    marginRight: '15px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  jobTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#fff',
    margin: '0 0 5px',
  },
  companyName: {
    fontSize: '14px',
    color: '#bbb',
    margin: '0',
  },
  location: {
    fontSize: '12px',
    color: '#aaa',
    margin: '0',
  },
  cardBody: {
    marginTop: '15px',
  },
  jobDescription: {
    fontSize: '16px',
    color: '#ccc',
    marginBottom: '10px',
    lineHeight: '1.5',
  },
  cardFooter: {
    marginTop: '20px',
    textAlign: 'center',
  },
  applyButton: {
    padding: '10px 20px',
    backgroundColor: '#0000FF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
};

export default Jobs;
