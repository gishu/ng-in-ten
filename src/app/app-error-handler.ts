import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        alert('handling unexpected error from global handler');
        console.log(error);
    }

}