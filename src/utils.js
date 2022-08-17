const ToGraphqlDateTime = (date) => {
    date = date.split(' ')
    let month = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ].indexOf(date[1])+1
    date[1] = (month < 10 ? '0' : '') + month
    const dateTime = date[3]+'-'+date[1]+'-'+date[2]+'T'+date[4]+date[6].slice(4,date[6].length-1)
    const lastDateTime = (Number(date[3])-1).toString()+'-'+date[1]+'-'+date[2]+'T'+date[4]+date[6].slice(4,date[6].length-1)
    return [lastDateTime,dateTime]
} 

export {ToGraphqlDateTime}