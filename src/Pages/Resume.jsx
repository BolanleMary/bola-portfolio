import React from 'react';

const Resume = () => {
  return (
    <div className='bg-slate-200'>
    <div  style={{ maxWidth: '800px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
        <div className='flex justify-between'>
            <h1 className='text-2xl'>My Resume</h1>
{/* Download button */}
      <a 
        href="/OlowookereBolanle_Résumé.pdf" 
        download 
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#575555', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '5px',
          fontWeight: 'bold',
        }}
      >
        Download Resume
      </a>
        </div>
      
      
      {/* Embed PDF */}
      <iframe e
        src="/OlowookereBolanle_Résumé.pdf" 
        title="Resume" 
        width="100%" 
        height="600px" 
        style={{ border: '1px solid #ccc', marginBottom: '20px' }} 
      />
      
      
    </div>
    </div>
  );
};

export default Resume;
