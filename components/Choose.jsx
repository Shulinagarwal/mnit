import React from 'react';
import jobData from './chooseData';
import { Link } from 'react-router-dom';

const Choose = () => {
  // Array of background images for each card
  const backgroundImages = [
    'url(/s20.png)',
    'url(/s15.png)',
    'url(/s16.png)',
    'url(/s17.png)',
    'url(/s18.png)',
    'url(/s19.png)',
  ];

  return (
    <div style={styles.backgroundContainer} className='gap-6'>
      <div className="relative text-white m-3 mt-10">
        <div className="ml-16 flex flex-row space-x-4 items-center justify-center gap-6">
          <h1 className="text-6xl font-bold">
            Choose the <span className="text-[#74D5FF]">Best Team</span> that suits your <span className="text-[#74D5FF]">Work.</span>
          </h1>
        </div>
      </div>

      <div style={styles.container} className='gap-10'>
        {jobData.map((job, index) => (
          <div 
            key={job.id} 
            style={{
              ...styles.cardContainer,
              backgroundImage: backgroundImages[index % backgroundImages.length],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div style={styles.cardHeader}>
              <div>
                <h2 style={styles.jobTitle}>{job.jobTitle}</h2>
                <p style={styles.companyName}>{job.companyName}</p>
              </div>
            </div>

            <div style={styles.cardFooter} className='w-[40%] right-0'>
              <h1 style={styles.applyButton}>
              {job.rate}
              </h1>
            </div>
          </div>
        ))}


      </div>
      <div className='relative text-white flex justify-center mt-4 flex-col items-center z-10'>
  <h1 className='text-4xl font-normal text-center mb-6'>Choose who you work with</h1>

  <div className='flex flex-row items-center gap-6 z-50'>
    <Link to="/create">
      <button className='p-4 border-2 border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-colors'>
        Create a team
      </button>
    </Link>

    <h1 className='text-gray-300 z-40'>OR</h1>  <Link to="/jobs">
      <button className='p-4 border-2 border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transition-colors'>
        Post Job
      </button>
    </Link>
  </div>
</div>

      
    </div>
  );
};

const styles = {
    backgroundContainer: {
      width: '100%',
      minHeight: '100vh',
      backgroundImage: 'url(https://res.cloudinary.com/dqskebjcf/image/upload/v1731051920/Reviews_and_testomonials_dpgvdl.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      paddingTop: '2rem',
      position: 'relative',
      zIndex: '1',
    },
    header: {
      textAlign: 'center',
      color: '#fff',
      marginBottom: '2rem',
    },
    headerTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      margin: '0',
    },
    headerSubtitle: {
      fontSize: '1.2rem',
      color: '#ddd',
      marginTop: '0.5rem',
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '10px',
      position: 'relative',
      zIndex: '1',
    },
    cardContainer: {
      backgroundColor: '#fff', // Updated to match black text
      borderRadius: '12px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      overflow: 'hidden',
      padding: '20px',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      border: '0.1px solid #000',
    },
    cardHeader: {

        marginTop: '100px',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid #444',
      paddingBottom: '10px',
    },
    jobTitle: {
      fontSize: '14px',
      fontWeight: 'medium',
      color: '#fff', // Updated to black
      margin: '0 0 5px',
    },
    companyName: {
      fontSize: '14px',
      color: '#fff', // Updated to black
      margin: '0',
    },
    location: {
      fontSize: '12px',
      color: '#fff', // Updated to black
      margin: '0',
    },
    cardBody: {
      marginTop: '15px',
    },
    jobDescription: {
      fontSize: '16px',
      color: '#000', // Updated to black
      marginBottom: '10px',
      lineHeight: '1.5',
    },
    cardFooter: {
      marginTop: '20px',
      textAlign: 'center',
    },
    applyButton: {
      padding: '10px 20px',
      backgroundColor: '#69BEE5',
      color: '#000',
      opacity:0.8,
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '10px',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease',
    },
  };

export default Choose;
