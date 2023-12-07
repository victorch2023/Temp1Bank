function Withdraw(){
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState('');
    const [amount,setAmount]        = React.useState('');
    const ctx = React.useContext(UserContext);
    const type = 'withdraw'
    const date = new Date()

    function validate(field, label){
        if (!field){
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }


    function handleWithdraw(){
        console.log(amount);
        if (!validate(amount,     'amount'))        return;
        ctx.users[0].balance -= Number(amount);
        const balance = ctx.users[0].balance
        ctx.ops.push({type,amount,balance,date});
        setShow(false);
    }


    function clearForm(){
        setAmount('');
        setShow(true);
    }


    return(
        <Card
            bgcolor="primary"
            header="Withdraw"
            status={status}
            body={show ? (
                <>
                Balance<br/>
                <h2>USD: {JSON.stringify((ctx.users[0]).balance)}</h2><br/><br/>
                <p>Set a withdraw</p>
                Amount<br/>
                <input type="number" className="form-control" id="amount" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
                <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Confirm withdraw</button>
                </>
            ) : (
                <>
                Balance<br/>
                <h2>USD: {JSON.stringify((ctx.users[0]).balance)}</h2><br/><br/>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Set another withdraw</button>
                </>
            )}

        />
    )
}