
/*
 * Copyright(c) Thomas Hansen thomas@servergardens.com, all right reserved
 */

/**
 * Common messages wrapper class. Contains static fields
 * for the most common messages system will publish,
 * and/or handle somehow.
 */
export class Messages {

  /**
   * Message will be published by the system when the user logs in.
   */
  static readonly USER_LOGGED_IN = 'app.user.logged-in';

  /**
   * Message will be published by the system when the user logs out.
   */
  static readonly USER_LOGGED_OUT = 'app.user.logged-out';

  /**
   * Message will be published by the system when the
   * navbar should be closed.
   */
  static readonly CLOSE_NAVBAR = 'app.navbar.close';

  /**
   * Message will be published by the system when the
   * navbar should be toggled.
   */
  static readonly TOGGLE_NAVBAR = 'app.navbar.toggle';

  /**
   * Message will be puvlished when the setup state of your system changes.
   */
  static readonly SETUP_STATE_CHANGED = 'app.setup.status-changed';
}
