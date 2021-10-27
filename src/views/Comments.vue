<template>
  <div>
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム</label>
    <input id="name" type="text" v-model="name">
    <br>
    <label for="comment">コメント:</label>
    <textarea id="comment" v-model="comment"></textarea>
    <br><br>
    <button @click="createComment">コメントをサーバーに送信</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <div>名前 : {{ post.fields.name.stringValue }}</div>
      <div>コメント : {{ post.fields.comment.stringValue }}</div>
      <br>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: []
    };
  },
  created() {
    axios.get(
      "/comments"
    )
    .then(response => {
      this.posts = response.data.documents;
      console.log(response.data.documents);
    })
    .catch(error => {
      console.log(error);
    });
  },
  methods: {
    createComment() {
      axios.post(
        "/comments",
        {
          fields: {
            name: {
              stringValue: this.name
            },
            comment: {
              stringValue: this.comment
            }
          }
        }
      )
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        }),
      this.name = "";
      this.comment = "";
    }
  }
}
</script>


