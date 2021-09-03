
class bank {
    account_details = {
        1000: { acno: 1000, balance: 2000, username: "userone", password: "userone" },
        1001: { acno: 1001, balance: 3000, username: "usertwo", password: "usertwo" },
        1002: { acno: 1002, balance: 2002, username: "userthree", password: "userthree" },
        1003: { acno: 1003, balance: 20000, username: "userfour", password: "userfour" },
    }
    session = {};

    accountcreate(acno, balance, username, password) {
        if (acno in this.account_details) {
            console.log(`account already exist`);
        }


        this.account_details[acno] = { acno, balnce, username, password };
        console.log(`account created`);
        console.log(this.account_details);

    }


}

