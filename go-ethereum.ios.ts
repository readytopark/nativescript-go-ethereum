declare var GoEthereumManager: any;

export class GoEthereum {

  private manager: any;

  constructor() {
    this.manager = GoEthereumManager.sharedInstance();

    if (!this.manager) {
      console.log("MANAGER ERROR: Can not create a shared instance of GoEthereumManager");
    } else {
      console.log("MANAGER SUCCESS!!");
    }
  }

  public test() {
    return "hello";
  }

  public createAccount(password: string) {
    var result = this.manager.createAccount(password);

    if (!result) {
      console.log("Couldn't create a account");
    }

    return result;
  }
}