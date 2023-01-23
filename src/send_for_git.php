  <?php
  $token = "YOUR_TOKEN";
  $chat_id = 'YOUR_ID_CHAT_WITH_MINUS_WITHOUT_QUOTES';

  $textMessage = 'Нова заявка Uber!' . "\n" . 'Name: ' . $_POST['name'] . "\n" . 'Phone: ' . $_POST['phone'];
  $textMessage = urlencode($textMessage);

  $urlQuery = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chat_id . "&text=" . $textMessage;

  $result = file_get_contents($urlQuery);
  ?>