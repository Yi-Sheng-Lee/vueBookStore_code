<template>
  <div>
    <loading :active.sync="isLoading"/>
    <div class="container my-3">
      <section>
        <h3>台北店</h3>
        <div class="row">
          <div class="col-md-6 d-flex justify-content-center align-items-center">
            <table class="table">
              <tbody>
                <tr class="py-2">
                  <th>門市地址：</th>
                  <td>台北市重慶南路一段105號</td>
                </tr>
                <tr class="py-2">
                  <th>門市電話：</th>
                  <td>(02)-1234-5678</td>
                </tr>
                <tr class="py-2">
                  <th>門市傳真：</th>
                  <td>(02)-1234-5678</td>
                </tr>
                <tr class="py-2">
                  <th>門市客服信箱：</th>
                  <td>service@tenten.com.tw</td>
                </tr>
                <tr class="py-2">
                  <th>門市營業時間：</th>
                  <td>9:00AM ~ 11:00PM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-6 d-flex justify-content-center align-items-center">
            <table>
              <tbody>
                <tr>
                  <td>
                    <iframe
                      width="100%"
                      height="300"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=台北市重慶南路一段105號&z=16&output=embed&t="
                    ></iframe>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section class="my-4">
        <h3>台中店</h3>
        <div class="row">
          <div class="col-md-6 d-flex justify-content-center align-items-center">
            <table class="table">
              <tbody>
                <tr class="py-2">
                  <th>門市地址：</th>
                  <td>台中市西區台灣大道二段2號</td>
                </tr>
                <tr class="py-2">
                  <th>門市電話：</th>
                  <td>(02)-1234-5678</td>
                </tr>
                <tr class="py-2">
                  <th>門市傳真：</th>
                  <td>(02)-1234-5678</td>
                </tr>
                <tr class="py-2">
                  <th>門市客服信箱：</th>
                  <td>service@tenten.com.tw</td>
                </tr>
                <tr class="py-2">
                  <th>門市營業時間：</th>
                  <td>9:00AM ~ 11:00PM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-md-6 d-flex justify-content-center align-items-center">
            <table>
              <tbody>
                <tr>
                  <td>
                    <iframe
                      width="100%"
                      height="300"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=台中市西區台灣大道二段2號&z=16&output=embed&t="
                    ></iframe>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <h3>高雄店</h3>
        <div class="row">
          <div class="col-sm-6 d-flex justify-content-center align-items-center">
            <table class="table">
              <tbody>
                <tr class="py-2">
                  <th>門市地址：</th>
                  <td>高雄市苓雅區中山二路404號</td>
                </tr>
                <tr class="py-2">
                  <th>門市電話：</th>
                  <td>(02)-1234-5678</td>
                </tr>
                <tr class="py-2">
                  <th>門市傳真：</th>
                  <td>(02)-1234-5678</td>
                </tr>
                <tr class="py-2">
                  <th>門市客服信箱：</th>
                  <td>service@tenten.com.tw</td>
                </tr>
                <tr class="py-2">
                  <th>門市營業時間：</th>
                  <td>9:00AM ~ 11:00PM</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-sm-6 d-flex justify-content-center align-items-center">
            <table>
              <tbody>
                <tr>
                  <td>
                    <iframe
                      width="100%"
                      height="300"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=高雄市苓雅區中山二路404號&z=16&output=embed&t="
                    ></iframe>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>