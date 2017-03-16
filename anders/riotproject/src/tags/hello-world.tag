<hello-world>
    <h1>Hello {opts.greet}!!!</h1>
    <p id="myTag">
      My name is {author.name}
      and I'm {author.age} {unit}s old
    </p>

    <style>
    :scope h1 {
      font-size: 420%;
      color: blue;
    }
    /** other tag specific styles **/
  </style>

  <script>
      this.author = {
          name: 'Martin',
          age: 25
      }
      this.unit = 'year'
  </script>
</hello-world>
