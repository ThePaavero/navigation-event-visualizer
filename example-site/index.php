<?php
sleep(rand(3, 5));
$targetDummyPage = isset($_GET['page']) ? $_GET['page'] : 'a';
$dummyPagesToDummyContent = [
  'a' => '<h1>Page A!</h1> <p> Tincidunt vitae semper quis lectus nulla at volutpat diam ut. Neque convallis a cras semper auctor neque vitae. Odio ut sem nulla pharetra diam sit amet. Pulvinar elementum integer enim neque. Et netus et malesuada fames ac turpis egestas. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Non consectetur a erat nam at lectus urna. Ullamcorper a lacus vestibulum sed arcu non. Fames ac turpis egestas maecenas pharetra convallis posuere. Magna eget est lorem ipsum. Etiam tempor orci eu lobortis elementum nibh. Sit amet cursus sit amet dictum sit amet justo. Tristique senectus et netus et malesuada fames. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. In arcu cursus euismod quis viverra nibh.</p>',
  'b' => '<h1>Page B!</h1> <p> Enim ut sem viverra aliquet eget sit amet tellus. Purus in mollis nunc sed id semper risus in hendrerit. Elementum curabitur vitae nunc sed. Congue mauris rhoncus aenean vel elit scelerisque. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Tellus at urna condimentum mattis pellentesque id nibh. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Suscipit tellus mauris a diam maecenas sed enim. Fermentum et sollicitudin ac orci phasellus egestas tellus. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Id leo in vitae turpis massa sed elementum tempus egestas.</p>',
  'c' => '<h1>Page C!</h1> <p> Et malesuada fames ac turpis egestas integer. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Nunc id cursus metus aliquam eleifend. Lacus sed viverra tellus in hac. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Sed euismod nisi porta lorem mollis aliquam. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Sed euismod nisi porta lorem mollis aliquam. Arcu bibendum at varius vel pharetra. Vitae turpis massa sed elementum tempus egestas sed. Dui ut ornare lectus sit amet est placerat. Nibh tellus molestie nunc non blandit massa enim. In iaculis nunc sed augue lacus viverra vitae congue. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Consequat interdum varius sit amet mattis vulputate. In vitae turpis massa sed. Sit amet consectetur adipiscing elit ut aliquam. Senectus et netus et malesuada fames ac turpis.</p>',
  'd' => '<h1>Page D!</h1> <p> Elit sed vulputate mi sit. Nisi est sit amet facilisis magna etiam tempor. Non nisi est sit amet facilisis magna etiam tempor. Ut eu sem integer vitae justo. Tortor pretium viverra suspendisse potenti nullam. Diam donec adipiscing tristique risus nec. Diam maecenas sed enim ut sem viverra aliquet eget sit. Interdum varius sit amet mattis vulputate. Convallis a cras semper auctor. Velit dignissim sodales ut eu sem integer vitae. In arcu cursus euismod quis viverra nibh cras. Egestas congue quisque egestas diam in arcu cursus euismod quis. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Donec ac odio tempor orci. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Ultrices dui sapien eget mi proin sed libero enim.</p>',
  'e' => '<h1>Page E!</h1> <p> Gravida in fermentum et sollicitudin. Laoreet id donec ultrices tincidunt arcu non sodales. Sed libero enim sed faucibus turpis in eu. Pulvinar elementum integer enim neque volutpat ac. Tellus molestie nunc non blandit massa enim nec dui nunc. Sed faucibus turpis in eu. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque. Nunc consequat interdum varius sit amet mattis vulputate enim. Adipiscing elit duis tristique sollicitudin nibh sit amet. Tellus orci ac auctor augue mauris.</p>',
  'f' => '<h1>Page F!</h1> <p> Ac tortor dignissim convallis aenean et tortor at. Libero id faucibus nisl tincidunt eget nullam. Aliquam ultrices sagittis orci a. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Etiam sit amet nisl purus in mollis nunc sed id. Sed id semper risus in hendrerit. Vel pretium lectus quam id leo in. Risus viverra adipiscing at in. Egestas diam in arcu cursus euismod quis. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Malesuada proin libero nunc consequat interdum varius. Duis ut diam quam nulla porttitor. Velit aliquet sagittis id consectetur. Diam donec adipiscing tristique risus nec feugiat. Etiam erat velit scelerisque in dictum non. Viverra adipiscing at in tellus integer feugiat. Consectetur a erat nam at lectus. Turpis egestas sed tempus urna et pharetra pharetra massa.</p>',
  'g' => '<h1>Page G!</h1> <p> Neque convallis a cras semper auctor neque. At urna condimentum mattis pellentesque. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Ullamcorper morbi tincidunt ornare massa. Habitasse platea dictumst quisque sagittis purus sit. Tincidunt dui ut ornare lectus sit amet est. Duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Scelerisque varius morbi enim nunc faucibus a pellentesque. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Amet luctus venenatis lectus magna fringilla urna porttitor. Eget est lorem ipsum dolor sit. Risus ultricies tristique nulla aliquet enim tortor at auctor. Justo laoreet sit amet cursus sit amet dictum. Congue quisque egestas diam in arcu cursus. Sit amet aliquam id diam maecenas ultricies mi eget. Lobortis mattis aliquam faucibus purus. Ultrices in iaculis nunc sed augue lacus viverra. Adipiscing commodo elit at imperdiet dui accumsan sit amet.</p>',
];

$text = isset($dummyPagesToDummyContent[$targetDummyPage]) ? $dummyPagesToDummyContent[$targetDummyPage] : '404';

?>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Demo</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      font-size: 16px;
    }
  </style>
</head>
<body>
<header>
  <h2>
    <a href="./">Demo of indicating when you've clicked a link that navigates to another page.</a>
  </h2>
</header>
<nav>
  <ul>
    <li>
      <a href="?page=a">Load page A</a>
      <a href="?page=b">Load page B</a>
      <a href="?page=c">Load page C</a>
      <a href="?page=d">Load page D</a>
      <a href="?page=e">Load page E</a>
      <a href="?page=f">Load page F</a>
      <a href="?page=g">Load page G</a>
    </li>
  </ul>
</nav>
<div class="content"><?php echo $text ?></div>
<script src="./../navigation-presentation.js"></script>
</body>
</html>