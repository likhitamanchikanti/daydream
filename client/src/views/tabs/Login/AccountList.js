import React from 'react';

const AccountList = (account) => (
    <div className = "AccountList">
        <div>
            {account.username} : {account.password}
            <br></br>
        </div>
    </div>
);

export default AccountList