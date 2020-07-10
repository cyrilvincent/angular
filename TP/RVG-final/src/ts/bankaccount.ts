interface IBankAccount {
    id: number;
    owner: Customer;
    balance: number;
    creationDate: Date;
    transactions: Array<Transaction>;
}

/* tslint:disable:variable-name */
class BankAccount implements IBankAccount {
    private static _accountCounter: 0;
    private _id: number;
    private _owner: Customer;
    protected _balance = 0;
    private _creationDate: Date = new Date();
    private _transactions: Array<Transaction> = new Array<Transaction>();

    static accountNumber(): number {
        return BankAccount._accountCounter;
    }

    constructor(id: number, owner: Customer) {
        this._id = id;
        this._owner = owner;
        BankAccount. _accountCounter++;
    }

    get transactions(): Array<Transaction> {
        return this._transactions;
    }

    get id(): number {
        return this._id;
    }

    get owner(): Customer {
        return this._owner;
    }

    get creationDate(): Date {
        return this._creationDate;
    }

    get balance(): number {
        return this._balance;
    }

    deposit(amount: number) {
        this._balance += amount;
        this._transactions.push(new Transaction(0, new Date(), amount));
    }

    withdraw(amount: number) {
        if (this._balance >= amount) {
            this._balance -= amount;
            this._transactions.push(new Transaction(0, new Date(), -amount));
        } else {
            throw new RangeError('Amount error');
        }
    }


}

class InterestBankAccount extends BankAccount {
    private _interest: number;

    constructor(id: number, owner: Customer, interest: number) {
        super(id, owner);
        this._interest = interest;
    }

    get interest(): number {
        return this._interest;
    }
    set interest(interest: number) {
        this._interest = interest;
    }

    get balance(): number {
        return this._balance * (1 + this.interest);
    }
}

class Customer {
    constructor(private _id: number, private _firstName: string, private _lastName: string) {}

    get id(): number {
        return this._id;
    }

    get firstName(): string {
        return this._firstName;
    }
    set firstName(firstName: string) {
        this._firstName = firstName;
    }

    get lastName(): string {
        return this._lastName;
    }
    set lastName(lastName: string) {
        this._lastName = lastName;
    }
}

class Transaction {
    constructor(
        public id: number,
        public date: Date,
        public amount: number
    ) {}
}

interface Bank {
    id: number;
    name: string;
    accounts: Array<BankAccount>;
}

console.log('BankAccount');
let cust: Customer = new Customer(1, 'Cyril', 'Vincent');
let ba: BankAccount = new BankAccount(1, cust);
ba.deposit(1000);
console.log(ba.balance);
ba.withdraw(500);
console.log(ba);
let iba: InterestBankAccount = new InterestBankAccount(1, cust , 0.01);
iba.deposit(1000);
console.log(iba);
let b: Bank = {
    id: 1,
    name: 'EuroBank',
    accounts: [new BankAccount(1, cust), new BankAccount(2, cust)]
};
console.log(b);
