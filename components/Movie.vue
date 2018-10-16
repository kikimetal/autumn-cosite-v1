<template lang="html">
  <div class="Movie">
    <div :id="movieId"></div>
    <script>
    // YouTubeの埋め込み
    function onYouTubeIframeAPIReady() {
      ytPlayer = new YT.Player(
        // 'youtube', // 埋め込む場所をIDで設定
        movieId, // 埋め込む場所をIDで設定
        {
          videoId: 'ANp0qch3XVM', // YouTubeのIDを指定
          playerVars: {
            loop: 1,//0:ループしない 1:ループする 1の場合playlist設定必須
            playlist: 'ANp0qch3XVM',//次に流すYoutubeのID
            controls: 0,//コントローラー無し
            autoplay: 1,//オートプレイ
            showinfo: 0//動画タイトルなど表示しない
          },
          events: {
            'onReady': onPlayerReady
          }
        }
      );
    }
    //プレイ準備完了後
    function onPlayerReady(event) {
      event.target.playVideo();
      event.target.mute();
    }
    </script>
  </div>
</template>

<script>
export default {
  props: [
    'movieId'
  ]
}
</script>

<style lang="scss" scoped>
.Movie{
  width: 100%;
}
</style>
