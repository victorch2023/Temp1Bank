function Spa(){

    return (
        <HashRouter>
            <div>
                <NavBar/>
                <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:100, logstatus: false},{name:'luis',email:'luis@mit.edu',password:'az',balance:100, logstatus: false},{name:'carlos',email:'carlos@mit.edu',password:'az',balance:100, logstatus: false},{name:'rita',email:'rita@mit.edu',password:'az',balance:100, logstatus: false}], ops:[{userSearched:'rita@mit.edu',type:'deposit',amount:100, newBalance:200,date:'2023-11-17T02:31:52.815Z'},{userSearched:'rita@mit.edu',type:'deposit',amount:200, newBalance:400,date:'2023-11-17T02:32:52.815Z'},{userSearched:'rita@mit.edu',type:'deposit',amount:300, newBalance:700,date:'2023-11-17T02:33:52.815Z'},{userSearched:'rita@mit.edu',type:'deposit',amount:1000, newBalance:1700,date:'2023-11-17T02:34:52.815Z'}]}}
                >
                        <Route path="/" exact component={Home} />
                        <Route path="/CreateAccount/" component={CreateAccount} />
                        <Route path="/login/" component={Login} />
                        <Route path="/deposit/" component={Deposit} />
                        <Route path="/withdraw/" component={Withdraw} />
                        <Route path="/balance/" component={Balance} />
                        <Route path="/alldata/" component={AllData} />
                </UserContext.Provider>
            </div>
        </HashRouter>
    );
}

ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
)