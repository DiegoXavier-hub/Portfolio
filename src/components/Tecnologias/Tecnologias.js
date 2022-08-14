import "./anim.js"
import React from "react"
import "./Tecnologias.css"

function Tecnologias(){
    return(
        <section id="Tecnologias">
            <section>
                <div className="Tech">
                    <svg fill="#FFFFFF" viewBox="0 0 50 50" width="80px" height="80px" fillRule="evenodd"><path fillRule="evenodd" d="M 39 40 L 25 44 L 11 40 L 8 6 L 42 6 C 41 17.332031 40 28.667969 39 40 Z M 39.816406 8 L 10.183594 8 L 12.871094 38.453125 L 25 41.921875 L 37.128906 38.453125 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"/></svg>
                    <div>
                        <h1>CSS3</h1>
                        <br/>
                        <p>CSS3 conta com efeitos de transição, imagem, imagem de fundo/background</p>
                    </div>
                </div>
                <div className="Tech">
                    <svg fill="#FFFFFF" viewBox="0 0 50 50" width="80px" height="80px"><path d="M 34.554688 3.984375 C 33.775003 3.9581582 32.958884 4.0940926 32.140625 4.359375 C 30.504109 4.889941 28.789203 5.9238848 27.029297 7.3554688 C 26.339589 7.9165071 25.643623 8.5578288 24.945312 9.2382812 C 24.262398 8.5751039 23.580733 7.9490442 22.90625 7.4003906 C 21.147758 5.9699557 19.4375 4.9375672 17.804688 4.4082031 C 16.171878 3.8788386 14.547223 3.8624356 13.212891 4.6328125 C 11.878558 5.4031893 11.080619 6.8173558 10.722656 8.4960938 C 10.364693 10.174832 10.402173 12.173992 10.761719 14.412109 C 10.886606 15.189511 11.066671 16.005078 11.269531 16.835938 C 10.507095 17.067004 9.7666767 17.309955 9.0800781 17.578125 C 7.0079817 18.387438 5.2934468 19.355663 4.0449219 20.507812 C 2.7963969 21.659962 1.9902344 23.058304 1.9902344 24.59375 C 1.9902344 26.129196 2.7963969 27.525585 4.0449219 28.677734 C 5.2934468 29.829884 7.0079817 30.800062 9.0800781 31.609375 C 9.8142516 31.896126 10.609118 32.154326 11.429688 32.398438 C 11.134531 33.501278 10.895394 34.571467 10.732422 35.585938 C 10.372587 37.825853 10.334588 39.825265 10.693359 41.507812 C 11.052134 43.19036 11.850478 44.612534 13.191406 45.386719 C 14.532336 46.160905 16.164264 46.141894 17.800781 45.611328 C 19.437297 45.080762 21.15025 44.048772 22.910156 42.617188 C 23.593512 42.061316 24.284757 41.427206 24.976562 40.753906 C 25.671663 41.430886 26.366333 42.068604 27.052734 42.626953 C 28.811227 44.057387 30.523438 45.089776 32.15625 45.619141 C 33.789061 46.148505 35.411762 46.164908 36.746094 45.394531 C 38.080426 44.624154 38.878366 43.209988 39.236328 41.53125 C 39.59429 39.852512 39.554857 37.85335 39.195312 35.615234 C 39.031899 34.598012 38.792614 33.526227 38.496094 32.419922 C 39.343769 32.169866 40.163744 31.904721 40.919922 31.609375 C 42.992018 30.800062 44.706553 29.829884 45.955078 28.677734 C 47.203603 27.525585 48.009766 26.129196 48.009766 24.59375 C 48.009766 23.058304 47.203603 21.659963 45.955078 20.507812 C 44.706553 19.355663 42.992018 18.387438 40.919922 17.578125 C 40.22347 17.306107 39.471688 17.059992 38.697266 16.826172 C 38.901775 15.990221 39.083345 15.168805 39.208984 14.386719 C 39.568819 12.146804 39.606825 10.145439 39.248047 8.4628906 C 38.889279 6.7803434 38.088976 5.3601244 36.748047 4.5859375 C 36.077582 4.1988452 35.334372 4.0105918 34.554688 3.984375 z M 34.462891 6.0195312 C 34.952154 6.03291 35.369535 6.1493386 35.726562 6.3554688 C 36.440618 6.7677287 36.968419 7.5700924 37.25 8.890625 C 37.531581 10.211156 37.521848 11.99533 37.189453 14.064453 C 37.075647 14.772878 36.910402 15.52369 36.722656 16.292969 C 34.677708 15.800829 32.436969 15.435424 30.048828 15.220703 C 28.849094 13.558465 27.615953 12.046374 26.373047 10.703125 C 27.030182 10.061662 27.683063 9.4617259 28.320312 8.9433594 C 29.946026 7.6209332 31.485126 6.7210962 32.769531 6.3046875 C 33.411734 6.0964824 33.973627 6.0061525 34.462891 6.0195312 z M 15.486328 6.0253906 C 15.978419 6.0116533 16.541491 6.1017415 17.185547 6.3105469 C 18.473657 6.7281576 20.015451 7.6275969 21.642578 8.9511719 C 22.266889 9.4590141 22.905452 10.045872 23.548828 10.671875 C 22.296955 12.025781 21.055175 13.553705 19.847656 15.230469 C 17.468002 15.449155 15.235261 15.818024 13.199219 16.3125 C 13.012686 15.546898 12.84964 14.799095 12.736328 14.09375 C 12.403642 12.02283 12.39534 10.236451 12.677734 8.9121094 C 12.960128 7.5877677 13.492238 6.7813032 14.212891 6.3652344 C 14.573216 6.1572002 14.994237 6.0391279 15.486328 6.0253906 z M 24.976562 12.142578 C 25.791064 13.028975 26.606064 13.9993 27.414062 15.042969 C 26.620033 15.009861 25.816288 14.990234 25 14.990234 C 24.167457 14.990234 23.34841 15.010498 22.539062 15.044922 C 23.347352 14.000306 24.16175 13.029737 24.976562 12.142578 z M 25 17.009766 C 26.359894 17.009766 27.685348 17.065647 28.974609 17.160156 C 29.86173 18.434311 30.728648 19.786055 31.554688 21.216797 C 32.280504 22.473948 32.937328 23.729163 33.535156 24.96875 C 32.931017 26.224782 32.263184 27.496972 31.527344 28.771484 C 30.879609 29.893393 30.20319 30.958949 29.515625 31.986328 C 28.059313 32.10805 26.550303 32.175781 25 32.175781 C 23.412375 32.175781 21.869462 32.104031 20.380859 31.976562 C 19.704742 30.963955 19.039735 29.912587 18.402344 28.808594 C 17.668186 27.536996 17.003577 26.269079 16.400391 25.015625 C 17.006106 23.755092 17.673701 22.47818 18.412109 21.199219 C 19.233818 19.775977 20.098207 18.432055 20.980469 17.164062 C 22.283609 17.067424 23.62445 17.009766 25 17.009766 z M 31.550781 17.410156 C 33.198531 17.615819 34.745652 17.90154 36.185547 18.244141 C 35.758129 19.645287 35.231654 21.108808 34.59375 22.619141 C 34.179567 21.820719 33.750599 21.019585 33.287109 20.216797 C 32.725727 19.244455 32.142026 18.315962 31.550781 17.410156 z M 18.34375 17.425781 C 17.764654 18.315097 17.194836 19.224578 16.644531 20.177734 C 16.175094 20.990823 15.737221 21.802736 15.318359 22.611328 C 14.68596 21.110075 14.162654 19.654877 13.738281 18.261719 C 15.168002 17.918363 16.706766 17.633813 18.34375 17.425781 z M 38.164062 18.775391 C 38.872944 18.989877 39.557566 19.21371 40.185547 19.458984 C 42.0957 20.205046 43.60665 21.088493 44.585938 21.992188 C 45.565224 22.895882 45.990234 23.757696 45.990234 24.59375 C 45.990234 25.429804 45.565225 26.291619 44.585938 27.195312 C 43.60665 28.099007 42.0957 28.982454 40.185547 29.728516 C 39.487698 30.001079 38.72096 30.248243 37.923828 30.482422 C 37.355199 28.723643 36.629408 26.888772 35.765625 25.015625 C 36.758785 22.865083 37.561088 20.768289 38.164062 18.775391 z M 11.802734 18.785156 C 12.398795 20.758095 13.190852 22.834207 14.169922 24.962891 C 13.30047 26.846955 12.571087 28.692254 12 30.460938 C 11.23096 30.232919 10.490212 29.992451 9.8144531 29.728516 C 7.9042995 28.982454 6.39335 28.099007 5.4140625 27.195312 C 4.434775 26.291618 4.0097656 25.429804 4.0097656 24.59375 C 4.0097656 23.757696 4.434775 22.895882 5.4140625 21.992188 C 6.39335 21.088493 7.9042995 20.205046 9.8144531 19.458984 C 10.432774 19.217483 11.105915 18.996837 11.802734 18.785156 z M 25 20 C 22.250421 20 20 22.250421 20 25 C 20 27.749579 22.250421 30 25 30 C 27.749579 30 30 27.749579 30 25 C 30 22.250421 27.749579 20 25 20 z M 25 22 C 26.668699 22 28 23.331301 28 25 C 28 26.668699 26.668699 28 25 28 C 23.331301 28 22 26.668699 22 25 C 22 23.331301 23.331301 22 25 22 z M 34.619141 27.363281 C 35.143596 28.604493 35.599462 29.819048 35.982422 30.990234 C 34.779808 31.269089 33.499292 31.504052 32.152344 31.689453 C 32.540071 31.070779 32.922982 30.44057 33.296875 29.792969 C 33.765554 28.981192 34.200846 28.17048 34.619141 27.363281 z M 15.341797 27.365234 C 15.762305 28.177437 16.200272 28.991753 16.671875 29.808594 C 17.041066 30.448052 17.418053 31.072363 17.800781 31.683594 C 16.457817 31.497372 15.181231 31.261605 13.982422 30.982422 C 14.363652 29.81481 14.819744 28.602796 15.341797 27.365234 z M 13.40625 32.923828 C 15.216074 33.352568 17.177716 33.681912 19.257812 33.896484 C 20.646655 35.905245 22.092677 37.70929 23.548828 39.287109 C 22.897813 39.921859 22.252566 40.517583 21.621094 41.03125 C 19.99538 42.353677 18.454326 43.251559 17.169922 43.667969 C 15.885516 44.084378 14.926946 44.029446 14.212891 43.617188 C 13.498835 43.204927 12.972987 42.402563 12.691406 41.082031 C 12.409825 39.761499 12.417606 37.979279 12.75 35.910156 C 12.900793 34.971492 13.12615 33.966374 13.40625 32.923828 z M 36.560547 32.931641 C 36.842786 33.979991 37.069087 34.989811 37.220703 35.933594 C 37.553389 38.004513 37.56169 39.788939 37.279297 41.113281 C 36.996903 42.437623 36.466746 43.24604 35.746094 43.662109 C 35.025442 44.078178 34.059594 44.13441 32.771484 43.716797 C 31.483374 43.299186 29.941578 42.397794 28.314453 41.074219 C 27.678439 40.556858 27.028726 39.958258 26.373047 39.318359 C 27.838664 37.73459 29.295467 35.920758 30.693359 33.900391 C 32.778701 33.687251 34.745791 33.359875 36.560547 32.931641 z M 21.867188 34.101562 C 22.893951 34.157518 23.934244 34.195312 25 34.195312 C 26.030504 34.195312 27.037063 34.159787 28.03125 34.107422 C 27.014961 35.478593 25.979034 36.725149 24.947266 37.847656 C 23.916125 36.722751 22.882145 35.473968 21.867188 34.101562 z"/></svg>
                    <div>
                        <h1>React</h1>
                        <br/>
                        <p>Uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web</p>
                    </div>
                </div>
                <div className="Tech">
                    <img src="https://avatars.githubusercontent.com/u/32372333?s=200v=4" alt=""/>
                    <div>
                        <h1>Axios</h1>
                        <br/>
                        <p>Axios é um cliente HTTP baseado em Promises para fazer requisições. Pode ser utilizado tanto no navegador quanto no Node. js ou qualquer serviço de API.</p>
                    </div>
                </div>
            </section>
            
            <section>
                <div className="Tech">
                    <svg fill="#FFFFFF" viewBox="0 0 50 50" width="65px" height="65px"><path d="M 5.28125 2 C 4.765625 2.09375 4.410156 2.574219 4.46875 3.09375 L 8 42.53125 C 8.046875 42.933594 8.332031 43.265625 8.71875 43.375 L 24.71875 47.96875 C 24.902344 48.023438 25.097656 48.023438 25.28125 47.96875 L 41.28125 43.375 C 41.667969 43.265625 41.953125 42.933594 42 42.53125 L 45.53125 3.09375 C 45.558594 2.8125 45.464844 2.535156 45.273438 2.324219 C 45.082031 2.117188 44.8125 2 44.53125 2 L 5.46875 2 C 5.4375 2 5.40625 2 5.375 2 C 5.34375 2 5.3125 2 5.28125 2 Z M 6.5625 4 L 43.4375 4 L 40.09375 41.65625 L 25 45.9375 L 9.90625 41.65625 Z M 12.53125 10.0625 C 12.015625 10.15625 11.660156 10.636719 11.71875 11.15625 L 13.0625 25.9375 C 13.09375 26.453125 13.515625 26.859375 14.03125 26.875 L 30 26.875 L 29.5625 31.46875 L 25.03125 32.4375 L 20.4375 31.46875 L 20.28125 29.84375 C 20.25 29.316406 19.808594 28.90625 19.28125 28.90625 L 14.40625 28.90625 C 14.125 28.90625 13.855469 29.023438 13.664063 29.230469 C 13.472656 29.441406 13.378906 29.71875 13.40625 30 L 13.96875 36.125 C 14 36.527344 14.269531 36.875 14.65625 37 L 24.59375 40.03125 L 24.71875 40.0625 C 24.902344 40.117188 25.097656 40.117188 25.28125 40.0625 L 35.34375 37 C 35.742188 36.886719 36.027344 36.539063 36.0625 36.125 L 37.375 21.09375 C 37.402344 20.816406 37.3125 20.542969 37.128906 20.335938 C 36.945313 20.128906 36.683594 20.007813 36.40625 20 L 19.375 20 L 19.125 16.90625 L 36.84375 16.90625 C 37.363281 16.910156 37.796875 16.515625 37.84375 16 L 38.28125 11.15625 C 38.308594 10.875 38.214844 10.597656 38.023438 10.386719 C 37.832031 10.179688 37.5625 10.0625 37.28125 10.0625 L 12.71875 10.0625 C 12.65625 10.054688 12.59375 10.054688 12.53125 10.0625 Z M 13.8125 12.0625 L 36.1875 12.0625 L 35.9375 14.90625 L 18.03125 14.90625 C 17.75 14.90625 17.480469 15.023438 17.289063 15.230469 C 17.097656 15.441406 17.003906 15.71875 17.03125 16 L 17.5 21.09375 C 17.546875 21.597656 17.964844 21.988281 18.46875 22 L 35.3125 22 L 34.125 35.28125 L 25 38.03125 L 15.875 35.28125 L 15.5 30.90625 L 18.375 30.90625 L 18.5 32.375 C 18.53125 32.816406 18.847656 33.183594 19.28125 33.28125 L 24.84375 34.4375 C 24.976563 34.464844 25.117188 34.464844 25.25 34.4375 L 30.71875 33.28125 C 31.152344 33.183594 31.46875 32.816406 31.5 32.375 L 32.09375 25.9375 C 32.109375 25.660156 32.011719 25.390625 31.824219 25.191406 C 31.632813 24.988281 31.371094 24.875 31.09375 24.875 L 14.9375 24.875 Z"/></svg>
                    <div>
                        <h1>HTML5</h1>
                        <br/>
                        <p>Uma linguagem de marcação para a World Wide Web e é uma tecnologia chave da Internet</p>
                    </div>
                </div>
                <div className="Tech">
                    <svg fill="#FFFFFF" viewBox="0 0 50 50" width="70px" height="70px"><path d="M 5.4648438 2 A 1.0001 1.0001 0 0 0 4.46875 3.0898438 L 7.9882812 42.515625 A 1.0001 1.0001 0 0 0 8.7089844 43.388672 L 24.71875 47.960938 A 1.0001 1.0001 0 0 0 25.267578 47.960938 L 41.292969 43.388672 A 1.0001 1.0001 0 0 0 42.013672 42.515625 L 45.53125 3.0898438 A 1.0001 1.0001 0 0 0 44.535156 2 L 5.4648438 2 z M 6.5585938 4 L 43.441406 4 L 40.083984 41.654297 L 24.994141 45.960938 L 9.9199219 41.654297 L 6.5585938 4 z M 19 10 A 1.0001 1.0001 0 0 0 18 11 L 18 29.628906 L 12.267578 28.041016 A 1.0001 1.0001 0 0 0 11 29.003906 L 11 33.949219 A 1.0001 1.0001 0 0 0 11.732422 34.912109 L 22.732422 37.962891 A 1.0001 1.0001 0 0 0 24 37 L 24 11 A 1.0001 1.0001 0 0 0 23 10 L 19 10 z M 27 10 A 1.0001 1.0001 0 0 0 26 11 L 26 28 A 1.0001 1.0001 0 0 0 27.169922 28.986328 L 32.917969 27.996094 L 32.798828 29.767578 L 26.734375 31.435547 A 1.0001 1.0001 0 0 0 26 32.398438 L 26 37 A 1.0001 1.0001 0 0 0 27.265625 37.964844 L 37.265625 35.214844 A 1.0001 1.0001 0 0 0 37.996094 34.335938 L 39.050781 22.085938 A 1.0001 1.0001 0 0 0 37.914062 21.009766 L 32 21.847656 L 32 16 L 38.654297 16 A 1.0001 1.0001 0 0 0 39.650391 15.085938 L 39.996094 11.085938 A 1.0001 1.0001 0 0 0 39 10 L 27 10 z M 20 12 L 22 12 L 22 35.685547 L 13 33.189453 L 13 30.318359 L 18.732422 31.908203 A 1.0001 1.0001 0 0 0 20 30.945312 L 20 12 z M 28 12 L 37.910156 12 L 37.736328 14 L 31 14 A 1.0001 1.0001 0 0 0 30 15 L 30 23 A 1.0001 1.0001 0 0 0 31.140625 23.990234 L 36.951172 23.166016 L 36.0625 33.470703 L 28 35.6875 L 28 33.162109 L 34.015625 31.507812 A 1.0001 1.0001 0 0 0 34.748047 30.611328 L 34.998047 26.861328 A 1.0001 1.0001 0 0 0 33.830078 25.808594 L 28 26.8125 L 28 12 z"/></svg>
                    <div>
                        <h1>JavaScript</h1>
                        <br/>
                        <p>Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web</p>
                    </div>
                </div>
                <div className="Tech">
                    <svg fill="#FFFFFF" viewBox="0 0 24 24" width="80px" height="80px"><path d="M20.657,13.355c-0.838,0.004-1.564,0.206-2.173,0.506c-0.223-0.444-0.448-0.835-0.486-1.126	c-0.044-0.339-0.095-0.542-0.042-0.946c0.053-0.404,0.287-0.976,0.284-1.019c-0.003-0.043-0.052-0.249-0.536-0.252	c-0.484-0.003-0.897,0.093-0.946,0.221c-0.049,0.128-0.142,0.415-0.2,0.715c-0.085,0.438-0.965,2.002-1.465,2.82	c-0.164-0.319-0.303-0.601-0.332-0.823c-0.044-0.339-0.095-0.542-0.042-0.946c0.053-0.404,0.287-0.976,0.284-1.019	c-0.003-0.043-0.052-0.249-0.536-0.252c-0.484-0.003-0.897,0.093-0.946,0.221c-0.049,0.128-0.101,0.426-0.2,0.715	c-0.099,0.289-1.27,2.897-1.576,3.573c-0.156,0.344-0.292,0.621-0.388,0.81c0,0-0.001-0.001-0.001-0.001s-0.006,0.013-0.016,0.034	c-0.082,0.161-0.131,0.25-0.131,0.25s0.001,0.001,0.001,0.003c-0.065,0.118-0.135,0.228-0.17,0.228	c-0.024,0-0.073-0.314,0.011-0.746c0.174-0.905,0.593-2.316,0.588-2.364c-0.002-0.025,0.078-0.271-0.273-0.399	c-0.341-0.125-0.463,0.083-0.494,0.084c-0.03,0.001-0.053,0.074-0.053,0.074s0.38-1.587-0.725-1.587	c-0.691,0-1.648,0.756-2.12,1.441c-0.298,0.162-0.935,0.51-1.61,0.881c-0.26,0.143-0.524,0.288-0.776,0.427	c-0.017-0.019-0.034-0.038-0.052-0.057c-1.34-1.43-3.818-2.441-3.713-4.363c0.038-0.699,0.281-2.539,4.76-4.771	c3.669-1.828,6.607-1.325,7.114-0.21c0.725,1.593-1.57,4.554-5.38,4.981c-1.452,0.163-2.216-0.4-2.406-0.609	c-0.2-0.221-0.23-0.231-0.305-0.189c-0.122,0.067-0.045,0.262,0,0.378c0.114,0.296,0.581,0.821,1.377,1.082	c0.7,0.23,2.405,0.356,4.466-0.441c2.309-0.893,4.112-3.377,3.582-5.454c-0.539-2.112-4.04-2.806-7.355-1.629	C5.706,4.293,3.571,5.393,2.036,6.829c-1.825,1.707-2.117,3.194-1.997,3.815c0.426,2.206,3.467,3.643,4.685,4.708	c-0.06,0.033-0.116,0.064-0.168,0.093c-0.611,0.302-2.929,1.515-3.509,2.797c-0.658,1.454,0.105,2.497,0.609,2.638	c1.564,0.435,3.169-0.348,4.031-1.634c0.862-1.286,0.757-2.961,0.361-3.725c-0.005-0.009-0.01-0.019-0.015-0.028	c0.158-0.093,0.318-0.188,0.478-0.282c0.311-0.182,0.616-0.353,0.88-0.497c-0.148,0.406-0.257,0.892-0.313,1.595	C7.013,17.133,7.352,18.2,7.794,18.62c0.195,0.185,0.429,0.189,0.578,0.189c0.515,0,0.75-0.428,1.009-0.935	c0.317-0.622,0.599-1.345,0.599-1.345s-0.353,1.955,0.61,1.955c0.351,0,0.704-0.455,0.861-0.687c0,0.003,0.001,0.004,0.001,0.004	s0.009-0.015,0.027-0.045c0.036-0.056,0.057-0.091,0.057-0.091s0.001-0.004,0.002-0.01c0.141-0.245,0.454-0.803,0.923-1.724	c0.606-1.19,1.187-2.68,1.187-2.68s0.054,0.364,0.231,0.967c0.104,0.354,0.326,0.746,0.5,1.122	c-0.141,0.195-0.227,0.307-0.227,0.307s0.001,0.002,0.002,0.006c-0.112,0.149-0.238,0.31-0.37,0.467	c-0.478,0.57-1.048,1.22-1.124,1.408c-0.09,0.221-0.069,0.384,0.105,0.515c0.127,0.096,0.353,0.11,0.589,0.095	c0.43-0.029,0.732-0.136,0.882-0.2c0.233-0.082,0.504-0.212,0.758-0.399c0.469-0.345,0.752-0.839,0.725-1.492	c-0.015-0.36-0.13-0.717-0.275-1.054c0.043-0.061,0.085-0.123,0.128-0.186c0.74-1.081,1.314-2.27,1.314-2.27	s0.054,0.364,0.231,0.967c0.09,0.305,0.266,0.638,0.426,0.964c-0.696,0.565-1.127,1.222-1.277,1.653	c-0.277,0.797-0.06,1.158,0.347,1.24c0.184,0.037,0.445-0.047,0.64-0.13c0.244-0.081,0.536-0.215,0.81-0.416	c0.469-0.345,0.92-0.828,0.893-1.482c-0.012-0.298-0.093-0.593-0.203-0.877c0.59-0.246,1.353-0.382,2.325-0.269	c2.086,0.244,2.495,1.546,2.417,2.091c-0.078,0.545-0.516,0.845-0.662,0.935c-0.146,0.09-0.191,0.122-0.179,0.189	c0.018,0.098,0.085,0.094,0.21,0.073c0.172-0.029,1.095-0.443,1.135-1.45C24.049,14.746,22.825,13.343,20.657,13.355z M4.578,18.775	c-0.691,0.754-1.656,1.039-2.07,0.799c-0.447-0.259-0.27-1.369,0.578-2.169c0.517-0.487,1.184-0.936,1.627-1.213	c0.101-0.061,0.249-0.15,0.429-0.257c0.03-0.017,0.047-0.026,0.047-0.026l-0.001-0.001c0.035-0.021,0.07-0.042,0.107-0.064	C5.603,16.982,5.303,17.984,4.578,18.775z M9.612,15.353c-0.241,0.587-0.744,2.088-1.051,2.007c-0.263-0.069-0.423-1.21-0.053-2.333	c0.187-0.565,0.585-1.241,0.82-1.503c0.377-0.422,0.792-0.56,0.893-0.389C10.35,13.354,9.763,14.986,9.612,15.353z M13.77,17.338	c-0.102,0.053-0.196,0.087-0.239,0.061c-0.032-0.019,0.042-0.089,0.042-0.089s0.52-0.56,0.725-0.814	c0.119-0.148,0.257-0.324,0.408-0.521c0.001,0.02,0.002,0.039,0.002,0.058C14.707,16.703,14.059,17.156,13.77,17.338z M16.974,16.607c-0.076-0.054-0.063-0.229,0.187-0.774c0.098-0.214,0.322-0.574,0.712-0.919c0.045,0.142,0.073,0.277,0.072,0.404	C17.94,16.162,17.338,16.477,16.974,16.607z"/></svg>
                    <div>
                        <h1>Sass</h1>
                        <br/>
                        <p>A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações e outras opções variadas </p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Tecnologias