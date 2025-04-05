import React from "react";
import { Button } from "react-bootstrap";

interface DownloadBtnsProps {
  onClose: () => void;
}

export const DownloadBtns: React.FC<DownloadBtnsProps> = ({ onClose }) => {
  return (
    <div
      className="position-fixed top-50 resume-drop start-50 align-items-center align-self-center translate-middle w-25 bg-white p-4 rounded shadow text-center"
      style={{ zIndex: 9999 }}
    >
      <Button
        onClick={onClose}
        className="btn-close position-absolute"
        style={{ top: "10px", right: "10px" }}
        aria-label="Close"
      ></Button>
      <h5 className="mb-3 fw-bold">Download My Resume</h5>
      <div className="d-flex justify-content-center gap-3">
        <Button
          as="a"
          variant="primary"
          href="/assets/resume/Erik_Caceres_Resume.pdf"
          download
        >
          PDF
        </Button>
        <Button
          as="a"
          variant="secondary"
          href="/assets/resume/Erik_Caceres_Resume.docx"
          download
        >
          Word
        </Button>
      </div>
    </div>
  );
};
