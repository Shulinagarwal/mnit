import React, { useState } from 'react';

function Create() {
  const roles = [
    'Frontend Engineer',
    'Backend Engineer',
    'AI Engineer',
    'Marketing Specialist',
    'Full-Stack Developer',
    'Graphic Designer',
    'Content Writer',
    'SEO Specialist'
  ];

  // Random Indian names for team members
  const indianNames = [
    'Aarav', 'Vihaan', 'Aditya', 'Sai', 'Ishaan', 'Arjun', 'Kartik', 'Dhruv', 'Ravi', 'Krishna'
  ];

  const [formData, setFormData] = useState({
    name: '',
    budget: '',
    teamMembers: ['', '', '', ''],
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index !== null) {
      // Update specific team member selection
      const updatedMembers = [...formData.teamMembers];
      updatedMembers[index] = value;
      setFormData({ ...formData, teamMembers: updatedMembers });
    } else {
      // Update name or budget
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    const randomNames = [...indianNames]; // Copy the names array
    const shuffledNames = randomNames.sort(() => Math.random() - 0.5); // Shuffle the names randomly

    // Total budget entered by user
    const totalBudget = parseInt(formData.budget);

    // Uneven budget distribution for 4 team members
    const teamBudget = [
      Math.floor(totalBudget * 0.3), // 30% of total budget
      Math.floor(totalBudget * 0.25), // 25% of total budget
      Math.floor(totalBudget * 0.2),  // 20% of total budget
      totalBudget - (Math.floor(totalBudget * 0.3) + Math.floor(totalBudget * 0.25) + Math.floor(totalBudget * 0.2)) // Remaining budget
    ];

    // Create the "Best Team" with 4 members
    const bestTeam = {
      teamName: 'Best Team',
      teamMembers: [],
      budget: totalBudget,
    };

    // Add 4 members to the team with the uneven budget distribution
    for (let i = 0; i < 4; i++) {
      if (shuffledNames.length > 0) {
        bestTeam.teamMembers.push({
          name: shuffledNames.pop(),
          role: formData.teamMembers[i] || 'Role Unassigned',
          budget: teamBudget[i], // Assign each member their share of the budget
        });
      }
    }

    // Set the team data and submitted form data
    setSubmittedData({ formData, bestTeam });
  };

  const styles = {
    pageContainer: {
      backgroundImage: 'url("https://res.cloudinary.com/dqskebjcf/image/upload/v1731051920/Reviews_and_testomonials_dpgvdl.png")', // Replace with your image URL
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: '20px',
    },
    container: {
      backgroundColor: 'rgba(0, 31, 63, 0.85)',
      color: '#ffffff',
      padding: '20px',
      borderRadius: '8px',
      maxWidth: '600px',
      margin: '20px auto',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    formGroup: {
      margin: '10px 0',
    },
    label: {
      marginRight: '10px',
      display: 'block',
      marginBottom: '5px',
    },
    input: {
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #cccccc',
      marginBottom: '10px',
      backgroundColor: '#ffffff',
      color: '#000000',
      outline: 'none',
    },
    select: {
      width: '100%',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #cccccc',
      backgroundColor: '#004080',
      color: '#ffffff',
      outline: 'none',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#0066cc',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '10px',
      fontSize: '16px',
    },
    result: {
      marginTop: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      padding: '15px',
      borderRadius: '8px',
    },
    team: {
      marginBottom: '20px',
    },
    teamHeader: {
      fontSize: '20px',
      fontWeight: 'bold',
      textDecoration: 'underline',
    },
    teamMember: {
      marginLeft: '10px',
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h2 style={styles.header}>Team Selection</h2>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Project Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="budget" style={styles.label}>Maximum Budget (₹):</label>
          <input
            type="number"
            id="budget"
            name="budget"
            placeholder="Enter budget in rupees"
            value={formData.budget}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        {/* 4 Dropdowns for Role Selection */}
        {[1, 2, 3, 4].map((member, index) => (
          <div key={index} style={styles.formGroup}>
            <label htmlFor={`member${index}`} style={styles.label}>
              Team Member {member}:
            </label>
            <select
              id={`member${index}`}
              name={`member${index}`}
              value={formData.teamMembers[index]}
              onChange={(e) => handleChange(e, index)}
              style={styles.select}
            >
              <option value="">Select a role</option>
              {roles.map((role, idx) => (
                <option key={idx} value={role}>{role}</option>
              ))}
            </select>
          </div>
        ))}
        <button onClick={handleSubmit} style={styles.button}>Create</button>

        {submittedData && (
          <div style={styles.result}>
            <h3>{submittedData.bestTeam.teamName} - Total Budget: ₹{submittedData.bestTeam.budget}</h3>
            {submittedData.bestTeam.teamMembers.map((member, index) => (
              <div key={index} style={styles.team}>
                <strong>{member.name}</strong> ({member.role}) - Budget: ₹{member.budget}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Create;
