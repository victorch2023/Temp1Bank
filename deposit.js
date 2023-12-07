function Deposit(){
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [amount,setAmount]        = React.useState('');
    const [index, setIndex]         = React.useState('');
    const [balance, setBalance]     = React.useState('');
    const [userEmail, setUserEmail] = React.useState('');
    const ctx = React.useContext(UserContext);
    const type = 'deposit'
    const date = new Date()

/*        React.useEffect(() => {
        if (ctx.users.findIndex(user => user.logstatus === true)<0){
            setStatus('Please LOGIN first')
        //    setLogged(false)
        } else {
        //    setLogged(true)
            const newIndex = ctx.users.findIndex(user => user.logstatus === true);
            setIndex(newIndex);
            console.log(index);
            const newBalance = ctx.users[index].balance;
            setBalance(newBalance);
            console.log(balance);
            const userFinded = ctx.users[index].email;
            setUserEmail(userFinded);
            console.log(userEmail);
            setShow(true);
        };
        },[ctx.users]);
        console.log(index);
*/
    


    function validate(field, label){
        if (!field){
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }


    function handleDeposit(){
        console.log(amount);
        if (!validate(amount,     'amount'))        return;
        const newIndex = ctx.users.findIndex(user => user.logstatus === true);
        setIndex(newIndex);
        console.log(index);
        ctx.users[index].balance += Number(amount);
        const newBalance = ctx.users[index].balance;
        setBalance(newBalance);
        const userSearched = ctx.users[index].email;
        setUserEmail(userSearched);
        ctx.ops.push({userSearched,type,amount,newBalance,date});
        setShow(false);
    }


    function clearForm(){
        setAmount('');
        setShow(true);
    }


    return(
        <Card
            bgcolor="primary"
            header="Deposit"
            status={status}
            body={show ? (
                <>
                Balance<br/>
                <h2>USD: {balance}</h2><br/><br/>
                <p>Set a deposit</p>
                Amount<br/>
                <input type="number" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
                <button type="submit" className="btn btn-light" onClick={handleDeposit}>Confirm deposit</button>
                </>
            ) : (
                <>
                Balance<br/>
                <h2>USD: {balance}</h2><br/><br/>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Set another deposit</button>
                </>
            )}

        />
    )
}