
/*
 * Copyright(c) Thomas Hansen thomas@servergardens.com, all right reserved
 */

// Angular and system imports.
import { Component } from '@angular/core';

// Application specific imports.
import { AuthService } from '../services/auth.service';
import { FeedbackService } from 'src/app/services/feedback.service';

/**
 * Change password component allowing users to change their current password.
 */
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  /**
   * New password user wants to use.
   */
  public password = '';

  /**
   * Repeated value of new password user wants to use.
   */
  public repeatPassword = '';

  /**
   * Creates an instance of your component.
   * 
   * @param authService Needed to invoke backend to actually perform the password change
   * @param feedbackService Needed to provide feedback to user
   */
  constructor(
    private authService: AuthService,
    private feedbackService: FeedbackService) { }

  /**
   * Invoked when user wants to save his or her password.
   */
  public savePassword() {

    // Sanity checking password.
    if (this.password.length === 0 || this.password !== this.repeatPassword) {

      // Oops!
      this.feedbackService.showInfo('You must supply a new password and repeat it correctly');

    } else {

      // Invoking backend to perform actual password update.
      this.authService.changePassword(this.password).subscribe(() => {

        // Providing user with some feedback, and forcing user to login again.
        this.feedbackService.showInfoShort('Your password was successfully updated, please login again');
        this.authService.logout(true, false);

      }, (error: any) => this.feedbackService.showError(error));
    }
  }
}
