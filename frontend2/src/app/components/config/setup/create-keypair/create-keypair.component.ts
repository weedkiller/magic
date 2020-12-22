
/*
 * Copyright(c) Thomas Hansen thomas@servergardens.com, all right reserved
 */

// Angular and system imports.
import { Component, OnInit } from '@angular/core';

// Application specific imports.
import { Messages } from 'src/app/models/message.model';
import { Response } from 'src/app/models/response.model';
import { ConfigService } from 'src/app/services/config.service';
import { BaseComponent } from 'src/app/components/base.component';
import { MessageService } from 'src/app/services/message.service';

/**
 * Component allowing user to setup a cryptography key pair.
 */
@Component({
  selector: 'app-create-keypair',
  templateUrl: './create-keypair.component.html',
  styleUrls: ['./create-keypair.component.scss']
})
export class CreateKeypairComponent extends BaseComponent implements OnInit {

  /**
   * CSRNG seed used when generating cryptography key.
   */
  public seed = '';

  /**
   * Strength of key pair to generate.
   */
  public strength = '4096';

  /**
   * Creates an instance of your component.
   * 
   * @param configService Configuration service used to generate server key pair
   * @param messageService Message service used to publish messages to other components.
   */
  public constructor(
    private configService: ConfigService,
    protected messageService: MessageService) {
    super(messageService);
  }

  /**
   * OnInit implementation.
   */
  public ngOnInit() {

    // Getting some initial random gibberish to use as seed when generating key pair.
    this.configService.getGibberish(40, 50).subscribe((res: Response) => {

      // Applying seed.
      this.seed = res.result;

    }, (error: any) => this.showError(error));
  }

  /**
   * Invoked when user clicks the next button.
   */
  public next() {

    // Invoking backend to generate a key pair.
    this.configService.generateKeyPair(+this.strength, this.seed).subscribe(() => {

      // Success, giving feedback to user.
      this.showInfo('Cryptography key pair successfully created');

      // Publishing message informing other components that setup state was changed.
      this.messageService.sendMessage({
        name: Messages.SETUP_STATE_CHANGED,
        content: 'crypto'
      });
    });
  }
}