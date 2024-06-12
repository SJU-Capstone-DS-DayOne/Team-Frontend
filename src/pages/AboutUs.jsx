import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../pdfs/capstone_ppt.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useState } from "react";

export default function AboutUs() {
    const [numPages, setNumPages] = useState(1);

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
    ).toString();

    return (
        <div className="relative">
            <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute z-10 cursor-pointer top-1/2 left-2"
                onClick={() => setNumPages(numPages - 1)}
                style={{
                    pointerEvents: numPages === 1 ? "none" : "auto",
                }}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.2655 4.17561C16.7208 4.59839 16.7472 5.31021 16.3244 5.76551L10.5352 12L16.3244 18.2345C16.7472 18.6898 16.7208 19.4016 16.2655 19.8244C15.8102 20.2472 15.0984 20.2208 14.6756 19.7655L8.17561 12.7655C7.7748 12.3339 7.7748 11.6661 8.17561 11.2345L14.6756 4.2345C15.0984 3.7792 15.8102 3.75283 16.2655 4.17561Z"
                    fill="#6E3BFF"
                />
            </svg>
            <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute z-10 cursor-pointer top-1/2 right-2"
                onClick={() => setNumPages(numPages + 1)}
                style={{
                    pointerEvents: numPages === 33 ? "none" : "auto",
                }}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.73449 4.17561C7.27919 4.59839 7.25283 5.31021 7.67561 5.76551L13.4648 12L7.67561 18.2345C7.25283 18.6898 7.27919 19.4016 7.73449 19.8244C8.18979 20.2472 8.90161 20.2208 9.32439 19.7655L15.8244 12.7655C16.2252 12.3339 16.2252 11.6661 15.8244 11.2345L9.32439 4.2345C8.90161 3.7792 8.18979 3.75283 7.73449 4.17561Z"
                    fill="#6E3BFF"
                />
            </svg>

            <Document file={pdf}>
                <Page pageNumber={numPages}></Page>
            </Document>
        </div>
    );
}
