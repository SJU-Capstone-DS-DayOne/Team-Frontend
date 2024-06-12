import { useState } from "react";
import { Document, Page } from "react-pdf";

export default function AboutUs() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const pdfUrl = `${import.meta.env.BASE_URL}pdfs/capstone_ppt.pdf`;

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className="mt-[10dvh] w-full h-full">
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}
