export interface IProps{
    children?:JSX.Element|JSX.Element[]
}

export interface IVideoCard{
id:{
    videoId:string;
};
snippet:{
channelId:string;
channelTitle:string;
description:string;
publishTime:string;
thumbnails:{
    medium:{
        height:number;
        url:string;
        width:string;
    }
};
title:string;
}
}

export interface IThumbNailProps{
    videoId:string;
    title:string;
    url:string;
    channelId:string;
    publishTime:string;
    channelTitle:string;

}

export interface IChannelInfo{
    id:string;
    snippet:{
        title:string;
        thumbnails:{
            default:{
                url:string
            }
        }
    }
}