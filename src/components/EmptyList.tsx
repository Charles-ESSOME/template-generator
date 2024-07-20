import Empty from '../assets/images/empty.gif'

const EmptyList = ({ emptyMessage, showImg }: {emptyMessage: string, showImg: boolean}) => {
  if(showImg === undefined || showImg === null ) showImg = true;

  return (
    <div className="empty-list">
      { showImg &&<img className="empty-img" src={Empty} alt={emptyMessage} />}
      <div className="empty-message">{emptyMessage}</div>
    </div>
  )
}

export default EmptyList;