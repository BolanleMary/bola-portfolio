// Resume.js
import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resumee = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px', textAlign: 'center' }}>
      <h1>My Resume</h1>

      <div style={{ border: '1px solid #ccc', marginBottom: '20px' }}>
        <Document
  file="/OlowookereBolanle_Resume.pdf"
  onLoadSuccess={onDocumentLoadSuccess}
  loading="Loading PDF..."
>
  {Array.from(new Array(numPages), (el, index) => (
    <Page
      pageNumber={index + 1}
      width={Math.min(window.innerWidth * 0.9, 800)}
      renderAnnotationLayer={false}
      renderTextLayer={false}
    />
  ))}
</Document>
      </div>

      <a
        href="/OlowookereBolanle_Resume.pdf"
        download
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold',
        }}
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resumee;
