import { Capacitor } from "@capacitor/core"
import { Filesystem, Directory, DownloadFileResult } from "@capacitor/filesystem";
import { FileOpener } from "@capawesome-team/capacitor-file-opener";

const downloadFileInBrowser = (file: string, fileName: string): void => {
    fetch(file, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/pdf',
        },
    })
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(
                new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                fileName,
            );

            // Append to html link element page
            document.body.appendChild(link);

            // Start download
            link.click();

            // Clean up and remove the link
            link?.parentNode?.removeChild(link);
        });
}
const openFile = async (filePath: string | undefined, mimeType: string = 'application/pdf') => {
    await FileOpener.openFile({
        path: `${filePath}`,
        mimeType
    });
}
const downloadFileInNativeApp = (file: string, fileName: string): void => {
    Filesystem.downloadFile({
        path: fileName,
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        directory: Directory.Documents,
    }).then((res: DownloadFileResult) => {
        openFile(res.path);
    });
}
export const downloadFile = (url: string, fileName: string = 'PaySlip.pdf'): void => {
    if (Capacitor.isNativePlatform()) {
        downloadFileInNativeApp(url, fileName);
    } else {
        downloadFileInBrowser(url, fileName);
    }
}
