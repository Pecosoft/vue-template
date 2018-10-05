<style lang="scss">
.peco-actionsheet {
    position: fixed;
    left: 0;
    bottom: 0;
    transform: translate(0, 100%);
    backface-visibility: hidden;
    z-index: 5000;
    width: 100%;
    background-color: @pecoBgColorDefault;
    //slide up animation
    transition: transform .3s;
}
.peco-actionsheet__title {
    position: relative;
    height: 65px;
    padding: 0 20px;
    line-height: 1.4;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 14px;
    color: #888;
    background: #FCFCFD;
    &:before {
        .setBottomLine(@pecoCellBorderColor);
    }
    .peco-actionsheet__title-text {
        .ellipsisLn(2);
    }
}
.peco-actionsheet__menu{
    background-color: #FCFCFD;
}
.peco-actionsheet__action {
    margin-top: 6px;
    background-color: #FCFCFD;;
}
.peco-actionsheet__cell {
    position: relative;
    padding: 10px 0;
    text-align: center;
    font-size: 18px;
    &:before {
        .setTopLine(@pecoCellBorderColor);
    }
    &:active{
        background-color: @pecoBgColorActive;
    }
    &:first-child{
        &:before{
            display: none;
        }
    }
}


//android actionSheet
.peco-skin_android{
    .peco-actionsheet {
        position: fixed;
        left: 50%;
        top: 50%;
        bottom: auto;
        transform: translate(-50%, -50%);
        //padding: 0 40px;
        width: 274px;
        box-sizing: border-box;
        backface-visibility: hidden;
        background: transparent;
        //slide up animation
        transition: transform .3s;
    }
    .peco-actionsheet__action{
        display: none;
    }
    .peco-actionsheet__menu {
        border-radius: @pecoActionSheetAndroidBorderRadius;
        box-shadow: 0 6px 30px 0 rgba(0,0,0,.1);
    }
    .peco-actionsheet__cell {
        padding: 13px 24px;
        font-size: 16px;
        line-height: 1.4;
        text-align: left;
        &:first-child {
            border-top-left-radius: @pecoActionSheetAndroidBorderRadius;
            border-top-right-radius: @pecoActionSheetAndroidBorderRadius;
        }
        &:last-child {
            border-bottom-left-radius: @pecoActionSheetAndroidBorderRadius;
            border-bottom-right-radius: @pecoActionSheetAndroidBorderRadius;
        }
    }
}

//actionSheet aniamtion
.peco-actionsheet_toggle{
    transform: translate(0, 0);
}
</style>
