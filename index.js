const Notification = (props) => {
    const { imgUrl, imgCls, msgCardCls, msgContent} = props.source;
    return (
     <div className= "msg-card" className={msgCardCls}>
        <img src={imgUrl} className={imgCls}/>
        <p>{msgContent}</p>
    </div>
    );
};

const sourcePrimary = {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/primary-icon-img.png",
    imgCls: "msg-img",
    msgCardCls: "msg-card",
    msgContent: "Information Message",
};
const sourceSuccess = {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/sucess-icon-img.png",
    imgCls: "msg-img",
    msgCardCls: "msg-card",
    msgContent: "Success Message",
};
const sourceWarning = {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/warning-icon-img.png",
    imgCls: "msg-img",
    msgCardCls: "msg-card",
    msgContent: "Warning Message",
};
const sourceDanger = {
    imgUrl: "https://assets.ccbp.in/frontend/react-js/danger-icon-img.png",
    imgCls: "msg-img",
    msgCardCls: "msg-card",
    msgContent: "Danger Message",
};
const element = (
  <div = className = "msg-bg">
    <h1 className = "msg-heading">Notification</h1>
    <Notification source = {sourcePrimary}/>
    <Notification source = {sourceSuccess}/>
    <Notification source = {sourceWarning}/>
    <Notification source = {sourceDanger}/>
    </div>  
);

ReactDOM.render(element, document.getElementById('root'))
