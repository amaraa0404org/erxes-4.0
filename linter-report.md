[1m[36m🔍 Scanning codebase for hardcoded user-facing strings...[0m

[1m[33m📄 File: frontend/core-ui/src/bootstrap.tsx[0m
  [31m[Line 47][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to initialize frontend plugins[0m"
     [33m→[0m : new Error('[1m[31mFailed to initialize frontend plugins[0m')

[1m[33m📄 File: frontend/core-ui/src/i18n/languages.ts[0m
  [31m[Line 8][0m [[36mJS/TS String Literal[0m] Found: "[1mEnglish[0m"
     [33m→[0m display_name: '[1m[31mEnglish[0m',
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mMongolian[0m"
     [33m→[0m display_name: '[1m[31mMongolian[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/activity-logs/components/ActivityItem.tsx[0m
  [31m[Line 70][0m [[36mJSX Plain Text[0m] Found: "[1mGal Zorigo assigned the tag “erxes” to this contact.[0m"
     [33m→[0m return <>[1m[31mGal Zorigo assigned the tag “erxes” to this contact.[0m</>;

[1m[33m📄 File: frontend/core-ui/src/modules/activity-logs/components/ActivityLogs.tsx[0m
  [31m[Line 13][0m [[36mJSX Plain Text[0m] Found: "[1mLoading...[0m"
     [33m→[0m if (loading) return <div className="p-5">[1m[31mLoading...[0m</div>;
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1mError:[0m"
     [33m→[0m return <div className="p-5 text-destructive">[1m[31mError:[0m {error.message}</div>;
  [31m[Line 20][0m [[36mJSX Plain Text[0m] Found: "[1mNo activity[0m"
     [33m→[0m <div className="p-12 text-muted-foreground/50 text-center">

[1m[33m📄 File: frontend/core-ui/src/modules/activity-logs/components/ActivityTagged.tsx[0m
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1massigned the[0m"
     [33m→[0m <ActivityCreator /> [1m[31massigned the[0m {tagsText}{' '}
  [31m[Line 22][0m [[36mJSX Plain Text[0m] Found: "[1mto this[0m"
     [33m→[0m {contentTypeModule && <> [1m[31mto this[0m {getModuleName(contentTypeModule)}</>}.

[1m[33m📄 File: frontend/core-ui/src/modules/activity-logs/context/ActivityItemContext.tsx[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1museActivityItemContext must be used within an ActivityItemContext.Provider[0m"
     [33m→[0m '[1m[31museActivityItemContext must be used within an ActivityItemContext.Provider[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/app/effect-components/ThemeEffect.tsx[0m
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1m(prefers-color-scheme: dark)[0m"
     [33m→[0m return window.matchMedia('[1m[31m(prefers-color-scheme: dark)[0m').matches
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1m(prefers-color-scheme: dark)[0m"
     [33m→[0m const mediaQuery = window.matchMedia('[1m[31m(prefers-color-scheme: dark)[0m');
  [31m[Line 49][0m [[36mTemplate Literal String[0m] Found: "[1m* {
            -webkit-transition: none !important;
            -moz-transition: none !important;
            -o-transition: none !important;
            -ms-transition: none !important;
            transition: none !important;
          }[0m"
     [33m→[0m `* {

[1m[33m📄 File: frontend/core-ui/src/modules/app/hooks/usePluginsRouter.tsx[0m
  [31m[Line 40][0m [[36mTemplate Literal String[0m] Found: "[1mSettings[0m"
     [33m→[0m remoteModuleName={`${plugin.name}[1m[31mSettings[0m`}

[1m[33m📄 File: frontend/core-ui/src/modules/auth/components/AuthenticationLayout.tsx[0m
  [31m[Line 27][0m [[36mJSX Plain Text[0m] Found: "[1mBy signing in, you confirm that you accept our[0m"
     [33m→[0m <span className="text-sm text-center">
  [31m[Line 34][0m [[36mJSX Plain Text[0m] Found: "[1mTerms of use[0m"
     [33m→[0m >
  [31m[Line 41][0m [[36mJSX Plain Text[0m] Found: "[1mPrivacy policy[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/modules/auth/components/ConfirmInvitationForm.tsx[0m
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 81][0m [[36mJSX Plain Text[0m] Found: "[1mInvalid Invitation Link[0m"
     [33m→[0m <h1 className="font-semibold text-2xl text-foreground">
  [31m[Line 84][0m [[36mJSX Plain Text[0m] Found: "[1mThis invitation link is invalid or has expired. Please request a
                new invitation from your organization administrator.[0m"
     [33m→[0m <p className="text-muted-foreground text-base">
  [31m[Line 129][0m [[36mJSX Plain Text[0m] Found: "[1mYou've been invited![0m"
     [33m→[0m <h1 className="font-semibold text-2xl text-foreground">
  [31m[Line 132][0m [[36mJSX Plain Text[0m] Found: "[1mJoin[0m"
     [33m→[0m <p className="text-muted-foreground text-base">
  [31m[Line 136][0m [[36mJSX Plain Text[0m] Found: "[1mand start collaborating[0m"
     [33m→[0m </span>{' '}
  [31m[Line 152][0m [[36mJSX Plain Text[0m] Found: "[1mAccept invitation[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/modules/auth/components/DynamicBanner.tsx[0m
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mGrow your business better and faster[0m"
     [33m→[0m '[1m[31mGrow your business better and faster[0m'}
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mA single XOS (experience operating system) enables to create unique and life-changing experiences that work for all types of businesses.[0m"
     [33m→[0m '[1m[31mA single XOS (experience operating system) enables to create unique and life-changing experiences that work for all types of businesses.[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/auth/components/GoogleLogo.tsx[0m
  [31m[Line 10][0m [[36mJS/TS String Literal[0m] Found: "[1mM22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z[0m"
     [33m→[0m <path d="[1m[31mM22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z[0m" fill="#4285F4"/>
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mM12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z[0m"
     [33m→[0m <path d="[1m[31mM12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z[0m" fill="#34A853"/>
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mM5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z[0m"
     [33m→[0m <path d="[1m[31mM5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z[0m" fill="#FBBC05"/>
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mM12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z[0m"
     [33m→[0m <path d="[1m[31mM12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z[0m" fill="#EA4335"/>
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mM1 1h22v22H1z[0m"
     [33m→[0m <path d="[1m[31mM1 1h22v22H1z[0m" fill="none"/>

[1m[33m📄 File: frontend/core-ui/src/modules/auth/components/LoadingScreen.tsx[0m
  [31m[Line 67][0m [[36mJSX Plain Text[0m] Found: "[1mWelcome[0m"
     [33m→[0m <p className="text-primary text-sm">[1m[31mWelcome[0m</p>
  [31m[Line 77][0m [[36mJSX Plain Text[0m] Found: "[1mJust a moment...[0m"
     [33m→[0m >
  [31m[Line 80][0m [[36mJSX Plain Text[0m] Found: "[1mgood things come to those who wait![0m"
     [33m→[0m <TextEffect per="char">

[1m[33m📄 File: frontend/core-ui/src/modules/auth/components/Logo.tsx[0m
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mM33.5391 16.2509C37.0504 11.098 40.3559 5.6423 43.2828 0C39.9515 3.76153 36.0244 9.23484 32.4283 14.6003C30.5221 11.8476 28.2416 8.89684 25.629 6.13271C28.2178 10.9228 29.5272 13.5594 31.3185 16.2696C25.8711 24.5008 21.4362 32 21.4362 32C25.1709 27.6879 28.8932 22.9404 32.4283 17.8714C33.9435 19.9647 35.9034 22.3349 39.0351 25.8911C39.0289 25.886 37.0742 21.6278 33.5391 16.2509Z[0m"
     [33m→[0m d="[1m[31mM33.5391 16.2509C37.0504 11.098 40.3559 5.6423 43.2828 0C39.9515 3.76153 36.0244 9.23484 32.4283 14.6003C30.5221 11.8476 28.2416 8.89684 25.629 6.13271C28.2178 10.9228 29.5272 13.5594 31.3185 16.2696C25.8711 24.5008 21.4362 32 21.4362 32C25.1709 27.6879 28.8932 22.9404 32.4283 17.8714C33.9435 19.9647 35.9034 22.3349 39.0351 25.8911C39.0289 25.886 37.0742 21.6278 33.5391 16.2509Z[0m"
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mM55.8914 20.9682C56.1086 21.216 56.3682 21.4462 56.664 21.6639C56.966 21.8817 57.3032 22.0631 57.6838 22.2083C58.0634 22.3534 58.474 22.426 58.9021 22.426C59.2941 22.426 59.6685 22.3659 60.0305 22.2383C60.3925 22.1108 60.7121 21.9356 60.9893 21.7127C61.2675 21.4825 61.4909 21.1984 61.6533 20.8417C61.8167 20.4903 61.9005 20.0849 61.9005 19.6318C61.9005 18.991 61.7195 18.5006 61.3575 18.1564C60.9955 17.8174 60.5497 17.5333 60.0119 17.3218C59.4751 17.1041 58.8897 16.9164 58.2506 16.7464C57.6114 16.5836 57.026 16.3472 56.4892 16.0517C55.9514 15.7552 55.5056 15.356 55.1437 14.8594C54.7817 14.3638 54.6007 13.6805 54.6007 12.8158C54.6007 12.1326 54.7155 11.5095 54.9389 10.9402C55.1674 10.3721 55.4932 9.8827 55.9276 9.47109C56.362 9.05948 56.8988 8.73289 57.539 8.49753C58.1782 8.26114 58.9084 8.14087 59.7347 8.14087C60.4949 8.14087 61.1403 8.24351 61.6657 8.4488C62.1901 8.65409 62.6906 8.84175 63.1674 9.00557C63.005 9.3135 62.8478 9.70126 62.703 10.1543C62.5583 10.6085 62.4683 10.9589 62.4259 11.2067H62.0515C61.8891 10.7111 61.5685 10.2694 61.0927 9.87648C60.6159 9.48353 60.0305 9.28965 59.3303 9.28965C59.0232 9.28965 58.7087 9.34356 58.4016 9.44725C58.0934 9.54989 57.8162 9.70645 57.569 9.91277C57.3218 10.1181 57.116 10.3907 56.9474 10.7173C56.785 11.0491 56.7002 11.4431 56.7002 11.8962C56.7002 12.5556 56.8812 13.0698 57.2432 13.4327C57.6052 13.7956 58.052 14.0797 58.5888 14.285C59.1256 14.4913 59.7109 14.6728 60.3501 14.8293C60.9893 14.9869 61.5747 15.2046 62.1115 15.4825C62.6493 15.7614 63.095 16.1481 63.457 16.6437C63.819 17.1404 64 17.8236 64 18.6883C64 19.2865 63.8738 19.8796 63.6142 20.454C63.3546 21.0346 62.9864 21.5551 62.4983 22.0206C62.0153 22.4861 61.4299 22.849 60.7483 23.103C60.0667 23.3633 59.2941 23.4908 58.4316 23.4908C57.4842 23.4908 56.6878 23.3995 56.0486 23.2119C55.4084 23.0242 54.8716 22.8065 54.4373 22.5587C54.5583 22.2922 54.6906 21.9242 54.8241 21.4576C54.9565 20.9921 55.0226 20.6054 55.0226 20.2964H55.397C55.5181 20.4965 55.6742 20.7204 55.8914 20.9682Z[0m"
     [33m→[0m d="[1m[31mM55.8914 20.9682C56.1086 21.216 56.3682 21.4462 56.664 21.6639C56.966 21.8817 57.3032 22.0631 57.6838 22.2083C58.0634 22.3534 58.474 22.426 58.9021 22.426C59.2941 22.426 59.6685 22.3659 60.0305 22.2383C60.3925 22.1108 60.7121 21.9356 60.9893 21.7127C61.2675 21.4825 61.4909 21.1984 61.6533 20.8417C61.8167 20.4903 61.9005 20.0849 61.9005 19.6318C61.9005 18.991 61.7195 18.5006 61.3575 18.1564C60.9955 17.8174 60.5497 17.5333 60.0119 17.3218C59.4751 17.1041 58.8897 16.9164 58.2506 16.7464C57.6114 16.5836 57.026 16.3472 56.4892 16.0517C55.9514 15.7552 55.5056 15.356 55.1437 14.8594C54.7817 14.3638 54.6007 13.6805 54.6007 12.8158C54.6007 12.1326 54.7155 11.5095 54.9389 10.9402C55.1674 10.3721 55.4932 9.8827 55.9276 9.47109C56.362 9.05948 56.8988 8.73289 57.539 8.49753C58.1782 8.26114 58.9084 8.14087 59.7347 8.14087C60.4949 8.14087 61.1403 8.24351 61.6657 8.4488C62.1901 8.65409 62.6906 8.84175 63.1674 9.00557C63.005 9.3135 62.8478 9.70126 62.703 10.1543C62.5583 10.6085 62.4683 10.9589 62.4259 11.2067H62.0515C61.8891 10.7111 61.5685 10.2694 61.0927 9.87648C60.6159 9.48353 60.0305 9.28965 59.3303 9.28965C59.0232 9.28965 58.7087 9.34356 58.4016 9.44725C58.0934 9.54989 57.8162 9.70645 57.569 9.91277C57.3218 10.1181 57.116 10.3907 56.9474 10.7173C56.785 11.0491 56.7002 11.4431 56.7002 11.8962C56.7002 12.5556 56.8812 13.0698 57.2432 13.4327C57.6052 13.7956 58.052 14.0797 58.5888 14.285C59.1256 14.4913 59.7109 14.6728 60.3501 14.8293C60.9893 14.9869 61.5747 15.2046 62.1115 15.4825C62.6493 15.7614 63.095 16.1481 63.457 16.6437C63.819 17.1404 64 17.8236 64 18.6883C64 19.2865 63.8738 19.8796 63.6142 20.454C63.3546 21.0346 62.9864 21.5551 62.4983 22.0206C62.0153 22.4861 61.4299 22.849 60.7483 23.103C60.0667 23.3633 59.2941 23.4908 58.4316 23.4908C57.4842 23.4908 56.6878 23.3995 56.0486 23.2119C55.4084 23.0242 54.8716 22.8065 54.4373 22.5587C54.5583 22.2922 54.6906 21.9242 54.8241 21.4576C54.9565 20.9921 55.0226 20.6054 55.0226 20.2964H55.397C55.5181 20.4965 55.6742 20.7204 55.8914 20.9682Z[0m"
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mOrganization Logo[0m"
     [33m→[0m alt="[1m[31mOrganization Logo[0m"
  [31m[Line 63][0m [[36mJS/TS String Literal[0m] Found: "[1mOrganization Logo[0m"
     [33m→[0m alt="[1m[31mOrganization Logo[0m"
  [31m[Line 76][0m [[36mJS/TS String Literal[0m] Found: "[1mM12.6796 16.7509C16.1909 11.598 19.4964 6.1423 22.4233 0.5C19.092 4.26153 15.1649 9.73484 11.5688 15.1003C9.66263 12.3476 7.38208 9.39684 4.76955 6.63271C7.3583 11.4228 8.66767 14.0594 10.459 16.7696C5.01156 25.0008 0.57666 32.5 0.57666 32.5C4.31137 28.1879 8.03367 23.4404 11.5688 18.3714C13.084 20.4647 15.0439 22.8349 18.1756 26.3911C18.1694 26.386 16.2147 22.1278 12.6796 16.7509Z[0m"
     [33m→[0m d="[1m[31mM12.6796 16.7509C16.1909 11.598 19.4964 6.1423 22.4233 0.5C19.092 4.26153 15.1649 9.73484 11.5688 15.1003C9.66263 12.3476 7.38208 9.39684 4.76955 6.63271C7.3583 11.4228 8.66767 14.0594 10.459 16.7696C5.01156 25.0008 0.57666 32.5 0.57666 32.5C4.31137 28.1879 8.03367 23.4404 11.5688 18.3714C13.084 20.4647 15.0439 22.8349 18.1756 26.3911C18.1694 26.386 16.2147 22.1278 12.6796 16.7509Z[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/auth/components/Polygons.tsx[0m
  [31m[Line 109][0m [[36mJS/TS String Literal[0m] Found: "[1mtranslate(744 156.098) rotate(-180) scale(756 250.453)[0m"
     [33m→[0m gradientTransform="[1m[31mtranslate(744 156.098) rotate(-180) scale(756 250.453)[0m"
  [31m[Line 195][0m [[36mJS/TS String Literal[0m] Found: "[1mtranslate(378 160.5) rotate(-180) scale(378 257.516)[0m"
     [33m→[0m gradientTransform="[1m[31mtranslate(378 160.5) rotate(-180) scale(378 257.516)[0m"
  [31m[Line 297][0m [[36mJS/TS String Literal[0m] Found: "[1mtranslate(378 160.5) rotate(-180) scale(378 257.516)[0m"
     [33m→[0m gradientTransform="[1m[31mtranslate(378 160.5) rotate(-180) scale(378 257.516)[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/auth/login/components/CredentialLoginForm.tsx[0m
  [31m[Line 21][0m [[36mJSX Plain Text[0m] Found: "[1mEmail or Username[0m"
     [33m→[0m <Form.Label className="font-sans normal-case text-foreground text-sm font-medium leading-none">
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter your work email or username[0m"
     [33m→[0m placeholder="[1m[31mEnter your work email or username[0m"
  [31m[Line 40][0m [[36mJSX Plain Text[0m] Found: "[1mPassword[0m"
     [33m→[0m <Form.Label className="font-sans normal-case text-foreground text-sm font-medium leading-none">
  [31m[Line 46][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter your password[0m"
     [33m→[0m placeholder="[1m[31mEnter your password[0m"
  [31m[Line 54][0m [[36mJSX Plain Text[0m] Found: "[1mSign in[0m"
     [33m→[0m <Button type="submit" className="h-8">
  [31m[Line 71][0m [[36mJSX Plain Text[0m] Found: "[1mForgot password?[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/modules/auth/login/components/ForgotPassword.tsx[0m
  [31m[Line 9][0m [[36mJSX Plain Text[0m] Found: "[1mForgot password?[0m"
     [33m→[0m <div className="font-semibold text-lg leading-none">
  [31m[Line 12][0m [[36mJSX Plain Text[0m] Found: "[1mPlease enter your email address below to receive a password reset link[0m"
     [33m→[0m <div className="text-center text-sm text-accent-foreground">
  [31m[Line 23][0m [[36mJSX Plain Text[0m] Found: "[1mLogin[0m"
     [33m→[0m <Link to={AppPath.[1m[31mLogin[0m}>Login</Link>

[1m[33m📄 File: frontend/core-ui/src/modules/auth/login/components/ForgotPasswordForm.tsx[0m
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease enter a valid email address[0m"
     [33m→[0m email: z.string().email({ message: '[1m[31mPlease enter a valid email address[0m' }),
  [31m[Line 46][0m [[36mJSX Plain Text[0m] Found: "[1mEmail[0m"
     [33m→[0m <Form.Label className="font-sans normal-case text-foreground text-sm font-medium leading-none">
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter your work email[0m"
     [33m→[0m placeholder="[1m[31mEnter your work email[0m"
  [31m[Line 65][0m [[36mJSX Plain Text[0m] Found: "[1mSign in[0m"
     [33m→[0m <Button type="submit" className={`h-8`}>

[1m[33m📄 File: frontend/core-ui/src/modules/auth/login/components/GoogleOAuthButton.tsx[0m
  [31m[Line 15][0m [[36mJSX Plain Text[0m] Found: "[1mContinue with google[0m"
     [33m→[0m <span className="text-sm font-semibold">[1m[31mContinue with google[0m</span>

[1m[33m📄 File: frontend/core-ui/src/modules/auth/login/components/Login.tsx[0m
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1mWelcome[0m"
     [33m→[0m <div className="font-semibold text-xl leading-none">[1m[31mWelcome[0m</div>
  [31m[Line 17][0m [[36mJSX Plain Text[0m] Found: "[1mPlease sign in to your account to continue[0m"
     [33m→[0m <div className="text-center text-accent-foreground">
  [31m[Line 43][0m [[36mJSX Plain Text[0m] Found: "[1mMagic link[0m"
     [33m→[0m <span className="relative z-10">[1m[31mMagic link[0m</span>
  [31m[Line 60][0m [[36mJSX Plain Text[0m] Found: "[1mEmail & password[0m"
     [33m→[0m <span className="relative z-10">[1m[31mEmail & password[0m</span>

[1m[33m📄 File: frontend/core-ui/src/modules/auth/login/components/MagicLinkLoginForm.tsx[0m
  [31m[Line 11][0m [[36mJSX Plain Text[0m] Found: "[1mWe use magic link so you don't have to remember or type in yet another
          long password[0m"
     [33m→[0m <div className="text-center text-sm text-accent-foreground">
  [31m[Line 20][0m [[36mJSX Plain Text[0m] Found: "[1mEmail[0m"
     [33m→[0m <Form.Label className="font-sans normal-case text-foreground text-sm font-medium leading-none">
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter your email[0m"
     [33m→[0m placeholder="[1m[31mEnter your email[0m"
  [31m[Line 36][0m [[36mJSX Plain Text[0m] Found: "[1mContinue[0m"
     [33m→[0m <Button type="submit" className="h-8">
  [31m[Line 41][0m [[36mJSX Plain Text[0m] Found: "[1mContinue with Google[0m"
     [33m→[0m <IconBrandGoogleFilled />

[1m[33m📄 File: frontend/core-ui/src/modules/auth/login/components/ResetPassword.tsx[0m
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter password[0m"
     [33m→[0m placeholder="[1m[31mEnter password[0m"
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mConfirm password[0m"
     [33m→[0m placeholder="[1m[31mConfirm password[0m"
  [31m[Line 57][0m [[36mJSX Plain Text[0m] Found: "[1mChange password[0m"
     [33m→[0m <Button type="submit" onClick={form.handleSubmit(submitHandler)}>

[1m[33m📄 File: frontend/core-ui/src/modules/auth/login/definitions/magicLinkFormDefinitions.ts[0m
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease enter a valid email address[0m"
     [33m→[0m email: z.string().email({ message: '[1m[31mPlease enter a valid email address[0m' }),

[1m[33m📄 File: frontend/core-ui/src/modules/auth/login/hooks/useLogin.ts[0m
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail or password is incorrect[0m"
     [33m→[0m title: '[1m[31mEmail or password is incorrect[0m',
  [31m[Line 75][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 77][0m [[36mJS/TS String Literal[0m] Found: "[1mPassword reset instructions have been sent to your email.[0m"
     [33m→[0m '[1m[31mPassword reset instructions have been sent to your email.[0m',
  [31m[Line 84][0m [[36mJS/TS String Literal[0m] Found: "[1mUh oh! Something went wrong.[0m"
     [33m→[0m title: '[1m[31mUh oh! Something went wrong.[0m',
  [31m[Line 98][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 99][0m [[36mJS/TS String Literal[0m] Found: "[1mPassword has been reset.[0m"
     [33m→[0m description: '[1m[31mPassword has been reset.[0m',
  [31m[Line 105][0m [[36mJS/TS String Literal[0m] Found: "[1mUh oh! Something went wrong.[0m"
     [33m→[0m title: '[1m[31mUh oh! Something went wrong.[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/auth/login/hooks/useLoginForm.ts[0m
  [31m[Line 10][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail or username is required[0m"
     [33m→[0m email: z.string().max(320).min(1, '[1m[31mEmail or username is required[0m'),
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mPassword is required[0m"
     [33m→[0m password: z.string().min(1, '[1m[31mPassword is required[0m'),
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mPasswords don't match[0m"
     [33m→[0m message: "[1m[31mPasswords don't match[0m",

[1m[33m📄 File: frontend/core-ui/src/modules/auth/login/hooks/useLoginMagicLink.ts[0m
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mWe have sent an email containing the magic link to sign in.[0m"
     [33m→[0m title: '[1m[31mWe have sent an email containing the magic link to sign in.[0m',
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid login[0m"
     [33m→[0m const isInvalidLogin = message.includes('[1m[31mInvalid login[0m');
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid login[0m"
     [33m→[0m title: isInvalidLogin ? '[1m[31mInvalid login[0m' : 'Something went wrong',
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mSomething went wrong[0m"
     [33m→[0m title: isInvalidLogin ? 'Invalid login' : '[1m[31mSomething went wrong[0m',
  [31m[Line 43][0m [[36mJS/TS String Literal[0m] Found: "[1mThe email address or password you entered is incorrect.[0m"
     [33m→[0m ? '[1m[31mThe email address or password you entered is incorrect.[0m'
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid URL protocol[0m"
     [33m→[0m throw new Error('[1m[31mInvalid URL protocol[0m');
  [31m[Line 64][0m [[36mJS/TS String Literal[0m] Found: "[1mSomething went wrong[0m"
     [33m→[0m title: '[1m[31mSomething went wrong[0m',
  [31m[Line 65][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid redirect URL received[0m"
     [33m→[0m description: '[1m[31mInvalid redirect URL received[0m',
  [31m[Line 73][0m [[36mJS/TS String Literal[0m] Found: "[1mSomething went wrong[0m"
     [33m→[0m title: '[1m[31mSomething went wrong[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/auth/oauth/components/DeviceAuthorize.tsx[0m
  [31m[Line 59][0m [[36mJS/TS String Literal[0m] Found: "[1mApplication[0m"
     [33m→[0m {(details?.client.name || '[1m[31mApplication[0m') +
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1m wants access to your account[0m"
     [33m→[0m '[1m[31m wants access to your account[0m'}
  [31m[Line 62][0m [[36mJSX Plain Text[0m] Found: "[1mSigned in as[0m"
     [33m→[0m <Card.Description className="text-sm leading-6">
  [31m[Line 63][0m [[36mJSX Plain Text[0m] Found: "[1m. Review the permissions below
                and choose what you want to allow.[0m"
     [33m→[0m Signed in as {currentUser?.email}. Review the permissions below
  [31m[Line 98][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m >
  [31m[Line 111][0m [[36mJS/TS String Literal[0m] Found: "[1mAuthorizing...[0m"
     [33m→[0m ? '[1m[31mAuthorizing...[0m'
  [31m[Line 112][0m [[36mTemplate Literal String[0m] Found: "[1mAuthorize[0m"
     [33m→[0m : `[1m[31mAuthorize[0m ${details?.client.name || 'application'}`}

[1m[33m📄 File: frontend/core-ui/src/modules/auth/oauth/components/DeviceAuthorizeApproved.tsx[0m
  [31m[Line 18][0m [[36mJSX Plain Text[0m] Found: "[1mAccess granted[0m"
     [33m→[0m <h1 className="text-2xl font-semibold">[1m[31mAccess granted[0m</h1>
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mThis application[0m"
     [33m→[0m {clientName || '[1m[31mThis application[0m'} can now use the permissions you
  [31m[Line 20][0m [[36mJSX Plain Text[0m] Found: "[1mcan now use the permissions you
              approved. You can return to erxes-local.[0m"
     [33m→[0m {clientName || 'This application'} can now use the permissions you

[1m[33m📄 File: frontend/core-ui/src/modules/auth/oauth/components/DeviceAuthorizeDenied.tsx[0m
  [31m[Line 14][0m [[36mJSX Plain Text[0m] Found: "[1mRequest canceled[0m"
     [33m→[0m <h1 className="text-2xl font-semibold">[1m[31mRequest canceled[0m</h1>
  [31m[Line 15][0m [[36mJSX Plain Text[0m] Found: "[1mThe application was not granted access to your workspace.[0m"
     [33m→[0m <p className="text-sm text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/auth/oauth/components/DeviceAuthorizeScopes.tsx[0m
  [31m[Line 37][0m [[36mJSX Plain Text[0m] Found: "[1mDevice authorization code is missing.[0m"
     [33m→[0m <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
  [31m[Line 53][0m [[36mJSX Plain Text[0m] Found: "[1mThis application will be able to:[0m"
     [33m→[0m <IconCheck className="size-4 text-primary" />
  [31m[Line 56][0m [[36mJSX Plain Text[0m] Found: "[1mOnly permissions your account already has are shown here.[0m"
     [33m→[0m <p className="text-sm text-muted-foreground">
  [31m[Line 62][0m [[36mJSX Plain Text[0m] Found: "[1mYour account does not have any grantable permissions from this
          request.[0m"
     [33m→[0m <div className="rounded-lg border p-4 text-sm text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/auth/oauth/hooks/useDeviceAuthorize.ts[0m
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to load access request[0m"
     [33m→[0m result?.error_description || '[1m[31mFailed to load access request[0m',
  [31m[Line 61][0m [[36mJS/TS String Literal[0m] Found: "[1mCould not load access request[0m"
     [33m→[0m title: '[1m[31mCould not load access request[0m',
  [31m[Line 63][0m [[36mJS/TS String Literal[0m] Found: "[1mSomething went wrong.[0m"
     [33m→[0m error instanceof Error ? error.message : '[1m[31mSomething went wrong.[0m',
  [31m[Line 97][0m [[36mJS/TS String Literal[0m] Found: "[1mMissing code[0m"
     [33m→[0m title: '[1m[31mMissing code[0m',
  [31m[Line 98][0m [[36mJS/TS String Literal[0m] Found: "[1mDevice authorization code is missing.[0m"
     [33m→[0m description: '[1m[31mDevice authorization code is missing.[0m',
  [31m[Line 106][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect at least one permission[0m"
     [33m→[0m title: '[1m[31mSelect at least one permission[0m',
  [31m[Line 107][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose the access you want to grant before authorizing.[0m"
     [33m→[0m description: '[1m[31mChoose the access you want to grant before authorizing.[0m',
  [31m[Line 130][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to approve device[0m"
     [33m→[0m result?.error_description || '[1m[31mFailed to approve device[0m',
  [31m[Line 142][0m [[36mJS/TS String Literal[0m] Found: "[1mAccess granted[0m"
     [33m→[0m title: '[1m[31mAccess granted[0m',
  [31m[Line 143][0m [[36mJS/TS String Literal[0m] Found: "[1mYou can return to the application now.[0m"
     [33m→[0m description: '[1m[31mYou can return to the application now.[0m',
  [31m[Line 148][0m [[36mJS/TS String Literal[0m] Found: "[1mAuthorization failed[0m"
     [33m→[0m title: '[1m[31mAuthorization failed[0m',
  [31m[Line 150][0m [[36mJS/TS String Literal[0m] Found: "[1mSomething went wrong.[0m"
     [33m→[0m error instanceof Error ? error.message : '[1m[31mSomething went wrong.[0m',
  [31m[Line 175][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to cancel request[0m"
     [33m→[0m result?.error_description || '[1m[31mFailed to cancel request[0m',
  [31m[Line 182][0m [[36mJS/TS String Literal[0m] Found: "[1mCancel failed[0m"
     [33m→[0m title: '[1m[31mCancel failed[0m',
  [31m[Line 184][0m [[36mJS/TS String Literal[0m] Found: "[1mSomething went wrong.[0m"
     [33m→[0m error instanceof Error ? error.message : '[1m[31mSomething went wrong.[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/auth/oauth/utils/buildActionGroups.ts[0m
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mRead[0m"
     [33m→[0m read: '[1m[31mRead[0m',
  [31m[Line 5][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate and update[0m"
     [33m→[0m 'create-update': '[1m[31mCreate and update[0m',
  [31m[Line 6][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate[0m"
     [33m→[0m create: '[1m[31mCreate[0m',
  [31m[Line 7][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdate[0m"
     [33m→[0m update: '[1m[31mUpdate[0m',
  [31m[Line 8][0m [[36mJS/TS String Literal[0m] Found: "[1mRemove[0m"
     [33m→[0m remove: '[1m[31mRemove[0m',
  [31m[Line 9][0m [[36mJS/TS String Literal[0m] Found: "[1mMerge[0m"
     [33m→[0m merge: '[1m[31mMerge[0m',
  [31m[Line 10][0m [[36mJS/TS String Literal[0m] Found: "[1mManage[0m"
     [33m→[0m manage: '[1m[31mManage[0m',
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mAccess[0m"
     [33m→[0m return '[1m[31mAccess[0m';

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/aiAgent/AiAgentRuntimeInfo.tsx[0m
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mFocused field[0m"
     [33m→[0m focused: '[1m[31mFocused field[0m',
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mFull trigger payload[0m"
     [33m→[0m 'full-trigger': '[1m[31mFull trigger payload[0m',
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mPrevious action result[0m"
     [33m→[0m 'previous-action': '[1m[31mPrevious action result[0m',
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mCustom text[0m"
     [33m→[0m custom: '[1m[31mCustom text[0m',
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mRuntime Snapshot[0m"
     [33m→[0m title = '[1m[31mRuntime Snapshot[0m',
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mQuick signal for response size and timeout risk before this automation runs.[0m"
     [33m→[0m description = '[1m[31mQuick signal for response size and timeout risk before this automation runs.[0m',
  [31m[Line 33][0m [[36mJSX Plain Text[0m] Found: "[1mRuntime Snapshot[0m"
     [33m→[0m <Alert.Title>[1m[31mRuntime Snapshot[0m</Alert.Title>
  [31m[Line 35][0m [[36mJSX Plain Text[0m] Found: "[1mSelect an AI agent to preview its timeout, token budget, prompt
            size, and context load.[0m"
     [33m→[0m <p>
  [31m[Line 60][0m [[36mJSX Plain Text[0m] Found: "[1mmax tokens[0m"
     [33m→[0m <Badge variant="secondary">{summary.maxTokens} [1m[31mmax tokens[0m</Badge>
  [31m[Line 61][0m [[36mJSX Plain Text[0m] Found: "[1mms timeout[0m"
     [33m→[0m <Badge variant="secondary">{summary.timeoutMs} [1m[31mms timeout[0m</Badge>
  [31m[Line 69][0m [[36mJSX Plain Text[0m] Found: "[1mSystem prompt[0m"
     [33m→[0m <span>[1m[31mSystem prompt[0m</span>
  [31m[Line 75][0m [[36mJSX Plain Text[0m] Found: "[1mGoal prompt[0m"
     [33m→[0m <span>[1m[31mGoal prompt[0m</span>
  [31m[Line 86][0m [[36mJSX Plain Text[0m] Found: "[1mContext files[0m"
     [33m→[0m <span>[1m[31mContext files[0m</span>
  [31m[Line 97][0m [[36mJSX Plain Text[0m] Found: "[1mCustom input[0m"
     [33m→[0m <span>[1m[31mCustom input[0m</span>
  [31m[Line 104][0m [[36mJSX Plain Text[0m] Found: "[1mInput mode[0m"
     [33m→[0m <span>[1m[31mInput mode[0m</span>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/AutomationBuilderCanvasDragOverlay.tsx[0m
  [31m[Line 90][0m [[36mJS/TS String Literal[0m] Found: "[1mDrop to add node[0m"
     [33m→[0m {isCanvasOver ? '[1m[31mDrop to add node[0m' : `Dragging ${label}`}
  [31m[Line 90][0m [[36mTemplate Literal String[0m] Found: "[1mDragging[0m"
     [33m→[0m {isCanvasOver ? 'Drop to add node' : `[1m[31mDragging[0m ${label}`}

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/AutomationBuilderControls.tsx[0m
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1msize-7 rounded text-accent-foreground hover:bg-accent hover:text-foreground [&>svg]:size-4[0m"
     [33m→[0m '[1m[31msize-7 rounded text-accent-foreground hover:bg-accent hover:text-foreground [&>svg]:size-4[0m';
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mbg-primary/15 text-primary hover:bg-primary/20 hover:text-primary[0m"
     [33m→[0m '[1m[31mbg-primary/15 text-primary hover:bg-primary/20 hover:text-primary[0m';
  [31m[Line 136][0m [[36mTemplate Literal String[0m] Found: "[1mpx) scale([0m"
     [33m→[0m transform: `translate(${x}px, ${y}[1m[31mpx) scale([0m${zoom})`,
  [31m[Line 185][0m [[36mJS/TS String Literal[0m] Found: "[1mFit canvas[0m"
     [33m→[0m label="[1m[31mFit canvas[0m"
  [31m[Line 194][0m [[36mJS/TS String Literal[0m] Found: "[1mZoom in[0m"
     [33m→[0m label="[1m[31mZoom in[0m"
  [31m[Line 203][0m [[36mJS/TS String Literal[0m] Found: "[1mZoom out[0m"
     [33m→[0m label="[1m[31mZoom out[0m"
  [31m[Line 217][0m [[36mJS/TS String Literal[0m] Found: "[1mCanvas options[0m"
     [33m→[0m title="[1m[31mCanvas options[0m"
  [31m[Line 227][0m [[36mJS/TS String Literal[0m] Found: "[1mHide minimap[0m"
     [33m→[0m {showMiniMap ? '[1m[31mHide minimap[0m' : 'Show minimap'}
  [31m[Line 227][0m [[36mJS/TS String Literal[0m] Found: "[1mShow minimap[0m"
     [33m→[0m {showMiniMap ? 'Hide minimap' : '[1m[31mShow minimap[0m'}
  [31m[Line 231][0m [[36mJS/TS String Literal[0m] Found: "[1mHide grid[0m"
     [33m→[0m {showGrid ? '[1m[31mHide grid[0m' : 'Show grid'}
  [31m[Line 231][0m [[36mJS/TS String Literal[0m] Found: "[1mShow grid[0m"
     [33m→[0m {showGrid ? 'Hide grid' : '[1m[31mShow grid[0m'}
  [31m[Line 236][0m [[36mJSX Plain Text[0m] Found: "[1mDownload PNG[0m"
     [33m→[0m <IconPhoto className="size-4" />
  [31m[Line 242][0m [[36mJSX Plain Text[0m] Found: "[1mWith background[0m"
     [33m→[0m >
  [31m[Line 247][0m [[36mJSX Plain Text[0m] Found: "[1mTransparent[0m"
     [33m→[0m >
  [31m[Line 253][0m [[36mJSX Plain Text[0m] Found: "[1mDownload SVG[0m"
     [33m→[0m <IconVectorBezier2 className="size-4" />
  [31m[Line 257][0m [[36mJSX Plain Text[0m] Found: "[1mExport JSON[0m"
     [33m→[0m <IconBraces className="size-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/edges/PrimaryEdge.tsx[0m
  [31m[Line 52][0m [[36mTemplate Literal String[0m] Found: "[1mtranslate(-50%, -50%) translate([0m"
     [33m→[0m transform: `[1m[31mtranslate(-50%, -50%) translate([0m${labelX}px,${labelY}px)`,

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/history/AutomationHistoryRecordTableColumns.tsx[0m
  [31m[Line 65][0m [[36mJS/TS String Literal[0m] Found: "[1mNo description[0m"
     [33m→[0m preview={(cell.getValue() as string) || '[1m[31mNo description[0m'}
  [31m[Line 66][0m [[36mJS/TS String Literal[0m] Found: "[1mNo description[0m"
     [33m→[0m content={(cell.getValue() as string) || '[1m[31mNo description[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/history/components/AutomationHistoryByTable.tsx[0m
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mAction failed[0m"
     [33m→[0m return text || '[1m[31mAction failed[0m';
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mN/A[0m"
     [33m→[0m return '[1m[31mN/A[0m';
  [31m[Line 52][0m [[36mTemplate Literal String[0m] Found: "[1mDelaying for:[0m"
     [33m→[0m return `[1m[31mDelaying for:[0m ${value} ${type}s`;
  [31m[Line 56][0m [[36mJS/TS String Literal[0m] Found: "[1mResult has not been recorded yet[0m"
     [33m→[0m return '[1m[31mResult has not been recorded yet[0m';
  [31m[Line 69][0m [[36mTemplate Literal String[0m] Found: "[1mUpdate for[0m"
     [33m→[0m return `[1m[31mUpdate for[0m ${resultList.length} ${result.module}: ${
  [31m[Line 75][0m [[36mTemplate Literal String[0m] Found: "[1mCondition:[0m"
     [33m→[0m return `[1m[31mCondition:[0m ${result.condition}`;
  [31m[Line 81][0m [[36mJS/TS String Literal[0m] Found: "[1mSent successfully[0m"
     [33m→[0m : '[1m[31mSent successfully[0m';
  [31m[Line 103][0m [[36mJS/TS String Literal[0m] Found: "[1mGenerated text[0m"
     [33m→[0m return result.text || '[1m[31mGenerated text[0m';
  [31m[Line 108][0m [[36mTemplate Literal String[0m] Found: "[1mMatched topic:[0m"
     [33m→[0m ? `[1m[31mMatched topic:[0m ${result.topicId}`
  [31m[Line 109][0m [[36mJS/TS String Literal[0m] Found: "[1mNo matching topic[0m"
     [33m→[0m : '[1m[31mNo matching topic[0m';
  [31m[Line 129][0m [[36mTemplate Literal String[0m] Found: "[1mDelaying for:[0m"
     [33m→[0m return `[1m[31mDelaying for:[0m ${value} ${type}s`;
  [31m[Line 133][0m [[36mJS/TS String Literal[0m] Found: "[1mResult has not been recorded yet[0m"
     [33m→[0m return '[1m[31mResult has not been recorded yet[0m';
  [31m[Line 150][0m [[36mTemplate Literal String[0m] Found: "[1mUpdate for[0m"
     [33m→[0m return `[1m[31mUpdate for[0m ${resultList.length} ${result.module}: ${
  [31m[Line 156][0m [[36mTemplate Literal String[0m] Found: "[1mCondition:[0m"
     [33m→[0m return `[1m[31mCondition:[0m ${result.condition}`;
  [31m[Line 220][0m [[36mJSX Plain Text[0m] Found: "[1mReload[0m"
     [33m→[0m <Button variant="ghost" disabled={loading} onClick={() => refetch()}>
  [31m[Line 226][0m [[36mJSX Plain Text[0m] Found: "[1mTime[0m"
     [33m→[0m <Table.Head className="w-36!">[1m[31mTime[0m</Table.Head>
  [31m[Line 227][0m [[36mJSX Plain Text[0m] Found: "[1mAction Type[0m"
     [33m→[0m <Table.Head className="w-64!">[1m[31mAction Type[0m</Table.Head>
  [31m[Line 228][0m [[36mJSX Plain Text[0m] Found: "[1mDuration[0m"
     [33m→[0m <Table.Head className="w-28!">[1m[31mDuration[0m</Table.Head>
  [31m[Line 229][0m [[36mJSX Plain Text[0m] Found: "[1mResults[0m"
     [33m→[0m <Table.Head>[1m[31mResults[0m</Table.Head>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/history/components/AutomationHistoryDetail.tsx[0m
  [31m[Line 45][0m [[36mJSX Plain Text[0m] Found: "[1mExecution history[0m"
     [33m→[0m <Sheet.Title>[1m[31mExecution history[0m</Sheet.Title>
  [31m[Line 46][0m [[36mJSX Plain Text[0m] Found: "[1mView the execution log of your automation in table or flow format.[0m"
     [33m→[0m <Sheet.Description>
  [31m[Line 56][0m [[36mJSX Plain Text[0m] Found: "[1mView as table[0m"
     [33m→[0m <IconAutomaticGearbox />
  [31m[Line 60][0m [[36mJSX Plain Text[0m] Found: "[1mView as flow[0m"
     [33m→[0m <IconTournament className="scale-x-[-1]" />

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/history/components/AutomationHistoryResultName.tsx[0m
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mEmpty[0m"
     [33m→[0m {name || '[1m[31mEmpty[0m'}
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mEmpty[0m"
     [33m→[0m return '[1m[31mEmpty[0m';

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/history/components/AutomationHistoryTriggerCell.tsx[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mEmpty[0m"
     [33m→[0m {triggerLabel || triggerType || '[1m[31mEmpty[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/history/components/filters/AutomationHistoriesFilterBar.tsx[0m
  [31m[Line 26][0m [[36mJSX Plain Text[0m] Found: "[1mStatus[0m"
     [33m→[0m <IconProgressCheck />
  [31m[Line 70][0m [[36mJSX Plain Text[0m] Found: "[1mFilter by created at[0m"
     [33m→[0m <IconCalendarPlus />

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/history/components/filters/AutomationHistoriesFilterMenu.tsx[0m
  [31m[Line 9][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m placeholder="[1m[31mFilter[0m"
  [31m[Line 15][0m [[36mJSX Plain Text[0m] Found: "[1mStatus[0m"
     [33m→[0m <IconProgressCheck />
  [31m[Line 19][0m [[36mJSX Plain Text[0m] Found: "[1mFilter by created[0m"
     [33m→[0m <IconCalendar />

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/history/context/AutomationHistoryDetailContext.tsx[0m
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1museAutomationHistoryDetail must be used within a AutomationHistoryDetailProvider[0m"
     [33m→[0m '[1m[31museAutomationHistoryDetail must be used within a AutomationHistoryDetailProvider[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/history/hooks/useAutomationHistoryResult.ts[0m
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1myyyy-MM-dd HH:mm:ss[0m"
     [33m→[0m return isValid(date) ? format(date, '[1m[31myyyy-MM-dd HH:mm:ss[0m') : 'N/A';
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mN/A[0m"
     [33m→[0m return isValid(date) ? format(date, 'yyyy-MM-dd HH:mm:ss') : '[1m[31mN/A[0m';
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mEmpty[0m"
     [33m→[0m '[1m[31mEmpty[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/history/hooks/useHistoryBeforeTitleContent.tsx[0m
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mtext-success bg-success/10 border-success[0m"
     [33m→[0m className: '[1m[31mtext-success bg-success/10 border-success[0m',
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mtext-error bg-error/10 border-error[0m"
     [33m→[0m error: { icon: IconX, className: '[1m[31mtext-error bg-error/10 border-error[0m' },
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mtext-accent bg-accent/10 border-accent[0m"
     [33m→[0m className: '[1m[31mtext-accent bg-accent/10 border-accent[0m',
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mYYYY-MM-DD HH:mm:ss[0m"
     [33m→[0m <Label>{dayjs(createdAt).format('[1m[31mYYYY-MM-DD HH:mm:ss[0m')}</Label>
  [31m[Line 63][0m [[36mJSX Plain Text[0m] Found: "[1mPassed[0m"
     [33m→[0m content: <Badge>[1m[31mPassed[0m</Badge>,

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/hooks/useAutomationHeader.ts[0m
  [31m[Line 64][0m [[36mJS/TS String Literal[0m] Found: "[1mSomething went wrong[0m"
     [33m→[0m title: '[1m[31mSomething went wrong[0m',
  [31m[Line 74][0m [[36mJS/TS String Literal[0m] Found: "[1mSave successful[0m"
     [33m→[0m title: '[1m[31mSave successful[0m',
  [31m[Line 118][0m [[36mJS/TS String Literal[0m] Found: "[1mSomething went wrong[0m"
     [33m→[0m title: '[1m[31mSomething went wrong[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/aiAgent/components/AiAgentConfigForm.tsx[0m
  [31m[Line 44][0m [[36mJSX Plain Text[0m] Found: "[1mConfiguration[0m"
     [33m→[0m <IconSettings className="size-3.5 mr-2" /> [1m[31mConfiguration[0m
  [31m[Line 47][0m [[36mJSX Plain Text[0m] Found: "[1mMemory[0m"
     [33m→[0m <IconBrain className="size-3.5 mr-2" /> [1m[31mMemory[0m
  [31m[Line 50][0m [[36mJSX Plain Text[0m] Found: "[1mRuntime Snapshot[0m"
     [33m→[0m <IconChartPie className="size-3.5 mr-2" />
  [31m[Line 124][0m [[36mJSX Plain Text[0m] Found: "[1mЗаавал биш. Сонгосон agent-ийн system prompt болон
                        context files-оос гадна нэмэлт заавар хэрэгтэй үед л
                        бөглөнө.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 138][0m [[36mJSX Plain Text[0m] Found: "[1mУдаашрах үеийн хариу[0m"
     [33m→[0m <Form.Label>[1m[31mУдаашрах үеийн хариу[0m</Form.Label>
  [31m[Line 140][0m [[36mJS/TS String Literal[0m] Found: "[1mУучлаарай, хариу бага зэрэг удааширлаа. Таны бичсэнийг авлаа.[0m"
     [33m→[0m placeholder="[1m[31mУучлаарай, хариу бага зэрэг удааширлаа. Таны бичсэнийг авлаа.[0m"
  [31m[Line 143][0m [[36mJSX Plain Text[0m] Found: "[1mAI provider хугацаандаа хариу өгөхгүй үед энэ текстийг
                        явуулна. Хоосон орхивол fallback хариу явуулахгүй.[0m"
     [33m→[0m <Form.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/aiAgent/components/AiAgentInputMappingFields.tsx[0m
  [31m[Line 19][0m [[36mJSX Plain Text[0m] Found: "[1mInput Source[0m"
     [33m→[0m <Form.Label>[1m[31mInput Source[0m</Form.Label>
  [31m[Line 26][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect input source[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect input source[0m" />
  [31m[Line 29][0m [[36mJSX Plain Text[0m] Found: "[1mTrigger Data[0m"
     [33m→[0m <Select.Item value="trigger">[1m[31mTrigger Data[0m</Select.Item>
  [31m[Line 30][0m [[36mJSX Plain Text[0m] Found: "[1mPrevious Action Result[0m"
     [33m→[0m <Select.Item value="previousAction">
  [31m[Line 33][0m [[36mJSX Plain Text[0m] Found: "[1mCustom Text[0m"
     [33m→[0m <Select.Item value="custom">[1m[31mCustom Text[0m</Select.Item>
  [31m[Line 36][0m [[36mJSX Plain Text[0m] Found: "[1mChoose where the AI action should read its input from.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 50][0m [[36mJSX Plain Text[0m] Found: "[1mTrigger Path[0m"
     [33m→[0m <Form.Label>[1m[31mTrigger Path[0m</Form.Label>
  [31m[Line 54][0m [[36mJSX Plain Text[0m] Found: "[1mLeave empty to pass the full trigger payload. Use dot notation
                like `message` or `data.text`.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 70][0m [[36mJSX Plain Text[0m] Found: "[1mPrevious Action ID[0m"
     [33m→[0m <Form.Label>[1m[31mPrevious Action ID[0m</Form.Label>
  [31m[Line 74][0m [[36mJSX Plain Text[0m] Found: "[1mEnter the action ID whose result should be passed into this AI
                step.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 90][0m [[36mJSX Plain Text[0m] Found: "[1mCustom Input[0m"
     [33m→[0m <Form.Label>[1m[31mCustom Input[0m</Form.Label>
  [31m[Line 93][0m [[36mJS/TS String Literal[0m] Found: "[1mType the exact input you want to send to the AI action[0m"
     [33m→[0m placeholder="[1m[31mType the exact input you want to send to the AI action[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/aiAgent/components/AiAgentMemoryFields.tsx[0m
  [31m[Line 21][0m [[36mJSX Plain Text[0m] Found: "[1mMemory[0m"
     [33m→[0m <h4 className="text-sm font-medium">[1m[31mMemory[0m</h4>
  [31m[Line 22][0m [[36mJSX Plain Text[0m] Found: "[1mReuse saved AI results in later steps and optionally persist this AI
          result for future actions.[0m"
     [33m→[0m <p className="text-xs text-muted-foreground">
  [31m[Line 34][0m [[36mJSX Plain Text[0m] Found: "[1mRead From Memory[0m"
     [33m→[0m <Form.Label>[1m[31mRead From Memory[0m</Form.Label>
  [31m[Line 35][0m [[36mJSX Plain Text[0m] Found: "[1mLoad previously saved automation memory into this AI step.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 53][0m [[36mJSX Plain Text[0m] Found: "[1mRead Namespace[0m"
     [33m→[0m <Form.Label>[1m[31mRead Namespace[0m</Form.Label>
  [31m[Line 57][0m [[36mJSX Plain Text[0m] Found: "[1mUse the same namespace across related AI actions to share
                  memory.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 74][0m [[36mJSX Plain Text[0m] Found: "[1mSave Result To Memory[0m"
     [33m→[0m <Form.Label>[1m[31mSave Result To Memory[0m</Form.Label>
  [31m[Line 75][0m [[36mJSX Plain Text[0m] Found: "[1mPersist this AI result so later actions can reuse it.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 93][0m [[36mJSX Plain Text[0m] Found: "[1mWrite Namespace[0m"
     [33m→[0m <Form.Label>[1m[31mWrite Namespace[0m</Form.Label>
  [31m[Line 107][0m [[36mJSX Plain Text[0m] Found: "[1mMemory Key[0m"
     [33m→[0m <Form.Label>[1m[31mMemory Key[0m</Form.Label>
  [31m[Line 111][0m [[36mJSX Plain Text[0m] Found: "[1mExamples: `lastTopic`, `attributes`, `lastReplyText`[0m"
     [33m→[0m <Form.Description>
  [31m[Line 124][0m [[36mJSX Plain Text[0m] Found: "[1mResult Path[0m"
     [33m→[0m <Form.Label>[1m[31mResult Path[0m</Form.Label>
  [31m[Line 128][0m [[36mJSX Plain Text[0m] Found: "[1mLeave empty to save the whole result. Examples: `topicId`,
                  `attributes`, `text`[0m"
     [33m→[0m <Form.Description>
  [31m[Line 143][0m [[36mJSX Plain Text[0m] Found: "[1mWrite Mode[0m"
     [33m→[0m <Form.Label>[1m[31mWrite Mode[0m</Form.Label>
  [31m[Line 146][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect mode[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect mode[0m" />
  [31m[Line 149][0m [[36mJSX Plain Text[0m] Found: "[1mReplace[0m"
     [33m→[0m <Select.Item value="replace">[1m[31mReplace[0m</Select.Item>
  [31m[Line 150][0m [[36mJSX Plain Text[0m] Found: "[1mMerge[0m"
     [33m→[0m <Select.Item value="merge">[1m[31mMerge[0m</Select.Item>
  [31m[Line 153][0m [[36mJSX Plain Text[0m] Found: "[1mUse `merge` when saving structured attributes.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 166][0m [[36mJSX Plain Text[0m] Found: "[1mTTL (minutes)[0m"
     [33m→[0m <Form.Label>[1m[31mTTL (minutes)[0m</Form.Label>
  [31m[Line 178][0m [[36mJSX Plain Text[0m] Found: "[1mSaved memory expires automatically after this duration.[0m"
     [33m→[0m <Form.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/aiAgent/components/AiAgentNodeContent.tsx[0m
  [31m[Line 51][0m [[36mJSX Plain Text[0m] Found: "[1mreads memory[0m"
     [33m→[0m <div className="rounded-xs bg-info/10 px-2 py-1 text-xs font-semibold text-info">
  [31m[Line 96][0m [[36mJSX Plain Text[0m] Found: "[1mClassification[0m"
     [33m→[0m return <div>[1m[31mClassification[0m</div>;
  [31m[Line 128][0m [[36mJS/TS String Literal[0m] Found: "[1mGenerate text[0m"
     [33m→[0m {prompt || '[1m[31mGenerate text[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/aiAgent/components/AiAgentObjectBuilder.tsx[0m
  [31m[Line 21][0m [[36mJSX Plain Text[0m] Found: "[1mField Key[0m"
     [33m→[0m <Label className="col-span-5">[1m[31mField Key[0m</Label>
  [31m[Line 22][0m [[36mJSX Plain Text[0m] Found: "[1mData Type[0m"
     [33m→[0m <Label className="col-span-2">[1m[31mData Type[0m</Label>
  [31m[Line 23][0m [[36mJSX Plain Text[0m] Found: "[1mValidation[0m"
     [33m→[0m <Label className="col-span-4">[1m[31mValidation[0m</Label>
  [31m[Line 53][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Classification Field[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/aiAgent/components/AiAgentObjectFieldBuilder.tsx[0m
  [31m[Line 42][0m [[36mJSX Plain Text[0m] Found: "[1mString[0m"
     [33m→[0m <Select.Item value="string">[1m[31mString[0m</Select.Item>
  [31m[Line 43][0m [[36mJSX Plain Text[0m] Found: "[1mNumber[0m"
     [33m→[0m <Select.Item value="number">[1m[31mNumber[0m</Select.Item>
  [31m[Line 44][0m [[36mJSX Plain Text[0m] Found: "[1mBoolean[0m"
     [33m→[0m <Select.Item value="boolean">[1m[31mBoolean[0m</Select.Item>
  [31m[Line 45][0m [[36mJSX Plain Text[0m] Found: "[1mObject[0m"
     [33m→[0m <Select.Item value="object">[1m[31mObject[0m</Select.Item>
  [31m[Line 46][0m [[36mJSX Plain Text[0m] Found: "[1mArray[0m"
     [33m→[0m <Select.Item value="array">[1m[31mArray[0m</Select.Item>
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mOptional validation or enum hints[0m"
     [33m→[0m placeholder="[1m[31mOptional validation or enum hints[0m"
  [31m[Line 85][0m [[36mJS/TS String Literal[0m] Found: "[1mDescribe what this field should extract from the input[0m"
     [33m→[0m placeholder="[1m[31mDescribe what this field should extract from the input[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/aiAgent/components/AiAgentTopicBuilder.tsx[0m
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter topic label[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mEnter topic label[0m" />
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mExplain when this topic should be selected[0m"
     [33m→[0m placeholder="[1m[31mExplain when this topic should be selected[0m"
  [31m[Line 57][0m [[36mTemplate Literal String[0m] Found: "[1mTopic[0m"
     [33m→[0m topicName: `[1m[31mTopic[0m ${fields.length + 1}`,
  [31m[Line 61][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Topic[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/aiAgent/constants/aiAgentConfigForm.ts[0m
  [31m[Line 2][0m [[36mJS/TS String Literal[0m] Found: "[1mGenerate Text[0m"
     [33m→[0m { type: 'generateText', label: '[1m[31mGenerate Text[0m' },
  [31m[Line 3][0m [[36mJS/TS String Literal[0m] Found: "[1mSplit Topic[0m"
     [33m→[0m { type: 'splitTopic', label: '[1m[31mSplit Topic[0m' },
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mClassification[0m"
     [33m→[0m { type: 'classification', label: '[1m[31mClassification[0m' },

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/aiAgent/hooks/useAiAgentConfigForm.ts[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mAi agent node Configuration[0m"
     [33m→[0m formName: '[1m[31mAi agent node Configuration[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/delay/components/DelayConfigForm.tsx[0m
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1m5 min[0m"
     [33m→[0m { label: '[1m[31m5 min[0m', value: '5', type: 'minute' },
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1m15 min[0m"
     [33m→[0m { label: '[1m[31m15 min[0m', value: '15', type: 'minute' },
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1m1 hour[0m"
     [33m→[0m { label: '[1m[31m1 hour[0m', value: '1', type: 'hour' },
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1m6 hours[0m"
     [33m→[0m { label: '[1m[31m6 hours[0m', value: '6', type: 'hour' },
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1m1 day[0m"
     [33m→[0m { label: '[1m[31m1 day[0m', value: '1', type: 'day' },
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1m1 week[0m"
     [33m→[0m { label: '[1m[31m1 week[0m', value: '7', type: 'day' },
  [31m[Line 105][0m [[36mJS/TS String Literal[0m] Found: "[1mNext action will run in[0m"
     [33m→[0m defaultValue: '[1m[31mNext action will run in[0m',
  [31m[Line 117][0m [[36mJS/TS String Literal[0m] Found: "[1mQuick presets[0m"
     [33m→[0m {t('quick-presets', { defaultValue: '[1m[31mQuick presets[0m' })}
  [31m[Line 146][0m [[36mJS/TS String Literal[0m] Found: "[1mCustom duration[0m"
     [33m→[0m {t('custom-duration', { defaultValue: '[1m[31mCustom duration[0m' })}
  [31m[Line 202][0m [[36mJS/TS String Literal[0m] Found: "[1mThe delay starts when the trigger fires. Downstream actions wait until this window completes.[0m"
     [33m→[0m '[1m[31mThe delay starts when the trigger fires. Downstream actions wait until this window completes.[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/findObject/components/FindObjectConfigForm.tsx[0m
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mFind object Configuration[0m"
     [33m→[0m formName: '[1m[31mFind object Configuration[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/manageProperties/components/ManagePropertiesConfigForm.tsx[0m
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mManage properties Configuration[0m"
     [33m→[0m formName: '[1m[31mManage properties Configuration[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/manageProperties/components/ManagePropertiesNodeContent.tsx[0m
  [31m[Line 13][0m [[36mJSX Plain Text[0m] Found: "[1mContent Type:[0m"
     [33m→[0m <span className="font-mono">[1m[31mContent Type:[0m </span>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/manageProperties/components/ManagePropertyRule.tsx[0m
  [31m[Line 28][0m [[36mJSX Plain Text[0m] Found: "[1mField[0m"
     [33m→[0m <Form.Label>[1m[31mField[0m </Form.Label>
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect an field[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect an field[0m" />
  [31m[Line 65][0m [[36mJSX Plain Text[0m] Found: "[1mOperator[0m"
     [33m→[0m <Form.Label>[1m[31mOperator[0m</Form.Label>
  [31m[Line 69][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect an operator[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect an operator[0m" />
  [31m[Line 99][0m [[36mJSX Plain Text[0m] Found: "[1mValue[0m"
     [33m→[0m <Form.Label>[1m[31mValue[0m </Form.Label>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/manageProperties/hooks/useManagePropertyRule.ts[0m
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mString[0m"
     [33m→[0m ? (selectedField?.validation as string) || '[1m[31mString[0m'
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mDefault[0m"
     [33m→[0m : (selectedField?.type as string) || '[1m[31mDefault[0m';
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mDefault[0m"
     [33m→[0m (operatorType as unknown as keyof typeof PROPERTY_OPERATOR) || '[1m[31mDefault[0m'
  [31m[Line 154][0m [[36mJS/TS String Literal[0m] Found: "[1mTrue[0m"
     [33m→[0m label: '[1m[31mTrue[0m',
  [31m[Line 158][0m [[36mJS/TS String Literal[0m] Found: "[1mFalse[0m"
     [33m→[0m label: '[1m[31mFalse[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/manageProperties/states/managePropertiesForm.ts[0m
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mField is required[0m"
     [33m→[0m field: z.string().min(1, '[1m[31mField is required[0m'),
  [31m[Line 5][0m [[36mJS/TS String Literal[0m] Found: "[1mOperator is required[0m"
     [33m→[0m operator: z.string().min(1, '[1m[31mOperator is required[0m'),

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/manageProperties/types/ManagePropertyTypes.ts[0m
  [31m[Line 3][0m [[36mJS/TS String Literal[0m] Found: "[1mString[0m"
     [33m→[0m export type OperatorType = '[1m[31mString[0m' | 'Date' | 'Number' | 'Default';
  [31m[Line 3][0m [[36mJS/TS String Literal[0m] Found: "[1mDate[0m"
     [33m→[0m export type OperatorType = 'String' | '[1m[31mDate[0m' | 'Number' | 'Default';
  [31m[Line 3][0m [[36mJS/TS String Literal[0m] Found: "[1mNumber[0m"
     [33m→[0m export type OperatorType = 'String' | 'Date' | '[1m[31mNumber[0m' | 'Default';
  [31m[Line 3][0m [[36mJS/TS String Literal[0m] Found: "[1mDefault[0m"
     [33m→[0m export type OperatorType = 'String' | 'Date' | 'Number' | '[1m[31mDefault[0m';

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/sendEmail/components/EmailTemplateInEditor.tsx[0m
  [31m[Line 109][0m [[36mJSX Plain Text[0m] Found: "[1mLoading email templates...[0m"
     [33m→[0m <div className="p-2">[1m[31mLoading email templates...[0m</div>
  [31m[Line 117][0m [[36mJSX Plain Text[0m] Found: "[1mNo email templates found.[0m"
     [33m→[0m <div className="p-2">[1m[31mNo email templates found.[0m</div>
  [31m[Line 185][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to set this template to the email content? This will replace the current content.[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to set this template to the email content? This will replace the current content.[0m`,

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/sendEmail/components/EmailTemplateSelector.tsx[0m
  [31m[Line 24][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to set this template to the email content? This will replace the current content.[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to set this template to the email content? This will replace the current content.[0m`,
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect email template to load[0m"
     [33m→[0m placeholder="[1m[31mSelect email template to load[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/sendEmail/components/SelectEmailTemplate.tsx[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect email template[0m"
     [33m→[0m placeholder = '[1m[31mSelect email template[0m',
  [31m[Line 55][0m [[36mJS/TS String Literal[0m] Found: "[1mSearch email templates...[0m"
     [33m→[0m placeholder="[1m[31mSearch email templates...[0m"
  [31m[Line 60][0m [[36mJSX Plain Text[0m] Found: "[1mNo email templates found[0m"
     [33m→[0m <div className="p-4 text-center text-muted-foreground">
  [31m[Line 92][0m [[36mJS/TS String Literal[0m] Found: "[1mInsert template content[0m"
     [33m→[0m title="[1m[31mInsert template content[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/sendEmail/components/SendEmailActionResult.tsx[0m
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mCOMPANY EMAIL[0m"
     [33m→[0m ? '[1m[31mCOMPANY EMAIL[0m'
  [31m[Line 46][0m [[36mJS/TS String Literal[0m] Found: "[1mSent successfully[0m"
     [33m→[0m '[1m[31mSent successfully[0m'
  [31m[Line 51][0m [[36mJSX Plain Text[0m] Found: "[1mSee[0m"
     [33m→[0m <Button variant="ghost">
  [31m[Line 84][0m [[36mJSX Plain Text[0m] Found: "[1mSee Content[0m"
     [33m→[0m <Button variant="ghost">

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/sendEmail/components/SendEmailConfigForm.tsx[0m
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mSend email Configuration[0m"
     [33m→[0m formName: '[1m[31mSend email Configuration[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/sendEmail/components/SendEmailCustomMailsInput.tsx[0m
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter email address[0m"
     [33m→[0m placeholder="[1m[31mEnter email address[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/sendEmail/components/SendEmailEmailContentBuilder.tsx[0m
  [31m[Line 86][0m [[36mJSX Plain Text[0m] Found: "[1mEdit Content[0m"
     [33m→[0m <IconEdit className="size-4" />
  [31m[Line 164][0m [[36mJSX Plain Text[0m] Found: "[1mEdit Email Content[0m"
     [33m→[0m <Sheet.Title>[1m[31mEdit Email Content[0m</Sheet.Title>
  [31m[Line 165][0m [[36mJSX Plain Text[0m] Found: "[1mEdit the email content for the email action.[0m"
     [33m→[0m <Sheet.Description>
  [31m[Line 178][0m [[36mJS/TS String Literal[0m] Found: "[1mNo variables available yet[0m"
     [33m→[0m title: '[1m[31mNo variables available yet[0m',
  [31m[Line 180][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd a trigger or an earlier action to this automation to insert variables into the email content.[0m"
     [33m→[0m '[1m[31mAdd a trigger or an earlier action to this automation to insert variables into the email content.[0m',
  [31m[Line 182][0m [[36mJS/TS String Literal[0m] Found: "[1mVariable Sources[0m"
     [33m→[0m sourceSectionTitle="[1m[31mVariable Sources[0m"
  [31m[Line 208][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant="outline" onClick={() => setIsSheetOpen(false)}>
  [31m[Line 211][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m <Button onClick={on[1m[31mSave[0m}>Save</Button>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/sendEmail/components/SendEmailNodeContent.tsx[0m
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mCOMPANY EMAIL[0m"
     [33m→[0m content={type === 'default' ? '[1m[31mCOMPANY EMAIL[0m' : fromEmailPlaceHolder}
  [31m[Line 29][0m [[36mJSX Plain Text[0m] Found: "[1mSee Emails[0m"
     [33m→[0m <Button variant="ghost">
  [31m[Line 35][0m [[36mJSX Plain Text[0m] Found: "[1mRecipient emails[0m"
     [33m→[0m <Label>[1m[31mRecipient emails[0m</Label>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/sendEmail/hooks/useSendEmailActionResult.ts[0m
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mSent[0m"
     [33m→[0m return '[1m[31mSent[0m';

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/split/components/SplitConditionByOutputVariables.tsx[0m
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mequals to[0m"
     [33m→[0m { value: 'e', label: '[1m[31mequals to[0m' },
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mdoes not equal[0m"
     [33m→[0m { value: 'dne', label: '[1m[31mdoes not equal[0m' },
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mdoes not contain[0m"
     [33m→[0m { value: 'dnc', label: '[1m[31mdoes not contain[0m' },
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mis set[0m"
     [33m→[0m { value: 'is', label: '[1m[31mis set[0m' },
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mis not set[0m"
     [33m→[0m { value: 'ins', label: '[1m[31mis not set[0m' },
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mequals to[0m"
     [33m→[0m { value: 'numbere', label: '[1m[31mequals to[0m' },
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mdoes not equal[0m"
     [33m→[0m { value: 'numberdne', label: '[1m[31mdoes not equal[0m' },
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mis greater than[0m"
     [33m→[0m { value: 'numberigt', label: '[1m[31mis greater than[0m' },
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mis less than[0m"
     [33m→[0m { value: 'numberilt', label: '[1m[31mis less than[0m' },
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mis set[0m"
     [33m→[0m { value: 'is', label: '[1m[31mis set[0m' },
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mis not set[0m"
     [33m→[0m { value: 'ins', label: '[1m[31mis not set[0m' },
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mis true[0m"
     [33m→[0m { value: 'it', label: '[1m[31mis true[0m' },
  [31m[Line 46][0m [[36mJS/TS String Literal[0m] Found: "[1mis false[0m"
     [33m→[0m { value: 'if', label: '[1m[31mis false[0m' },
  [31m[Line 47][0m [[36mJS/TS String Literal[0m] Found: "[1mis set[0m"
     [33m→[0m { value: 'is', label: '[1m[31mis set[0m' },
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mis not set[0m"
     [33m→[0m { value: 'ins', label: '[1m[31mis not set[0m' },
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mis greater than[0m"
     [33m→[0m { value: 'dateigt', label: '[1m[31mis greater than[0m' },
  [31m[Line 53][0m [[36mJS/TS String Literal[0m] Found: "[1mis less than[0m"
     [33m→[0m { value: 'dateilt', label: '[1m[31mis less than[0m' },
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mis set[0m"
     [33m→[0m { value: 'dateis', label: '[1m[31mis set[0m' },
  [31m[Line 55][0m [[36mJS/TS String Literal[0m] Found: "[1mis not set[0m"
     [33m→[0m { value: 'dateins', label: '[1m[31mis not set[0m' },
  [31m[Line 156][0m [[36mJSX Plain Text[0m] Found: "[1mProperty[0m"
     [33m→[0m <Label>[1m[31mProperty[0m</Label>
  [31m[Line 157][0m [[36mJSX Plain Text[0m] Found: "[1mCondition[0m"
     [33m→[0m <Label>[1m[31mCondition[0m</Label>
  [31m[Line 158][0m [[36mJSX Plain Text[0m] Found: "[1mValue[0m"
     [33m→[0m <Label>[1m[31mValue[0m</Label>
  [31m[Line 168][0m [[36mJSX Plain Text[0m] Found: "[1mMatch[0m"
     [33m→[0m <span className="text-muted-foreground">[1m[31mMatch[0m</span>
  [31m[Line 177][0m [[36mJSX Plain Text[0m] Found: "[1mAll[0m"
     [33m→[0m <Select.Item value="and">[1m[31mAll[0m</Select.Item>
  [31m[Line 178][0m [[36mJSX Plain Text[0m] Found: "[1mAny[0m"
     [33m→[0m <Select.Item value="or">[1m[31mAny[0m</Select.Item>
  [31m[Line 203][0m [[36mJSX Plain Text[0m] Found: "[1mAdd condition[0m"
     [33m→[0m <IconPlus />
  [31m[Line 268][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect an field[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect an field[0m" />
  [31m[Line 298][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect an operator[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect an operator[0m" />
  [31m[Line 358][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect date[0m"
     [33m→[0m placeholder="[1m[31mSelect date[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/split/components/SplitConditionForm.tsx[0m
  [31m[Line 59][0m [[36mJS/TS String Literal[0m] Found: "[1mSplit condition[0m"
     [33m→[0m formName: '[1m[31mSplit condition[0m',
  [31m[Line 87][0m [[36mJS/TS String Literal[0m] Found: "[1mUnsaved condition changes[0m"
     [33m→[0m ? '[1m[31mUnsaved condition changes[0m'
  [31m[Line 88][0m [[36mJS/TS String Literal[0m] Found: "[1mCondition is not saved[0m"
     [33m→[0m : '[1m[31mCondition is not saved[0m'}
  [31m[Line 94][0m [[36mJSX Plain Text[0m] Found: "[1mCondition saved[0m"
     [33m→[0m <span className="text-muted-foreground">[1m[31mCondition saved[0m</span>
  [31m[Line 103][0m [[36mJS/TS String Literal[0m] Found: "[1mSave condition[0m"
     [33m→[0m {shouldSaveCondition ? '[1m[31mSave condition[0m' : 'Saved'}
  [31m[Line 103][0m [[36mJS/TS String Literal[0m] Found: "[1mSaved[0m"
     [33m→[0m {shouldSaveCondition ? 'Save condition' : '[1m[31mSaved[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/split/components/SplitConditionsConfigForm.tsx[0m
  [31m[Line 31][0m [[36mJSX Plain Text[0m] Found: "[1mSelect a trigger to configure split conditions[0m"
     [33m→[0m <div className="px-4 text-sm text-muted-foreground">
  [31m[Line 49][0m [[36mJSX Plain Text[0m] Found: "[1mOptions[0m"
     [33m→[0m <Label>[1m[31mOptions[0m</Label>
  [31m[Line 50][0m [[36mJSX Plain Text[0m] Found: "[1mBuild each split option with segment conditions.[0m"
     [33m→[0m <p className="text-sm text-muted-foreground">
  [31m[Line 55][0m [[36mJSX Plain Text[0m] Found: "[1mAdd option[0m"
     [33m→[0m <IconPlus className="size-4" />
  [31m[Line 61][0m [[36mJSX Plain Text[0m] Found: "[1mSave each changed condition before saving the split configuration.[0m"
     [33m→[0m <IconAlertCircle className="size-4 shrink-0" />
  [31m[Line 90][0m [[36mJS/TS String Literal[0m] Found: "[1mOption label[0m"
     [33m→[0m placeholder="[1m[31mOption label[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/split/components/SplitConditionsNodeConfig.tsx[0m
  [31m[Line 19][0m [[36mJSX Plain Text[0m] Found: "[1mConfigure split options[0m"
     [33m→[0m <div className="line-clamp-3 p-2 text-xs text-muted-foreground">
  [31m[Line 33][0m [[36mJSX Plain Text[0m] Found: "[1mFallback[0m"
     [33m→[0m <span className="text-mono">[1m[31mFallback[0m</span>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/split/components/SplitCondtionRemoveButton.tsx[0m
  [31m[Line 23][0m [[36mTemplate Literal String[0m] Found: "[1mOption[0m"
     [33m→[0m const optionLabel = option?.label || `[1m[31mOption[0m ${index + 1}`;
  [31m[Line 28][0m [[36mTemplate Literal String[0m] Found: "[1mDelete "[0m"
     [33m→[0m message: `[1m[31mDelete "[0m${optionLabel}"?`,
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mThis action cannot be undone. The split option and its associated segment will be permanently removed.[0m"
     [33m→[0m '[1m[31mThis action cannot be undone. The split option and its associated segment will be permanently removed.[0m',
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mDelete[0m"
     [33m→[0m okLabel: '[1m[31mDelete[0m',
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mCancel[0m"
     [33m→[0m cancelLabel: '[1m[31mCancel[0m',
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/split/hooks/useSplitCondtionsConfigForm.ts[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mOption 1[0m"
     [33m→[0m label: '[1m[31mOption 1[0m',
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mSplit conditions configuration[0m"
     [33m→[0m formName: '[1m[31mSplit conditions configuration[0m',
  [31m[Line 67][0m [[36mTemplate Literal String[0m] Found: "[1mOption[0m"
     [33m→[0m label: `[1m[31mOption[0m ${fields.length + 1}`,

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/split/states/splitConditionsConfigForm.ts[0m
  [31m[Line 5][0m [[36mJS/TS String Literal[0m] Found: "[1mProperty type is required[0m"
     [33m→[0m propertyType: z.string().min(1, '[1m[31mProperty type is required[0m'),
  [31m[Line 6][0m [[36mJS/TS String Literal[0m] Found: "[1mProperty name is required[0m"
     [33m→[0m propertyName: z.string().min(1, '[1m[31mProperty name is required[0m'),
  [31m[Line 7][0m [[36mJS/TS String Literal[0m] Found: "[1mProperty operator is required[0m"
     [33m→[0m propertyOperator: z.string().min(1, '[1m[31mProperty operator is required[0m'),
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mProperty value is required[0m"
     [33m→[0m message: '[1m[31mProperty value is required[0m',
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mOption label is required[0m"
     [33m→[0m label: z.string().min(1, '[1m[31mOption label is required[0m'),
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least one option is required[0m"
     [33m→[0m .min(1, '[1m[31mAt least one option is required[0m'),

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/waitEvent/components/WaitEventActionResult.tsx[0m
  [31m[Line 22][0m [[36mJSX Plain Text[0m] Found: "[1mCopy Url[0m"
     [33m→[0m <IconCopy /> [1m[31mCopy Url[0m

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/waitEvent/components/WaitEventConfigCustomForm.tsx[0m
  [31m[Line 35][0m [[36mJSX Plain Text[0m] Found: "[1mSave Configuration[0m"
     [33m→[0m <Button onClick={() => formRef.current?.submit()}>
  [31m[Line 45][0m [[36mJSX Plain Text[0m] Found: "[1mWebhook Configuration[0m"
     [33m→[0m <Form.Label>[1m[31mWebhook Configuration[0m</Form.Label>
  [31m[Line 49][0m [[36mJSX Plain Text[0m] Found: "[1mPauses the workflow until an HTTP request is received. The
                endpoint URL is auto-generated. Customize headers, body schema,
                and security as needed (all optional).[0m"
     [33m→[0m <span>
  [31m[Line 124][0m [[36mJS/TS String Literal[0m] Found: "[1mThere is some error in the form[0m"
     [33m→[0m title: '[1m[31mThere is some error in the form[0m',
  [31m[Line 135][0m [[36mJSX Plain Text[0m] Found: "[1mHeaders[0m"
     [33m→[0m <Tabs.Trigger value="headers">
  [31m[Line 141][0m [[36mJSX Plain Text[0m] Found: "[1mBody[0m"
     [33m→[0m <Tabs.Trigger value="body">
  [31m[Line 147][0m [[36mJSX Plain Text[0m] Found: "[1mSettings[0m"
     [33m→[0m <Tabs.Trigger value="settings">

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/waitEvent/components/WaitEventConfigSegmentForm.tsx[0m
  [31m[Line 31][0m [[36mJSX Plain Text[0m] Found: "[1mConditions[0m"
     [33m→[0m <Form.Label>[1m[31mConditions[0m</Form.Label>
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mSelect a target to configure conditions[0m"
     [33m→[0m <div className="text-muted-foreground text-sm">
  [31m[Line 46][0m [[36mJSX Plain Text[0m] Found: "[1mConditions[0m"
     [33m→[0m <Form.Label>[1m[31mConditions[0m {`(${field.value})`}</Form.Label>
  [31m[Line 47][0m [[36mJSX Plain Text[0m] Found: "[1mDefine conditions that must be met before continuing.[0m"
     [33m→[0m <Form.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/waitEvent/components/WaitEventNodeContent.tsx[0m
  [31m[Line 6][0m [[36mJS/TS String Literal[0m] Found: "[1mWebhook is received[0m"
     [33m→[0m custom: '[1m[31mWebhook is received[0m',
  [31m[Line 7][0m [[36mJS/TS String Literal[0m] Found: "[1mTrigger condition is met[0m"
     [33m→[0m trigger: '[1m[31mTrigger condition is met[0m',
  [31m[Line 8][0m [[36mJS/TS String Literal[0m] Found: "[1mAction condition is met[0m"
     [33m→[0m action: '[1m[31mAction condition is met[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/waitEvent/constants/waitEventConstants.ts[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mAPI request (Custom)[0m"
     [33m→[0m label: '[1m[31mAPI request (Custom)[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/webhooks/components/OutgoinWebhookActionResponse.tsx[0m
  [31m[Line 81][0m [[36mJS/TS String Literal[0m] Found: "[1mN/A[0m"
     [33m→[0m {response.status || '[1m[31mN/A[0m'} {response.statusText || ''}
  [31m[Line 97][0m [[36mJS/TS String Literal[0m] Found: "[1mMethod[0m"
     [33m→[0m <InfoRow label="[1m[31mMethod[0m" value={request.method} />
  [31m[Line 100][0m [[36mJS/TS String Literal[0m] Found: "[1mContent Type[0m"
     [33m→[0m label="[1m[31mContent Type[0m"
  [31m[Line 103][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m <InfoRow label="[1m[31mError[0m" value={error?.message} />
  [31m[Line 109][0m [[36mJSX Plain Text[0m] Found: "[1mSee Request & Response[0m"
     [33m→[0m <IconEye className="mr-2 h-4 w-4" />
  [31m[Line 115][0m [[36mJSX Plain Text[0m] Found: "[1mOutgoing Webhook Result[0m"
     [33m→[0m <Dialog.Title>[1m[31mOutgoing Webhook Result[0m</Dialog.Title>
  [31m[Line 116][0m [[36mJSX Plain Text[0m] Found: "[1mReview the final request and received response for this webhook
              action.[0m"
     [33m→[0m <Dialog.Description>
  [31m[Line 123][0m [[36mJS/TS String Literal[0m] Found: "[1mRequest[0m"
     [33m→[0m <Section title="[1m[31mRequest[0m">
  [31m[Line 124][0m [[36mJS/TS String Literal[0m] Found: "[1mMethod[0m"
     [33m→[0m <InfoRow label="[1m[31mMethod[0m" value={request.method} />
  [31m[Line 127][0m [[36mJS/TS String Literal[0m] Found: "[1mAttempts[0m"
     [33m→[0m label="[1m[31mAttempts[0m"
  [31m[Line 132][0m [[36mJSX Plain Text[0m] Found: "[1mHeaders[0m"
     [33m→[0m <div className="text-sm text-muted-foreground">[1m[31mHeaders[0m</div>
  [31m[Line 144][0m [[36mJSX Plain Text[0m] Found: "[1mBody[0m"
     [33m→[0m <div className="text-sm text-muted-foreground">[1m[31mBody[0m</div>
  [31m[Line 152][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m <Section title={error ? '[1m[31mError[0m' : 'Response'}>
  [31m[Line 152][0m [[36mJS/TS String Literal[0m] Found: "[1mResponse[0m"
     [33m→[0m <Section title={error ? 'Error' : '[1m[31mResponse[0m'}>
  [31m[Line 155][0m [[36mJS/TS String Literal[0m] Found: "[1mStatus[0m"
     [33m→[0m <InfoRow label="[1m[31mStatus[0m" value={response.status} />
  [31m[Line 156][0m [[36mJS/TS String Literal[0m] Found: "[1mStatus Text[0m"
     [33m→[0m <InfoRow label="[1m[31mStatus Text[0m" value={response.statusText} />
  [31m[Line 158][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m label="[1m[31mSuccess[0m"
  [31m[Line 161][0m [[36mJS/TS String Literal[0m] Found: "[1mContent Type[0m"
     [33m→[0m <InfoRow label="[1m[31mContent Type[0m" value={response.contentType} />
  [31m[Line 167][0m [[36mJS/TS String Literal[0m] Found: "[1mPhase[0m"
     [33m→[0m <InfoRow label="[1m[31mPhase[0m" value={error.phase} />
  [31m[Line 168][0m [[36mJS/TS String Literal[0m] Found: "[1mMessage[0m"
     [33m→[0m <InfoRow label="[1m[31mMessage[0m" value={error.message} />
  [31m[Line 174][0m [[36mJSX Plain Text[0m] Found: "[1mHeaders[0m"
     [33m→[0m <div className="text-sm text-muted-foreground">[1m[31mHeaders[0m</div>
  [31m[Line 187][0m [[36mJSX Plain Text[0m] Found: "[1mJSON Body[0m"
     [33m→[0m <div className="text-sm text-muted-foreground">[1m[31mJSON Body[0m</div>
  [31m[Line 198][0m [[36mJSX Plain Text[0m] Found: "[1mBody[0m"
     [33m→[0m <div className="text-sm text-muted-foreground">[1m[31mBody[0m</div>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/webhooks/components/OutgoingWebhookAuth.tsx[0m
  [31m[Line 20][0m [[36mJSX Plain Text[0m] Found: "[1mAuthentication[0m"
     [33m→[0m <Form.Label>[1m[31mAuthentication[0m</Form.Label>
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mNone[0m"
     [33m→[0m <Select.Item value="none">[1m[31mNone[0m</Select.Item>
  [31m[Line 33][0m [[36mJSX Plain Text[0m] Found: "[1mBasic Auth[0m"
     [33m→[0m <Select.Item value="basic">[1m[31mBasic Auth[0m</Select.Item>
  [31m[Line 34][0m [[36mJSX Plain Text[0m] Found: "[1mBearer Token Auth[0m"
     [33m→[0m <Select.Item value="bearer">[1m[31mBearer Token Auth[0m</Select.Item>
  [31m[Line 35][0m [[36mJSX Plain Text[0m] Found: "[1mJWT Bearer[0m"
     [33m→[0m <Select.Item value="jwt">[1m[31mJWT Bearer[0m</Select.Item>
  [31m[Line 79][0m [[36mJSX Plain Text[0m] Found: "[1mUser[0m"
     [33m→[0m <Label>[1m[31mUser[0m</Label>
  [31m[Line 81][0m [[36mJS/TS String Literal[0m] Found: "[1mUsername or expression[0m"
     [33m→[0m placeholder="[1m[31mUsername or expression[0m"
  [31m[Line 92][0m [[36mJSX Plain Text[0m] Found: "[1mPassword[0m"
     [33m→[0m <Label>[1m[31mPassword[0m</Label>
  [31m[Line 95][0m [[36mJS/TS String Literal[0m] Found: "[1mPassword or expression[0m"
     [33m→[0m placeholder="[1m[31mPassword or expression[0m"
  [31m[Line 117][0m [[36mJSX Plain Text[0m] Found: "[1mValue[0m"
     [33m→[0m <Label>[1m[31mValue[0m</Label>
  [31m[Line 119][0m [[36mJS/TS String Literal[0m] Found: "[1mBearer {{ $vars.token }}[0m"
     [33m→[0m placeholder="[1m[31mBearer {{ $vars.token }}[0m"
  [31m[Line 138][0m [[36mJSX Plain Text[0m] Found: "[1mJWT Secret[0m"
     [33m→[0m <Label>[1m[31mJWT Secret[0m</Label>
  [31m[Line 141][0m [[36mJS/TS String Literal[0m] Found: "[1mYour JWT signing secret[0m"
     [33m→[0m placeholder="[1m[31mYour JWT signing secret[0m"
  [31m[Line 152][0m [[36mJSX Plain Text[0m] Found: "[1mAlgorithm[0m"
     [33m→[0m <Label>[1m[31mAlgorithm[0m</Label>
  [31m[Line 179][0m [[36mJSX Plain Text[0m] Found: "[1mJWT Header (JSON)[0m"
     [33m→[0m <Label>[1m[31mJWT Header (JSON)[0m</Label>
  [31m[Line 181][0m [[36mJS/TS String Literal[0m] Found: "[1m{"typ": "JWT", "alg": "HS256"}[0m"
     [33m→[0m placeholder='[1m[31m{"typ": "JWT", "alg": "HS256"}[0m'
  [31m[Line 193][0m [[36mJSX Plain Text[0m] Found: "[1mJWT Payload (JSON)[0m"
     [33m→[0m <Label>[1m[31mJWT Payload (JSON)[0m</Label>
  [31m[Line 195][0m [[36mJS/TS String Literal[0m] Found: "[1m{"sub": "{{ workflow.id }}", "iat": "{{ now }}", "exp": "{{ now + 3600 }}"}[0m"
     [33m→[0m placeholder='[1m[31m{"sub": "{{ workflow.id }}", "iat": "{{ now }}", "exp": "{{ now + 3600 }}"}[0m'
  [31m[Line 207][0m [[36mJSX Plain Text[0m] Found: "[1mToken Placement[0m"
     [33m→[0m <Label>[1m[31mToken Placement[0m</Label>
  [31m[Line 217][0m [[36mJSX Plain Text[0m] Found: "[1mAuthorization Header[0m"
     [33m→[0m <Select.Item value="header">[1m[31mAuthorization Header[0m</Select.Item>
  [31m[Line 218][0m [[36mJSX Plain Text[0m] Found: "[1mQuery Parameter[0m"
     [33m→[0m <Select.Item value="query">[1m[31mQuery Parameter[0m</Select.Item>
  [31m[Line 219][0m [[36mJSX Plain Text[0m] Found: "[1mRequest Body[0m"
     [33m→[0m <Select.Item value="body">[1m[31mRequest Body[0m</Select.Item>
  [31m[Line 228][0m [[36mJSX Plain Text[0m] Found: "[1mJWT Token Generation[0m"
     [33m→[0m <p className="text-sm font-medium text-primary">
  [31m[Line 231][0m [[36mJSX Plain Text[0m] Found: "[1mn8n will automatically generate and sign the JWT token using your
              secret and algorithm. Use n8n expressions in the payload for
              dynamic values like workflow ID, execution time, etc.[0m"
     [33m→[0m <p className="text-xs text-primary/70">
  [31m[Line 236][0m [[36mJSX Plain Text[0m] Found: "[1mExample: Authorization: Bearer
              eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...[0m"
     [33m→[0m <div className="mt-2 text-xs text-primary font-mono bg-primary/20 p-2 rounded">

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/webhooks/components/OutgoingWebhookBodyBuilder.tsx[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1m1px solid var(--border)[0m"
     [33m→[0m border: '[1m[31m1px solid var(--border)[0m',
  [31m[Line 79][0m [[36mJSX Plain Text[0m] Found: "[1mBody[0m"
     [33m→[0m <Form.Label>[1m[31mBody[0m</Form.Label>
  [31m[Line 86][0m [[36mJSX Plain Text[0m] Found: "[1mText[0m"
     [33m→[0m <Select.Item value="text">[1m[31mText[0m</Select.Item>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/webhooks/components/OutgoingWebhookConfigForm.tsx[0m
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mWebhook Configuration[0m"
     [33m→[0m formName: '[1m[31mWebhook Configuration[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/webhooks/components/OutgoingWebhookHeaders.tsx[0m
  [31m[Line 26][0m [[36mJSX Plain Text[0m] Found: "[1mHeaders[0m"
     [33m→[0m <Form.Label>[1m[31mHeaders[0m</Form.Label>
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Header[0m"
     [33m→[0m <IconPlus /> [1m[31mAdd Header[0m
  [31m[Line 35][0m [[36mJSX Plain Text[0m] Found: "[1mNo headers added yet. Click "Add Header" to get started.[0m"
     [33m→[0m <div className="text-sm text-muted-foreground text-center py-8">
  [31m[Line 45][0m [[36mJSX Plain Text[0m] Found: "[1mHeaders[0m"
     [33m→[0m <Label className="text-sm font-medium">[1m[31mHeaders[0m</Label>
  [31m[Line 47][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Header[0m"
     [33m→[0m <IconPlus className="h-4 w-4 mr-2" />
  [31m[Line 55][0m [[36mJS/TS String Literal[0m] Found: "[1mHeader name[0m"
     [33m→[0m placeholder="[1m[31mHeader name[0m"
  [31m[Line 65][0m [[36mJS/TS String Literal[0m] Found: "[1mValue or expression[0m"
     [33m→[0m placeholder="[1m[31mValue or expression[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/webhooks/components/OutgoingWebhookOptions.tsx[0m
  [31m[Line 17][0m [[36mJSX Plain Text[0m] Found: "[1mEnable SSL certificate verification[0m"
     [33m→[0m <Form.Label>[1m[31mEnable SSL certificate verification[0m </Form.Label>
  [31m[Line 18][0m [[36mJSX Plain Text[0m] Found: "[1mVerify SSL certificates when sending a request. Verification
                failures will result in the request being aborted.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 33][0m [[36mJSX Plain Text[0m] Found: "[1mTimeout (ms)[0m"
     [33m→[0m <Form.Label>[1m[31mTimeout (ms)[0m</Form.Label>
  [31m[Line 46][0m [[36mJSX Plain Text[0m] Found: "[1mAutomatically follow redirects[0m"
     [33m→[0m <Form.Label>[1m[31mAutomatically follow redirects[0m </Form.Label>
  [31m[Line 47][0m [[36mJSX Plain Text[0m] Found: "[1mFollow HTTP 3xx responses as redirects.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 67][0m [[36mJSX Plain Text[0m] Found: "[1mMaximum number of redirects[0m"
     [33m→[0m <Form.Label>[1m[31mMaximum number of redirects[0m</Form.Label>
  [31m[Line 68][0m [[36mJSX Plain Text[0m] Found: "[1mSet a cap on the maximum number of redirects to follow.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 83][0m [[36mJSX Plain Text[0m] Found: "[1mRetry Configuration[0m"
     [33m→[0m <OutgoinWebhookLabeledSeparator>
  [31m[Line 92][0m [[36mJSX Plain Text[0m] Found: "[1mRetry Attempts[0m"
     [33m→[0m <Form.Label>[1m[31mRetry Attempts[0m</Form.Label>
  [31m[Line 103][0m [[36mJSX Plain Text[0m] Found: "[1mNumber of retry attempts (0 = no retry)[0m"
     [33m→[0m <Form.Description>
  [31m[Line 115][0m [[36mJSX Plain Text[0m] Found: "[1mRetry Delay (ms)[0m"
     [33m→[0m <Form.Label>[1m[31mRetry Delay (ms)[0m</Form.Label>
  [31m[Line 126][0m [[36mJSX Plain Text[0m] Found: "[1mDelay between retry attempts[0m"
     [33m→[0m <Form.Description className="text-xs text-gray-500">
  [31m[Line 138][0m [[36mJSX Plain Text[0m] Found: "[1mBackoff Strategy[0m"
     [33m→[0m <Form.Label>[1m[31mBackoff Strategy[0m</Form.Label>
  [31m[Line 144][0m [[36mJSX Plain Text[0m] Found: "[1mNone[0m"
     [33m→[0m <Select.Item value="none">[1m[31mNone[0m</Select.Item>
  [31m[Line 145][0m [[36mJSX Plain Text[0m] Found: "[1mLinear[0m"
     [33m→[0m <Select.Item value="linear">[1m[31mLinear[0m</Select.Item>
  [31m[Line 146][0m [[36mJSX Plain Text[0m] Found: "[1mExponential[0m"
     [33m→[0m <Select.Item value="exponential">[1m[31mExponential[0m</Select.Item>
  [31m[Line 153][0m [[36mJSX Plain Text[0m] Found: "[1mProxy Configuration[0m"
     [33m→[0m <OutgoinWebhookLabeledSeparator>
  [31m[Line 163][0m [[36mJSX Plain Text[0m] Found: "[1mProxy Host[0m"
     [33m→[0m <Form.Label>[1m[31mProxy Host[0m</Form.Label>
  [31m[Line 174][0m [[36mJSX Plain Text[0m] Found: "[1mProxy Port[0m"
     [33m→[0m <Form.Label>[1m[31mProxy Port[0m</Form.Label>
  [31m[Line 195][0m [[36mJSX Plain Text[0m] Found: "[1mProxy Username[0m"
     [33m→[0m <Form.Label>[1m[31mProxy Username[0m</Form.Label>
  [31m[Line 196][0m [[36mJS/TS String Literal[0m] Found: "[1mOptional[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mOptional[0m" />
  [31m[Line 206][0m [[36mJSX Plain Text[0m] Found: "[1mProxy Password[0m"
     [33m→[0m <Form.Label>[1m[31mProxy Password[0m</Form.Label>
  [31m[Line 207][0m [[36mJS/TS String Literal[0m] Found: "[1mOptional[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mOptional[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/webhooks/components/OutgoingWebhookRequest.tsx[0m
  [31m[Line 31][0m [[36mJSX Plain Text[0m] Found: "[1mMethod[0m"
     [33m→[0m <Form.Label>[1m[31mMethod[0m</Form.Label>
  [31m[Line 74][0m [[36mJSX Plain Text[0m] Found: "[1mQuery Parameters[0m"
     [33m→[0m <Label className="text-sm font-medium">
  [31m[Line 84][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Parameter[0m"
     [33m→[0m <IconPlus className="mr-2" />
  [31m[Line 91][0m [[36mJS/TS String Literal[0m] Found: "[1mParameter name[0m"
     [33m→[0m placeholder="[1m[31mParameter name[0m"
  [31m[Line 101][0m [[36mJS/TS String Literal[0m] Found: "[1mValue or expression[0m"
     [33m→[0m placeholder="[1m[31mValue or expression[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/webhooks/components/json/containers/JSONArrayContainer.tsx[0m
  [31m[Line 55][0m [[36mJSX Plain Text[0m] Found: "[1mEmpty array[0m"
     [33m→[0m <div className="text-xs text-muted-foreground">[1m[31mEmpty array[0m</div>
  [31m[Line 59][0m [[36mJSX Plain Text[0m] Found: "[1mAdd item[0m"
     [33m→[0m <IconPlus className="mr-1 h-3 w-3" /> [1m[31mAdd item[0m

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/webhooks/components/json/containers/JSONObjectContainer.tsx[0m
  [31m[Line 77][0m [[36mJSX Plain Text[0m] Found: "[1mEmpty object[0m"
     [33m→[0m <div className="text-xs text-muted-foreground">[1m[31mEmpty object[0m</div>
  [31m[Line 82][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd field key[0m"
     [33m→[0m placeholder="[1m[31mAdd field key[0m"
  [31m[Line 88][0m [[36mJSX Plain Text[0m] Found: "[1mAdd[0m"
     [33m→[0m <IconPlus className="mr-1 h-3 w-3" /> [1m[31mAdd[0m

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/webhooks/components/json/editor/JSONRawEditor.tsx[0m
  [31m[Line 21][0m [[36mJSX Plain Text[0m] Found: "[1mJSON summary[0m"
     [33m→[0m <div className="text-[10px] text-muted-foreground">[1m[31mJSON summary[0m</div>
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mHide raw[0m"
     [33m→[0m {isOpen ? '[1m[31mHide raw[0m' : 'Edit raw'}
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mEdit raw[0m"
     [33m→[0m {isOpen ? 'Hide raw' : '[1m[31mEdit raw[0m'}
  [31m[Line 27][0m [[36mJSX Plain Text[0m] Found: "[1mApply[0m"
     [33m→[0m <Button size="sm" onClick={on[1m[31mApply[0m}>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/webhooks/components/json/editor/JSONTreeNode.tsx[0m
  [31m[Line 50][0m [[36mTemplate Literal String[0m] Found: "[1mkeys }[0m"
     [33m→[0m if (type === 'object') return `{ ${Object.keys(value || {}).length} [1m[31mkeys }[0m`;
  [31m[Line 51][0m [[36mTemplate Literal String[0m] Found: "[1mitems ][0m"
     [33m→[0m if (type === 'array') return `[ ${(value as any[])?.length ?? 0} [1m[31mitems ][0m`;
  [31m[Line 65][0m [[36mJS/TS String Literal[0m] Found: "[1mCollapse[0m"
     [33m→[0m aria-label={expanded ? '[1m[31mCollapse[0m' : 'Expand'}
  [31m[Line 65][0m [[36mJS/TS String Literal[0m] Found: "[1mExpand[0m"
     [33m→[0m aria-label={expanded ? 'Collapse' : '[1m[31mExpand[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/webhooks/components/json/ui/JSONRemoveButton.tsx[0m
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mRemove[0m"
     [33m→[0m <Button variant="ghost" size="sm" onClick={on[1m[31mRemove[0m} aria-label="Remove">

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/webhooks/constants/outgoingWebhookForm.ts[0m
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mEdDSA[0m"
     [33m→[0m '[1m[31mEdDSA[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/webhooks/hooks/useJSONBodyBuilder.ts[0m
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid JSON[0m"
     [33m→[0m title: '[1m[31mInvalid JSON[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/actions/webhooks/states/outgoingWebhookFormSchema.ts[0m
  [31m[Line 76][0m [[36mJS/TS String Literal[0m] Found: "[1mSecret key is required[0m"
     [33m→[0m secretKey: z.string().min(1, '[1m[31mSecret key is required[0m'),
  [31m[Line 126][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid hostname format[0m"
     [33m→[0m }, '[1m[31mInvalid hostname format[0m'),
  [31m[Line 134][0m [[36mJS/TS String Literal[0m] Found: "[1mPort must be an integer between 1000 and 9999[0m"
     [33m→[0m { message: '[1m[31mPort must be an integer between 1000 and 9999[0m' },
  [31m[Line 152][0m [[36mJS/TS String Literal[0m] Found: "[1mProxy port is required when host is provided[0m"
     [33m→[0m message: '[1m[31mProxy port is required when host is provided[0m',
  [31m[Line 161][0m [[36mJS/TS String Literal[0m] Found: "[1mProxy host is required when port is provided[0m"
     [33m→[0m message: '[1m[31mProxy host is required when port is provided[0m',
  [31m[Line 170][0m [[36mJS/TS String Literal[0m] Found: "[1mProxy password is required when username is provided[0m"
     [33m→[0m message: '[1m[31mProxy password is required when username is provided[0m',
  [31m[Line 179][0m [[36mJS/TS String Literal[0m] Found: "[1mProxy username is required when password is provided[0m"
     [33m→[0m message: '[1m[31mProxy username is required when password is provided[0m',
  [31m[Line 218][0m [[36mJS/TS String Literal[0m] Found: "[1mURL is required[0m"
     [33m→[0m url: z.string().min(1, '[1m[31mURL is required[0m').refine(isValidOutgoingWebhookUrl, {
  [31m[Line 219][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter a valid HTTP or HTTPS URL[0m"
     [33m→[0m message: '[1m[31mEnter a valid HTTP or HTTPS URL[0m',
  [31m[Line 237][0m [[36mJS/TS String Literal[0m] Found: "[1mmaxRedirects is required when followRedirect is true[0m"
     [33m→[0m message: '[1m[31mmaxRedirects is required when followRedirect is true[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/components/ActionNode.tsx[0m
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mhover:text-success  hover:border-success[0m"
     [33m→[0m addButtonClassName="[1m[31mhover:text-success  hover:border-success[0m"
  [31m[Line 111][0m [[36mJSX Plain Text[0m] Found: "[1mAction[0m"
     [33m→[0m <p className="font-medium font-bold">[1m[31mAction[0m</p>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/components/ActionNodeConfigurationContent.tsx[0m
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mConfiguration[0m"
     [33m→[0m <p className="text-sm font-semibold">[1m[31mConfiguration[0m</p>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/components/FolksActionSourceHandler.tsx[0m
  [31m[Line 10][0m [[36mJS/TS String Literal[0m] Found: "[1mhover:text-muted-foreground hover:border-muted-foreground[0m"
     [33m→[0m '[1m[31mhover:text-muted-foreground hover:border-muted-foreground[0m',
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mhover:text-success hover:border-success[0m"
     [33m→[0m addButtonClassName: '[1m[31mhover:text-success hover:border-success[0m',
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mhover:text-destructive hover:border-destructive[0m"
     [33m→[0m addButtonClassName: '[1m[31mhover:text-destructive hover:border-destructive[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/components/NodeDropdownActions.tsx[0m
  [31m[Line 73][0m [[36mJSX Plain Text[0m] Found: "[1mConfiguration[0m"
     [33m→[0m <IconSettings className="size-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/components/TriggerNode.tsx[0m
  [31m[Line 19][0m [[36mJSX Plain Text[0m] Found: "[1mConfiguration[0m"
     [33m→[0m <p className="text-sm font-semibold">[1m[31mConfiguration[0m</p>
  [31m[Line 63][0m [[36mJSX Plain Text[0m] Found: "[1mTrigger[0m"
     [33m→[0m <p className="font-medium font-bold">[1m[31mTrigger[0m</p>
  [31m[Line 116][0m [[36mJS/TS String Literal[0m] Found: "[1mhover:border-primary hover:text-primary [0m"
     [33m→[0m addButtonClassName="[1m[31mhover:border-primary hover:text-primary [0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/components/WorkflowActionMapper.tsx[0m
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mNot found[0m"
     [33m→[0m return '[1m[31mNot found[0m';

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/components/WorkflowNode.tsx[0m
  [31m[Line 36][0m [[36mJSX Plain Text[0m] Found: "[1mWorkflow[0m"
     [33m→[0m <p className="font-medium font-bold">[1m[31mWorkflow[0m</p>
  [31m[Line 92][0m [[36mJS/TS String Literal[0m] Found: "[1mhover:border-warning hover:text-warning [0m"
     [33m→[0m addButtonClassName="[1m[31mhover:border-warning hover:text-warning [0m"
  [31m[Line 141][0m [[36mJSX Plain Text[0m] Found: "[1mWorkflow[0m"
     [33m→[0m <Sheet.Title>[1m[31mWorkflow[0m</Sheet.Title>
  [31m[Line 142][0m [[36mJSX Plain Text[0m] Found: "[1mSelect workflow action for connection[0m"
     [33m→[0m <Sheet.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/triggers/webhooks/components/IncomingWebhookBodyField.tsx[0m
  [31m[Line 21][0m [[36mJSX Plain Text[0m] Found: "[1mPayload Schema[0m"
     [33m→[0m <Form.Label>[1m[31mPayload Schema[0m</Form.Label>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/triggers/webhooks/components/IncomingWebhookConfigForm.tsx[0m
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mThere is some error in the form[0m"
     [33m→[0m title: '[1m[31mThere is some error in the form[0m',
  [31m[Line 48][0m [[36mJSX Plain Text[0m] Found: "[1mMethod[0m"
     [33m→[0m <Form.Label>[1m[31mMethod[0m</Form.Label>
  [31m[Line 77][0m [[36mJSX Plain Text[0m] Found: "[1mHeaders[0m"
     [33m→[0m <Tabs.Trigger value="headers">[1m[31mHeaders[0m</Tabs.Trigger>
  [31m[Line 78][0m [[36mJSX Plain Text[0m] Found: "[1mBody[0m"
     [33m→[0m <Tabs.Trigger value="body">[1m[31mBody[0m</Tabs.Trigger>
  [31m[Line 79][0m [[36mJSX Plain Text[0m] Found: "[1mSettings[0m"
     [33m→[0m <Tabs.Trigger value="settings">[1m[31mSettings[0m</Tabs.Trigger>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/triggers/webhooks/components/IncomingWebhookEndpointField.tsx[0m
  [31m[Line 18][0m [[36mJSX Plain Text[0m] Found: "[1mWebhook URL[0m"
     [33m→[0m <Form.Label>[1m[31mWebhook URL[0m</Form.Label>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/triggers/webhooks/components/IncomingWebhookHeaderBuilder.tsx[0m
  [31m[Line 34][0m [[36mJSX Plain Text[0m] Found: "[1mHeaders[0m"
     [33m→[0m <Form.Label>[1m[31mHeaders[0m</Form.Label>
  [31m[Line 40][0m [[36mJSX Plain Text[0m] Found: "[1mNo headers added yet. Click "Add Header" to get started.[0m"
     [33m→[0m <div className="text-sm text-muted-foreground text-center py-8">
  [31m[Line 50][0m [[36mJSX Plain Text[0m] Found: "[1mHeaders[0m"
     [33m→[0m <Form.Label>[1m[31mHeaders[0m</Form.Label>
  [31m[Line 54][0m [[36mJSX Plain Text[0m] Found: "[1mKey[0m"
     [33m→[0m <Form.Label className="w-1/4">[1m[31mKey[0m</Form.Label>
  [31m[Line 55][0m [[36mJSX Plain Text[0m] Found: "[1mValue[0m"
     [33m→[0m <Form.Label className="w-2/4">[1m[31mValue[0m</Form.Label>
  [31m[Line 56][0m [[36mJSX Plain Text[0m] Found: "[1mDescription[0m"
     [33m→[0m <Form.Label className="w-1/4">[1m[31mDescription[0m</Form.Label>
  [31m[Line 86][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Header[0m"
     [33m→[0m <IconPlus /> [1m[31mAdd Header[0m
  [31m[Line 110][0m [[36mJS/TS String Literal[0m] Found: "[1mKey[0m"
     [33m→[0m placeholder="[1m[31mKey[0m"
  [31m[Line 116][0m [[36mJS/TS String Literal[0m] Found: "[1mValue[0m"
     [33m→[0m placeholder="[1m[31mValue[0m"
  [31m[Line 122][0m [[36mJS/TS String Literal[0m] Found: "[1mDescription (Optional)[0m"
     [33m→[0m placeholder="[1m[31mDescription (Optional)[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/triggers/webhooks/components/IncomingWebhookJSONPropertyEditor.tsx[0m
  [31m[Line 61][0m [[36mJS/TS String Literal[0m] Found: "[1mProperty name[0m"
     [33m→[0m placeholder="[1m[31mProperty name[0m"
  [31m[Line 78][0m [[36mJSX Plain Text[0m] Found: "[1mString[0m"
     [33m→[0m <Select.Item value="string">[1m[31mString[0m</Select.Item>
  [31m[Line 79][0m [[36mJSX Plain Text[0m] Found: "[1mNumber[0m"
     [33m→[0m <Select.Item value="number">[1m[31mNumber[0m</Select.Item>
  [31m[Line 80][0m [[36mJSX Plain Text[0m] Found: "[1mBoolean[0m"
     [33m→[0m <Select.Item value="boolean">[1m[31mBoolean[0m</Select.Item>
  [31m[Line 81][0m [[36mJSX Plain Text[0m] Found: "[1mObject[0m"
     [33m→[0m <Select.Item value="object">[1m[31mObject[0m</Select.Item>
  [31m[Line 82][0m [[36mJSX Plain Text[0m] Found: "[1mArray[0m"
     [33m→[0m <Select.Item value="array">[1m[31mArray[0m</Select.Item>
  [31m[Line 99][0m [[36mJSX Plain Text[0m] Found: "[1mString[][0m"
     [33m→[0m <Select.Item value="string">[1m[31mString[][0m</Select.Item>
  [31m[Line 100][0m [[36mJSX Plain Text[0m] Found: "[1mNumber[][0m"
     [33m→[0m <Select.Item value="number">[1m[31mNumber[][0m</Select.Item>
  [31m[Line 101][0m [[36mJSX Plain Text[0m] Found: "[1mBoolean[][0m"
     [33m→[0m <Select.Item value="boolean">[1m[31mBoolean[][0m</Select.Item>
  [31m[Line 102][0m [[36mJSX Plain Text[0m] Found: "[1mObject[][0m"
     [33m→[0m <Select.Item value="object">[1m[31mObject[][0m</Select.Item>
  [31m[Line 115][0m [[36mJS/TS String Literal[0m] Found: "[1mRequired[0m"
     [33m→[0m {property.required ? '[1m[31mRequired[0m' : 'Optional'}
  [31m[Line 115][0m [[36mJS/TS String Literal[0m] Found: "[1mOptional[0m"
     [33m→[0m {property.required ? 'Required' : '[1m[31mOptional[0m'}
  [31m[Line 147][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd child property[0m"
     [33m→[0m title="[1m[31mAdd child property[0m"
  [31m[Line 180][0m [[36mJSX Plain Text[0m] Found: "[1mArray Item Schema:[0m"
     [33m→[0m <div className="text-xs font-medium">[1m[31mArray Item Schema:[0m</div>
  [31m[Line 209][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Array Item Property[0m"
     [33m→[0m <IconPlus className="mr-1" />
  [31m[Line 220][0m [[36mJS/TS String Literal[0m] Found: "[1mIncomingWebhookJSONPropertyEditor[0m"
     [33m→[0m '[1m[31mIncomingWebhookJSONPropertyEditor[0m';

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/triggers/webhooks/components/IncomingWebhookPayloadSchemaGenerator.tsx[0m
  [31m[Line 31][0m [[36mJSX Plain Text[0m] Found: "[1mPayload Schema Validation[0m"
     [33m→[0m <h3 className="font-medium">[1m[31mPayload Schema Validation[0m</h3>
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mDefine required properties and data types.[0m"
     [33m→[0m <p className="text-sm">[1m[31mDefine required properties and data types.[0m</p>
  [31m[Line 38][0m [[36mJSX Plain Text[0m] Found: "[1mRequired Properties[0m"
     [33m→[0m <h4 className="font-medium text-sm">[1m[31mRequired Properties[0m</h4>
  [31m[Line 56][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Root Property[0m"
     [33m→[0m <IconPlus className="mr-1" />
  [31m[Line 87][0m [[36mJSX Plain Text[0m] Found: "[1mExpected Payload Structure[0m"
     [33m→[0m <p className="font-medium mb-1">[1m[31mExpected Payload Structure[0m</p>
  [31m[Line 88][0m [[36mJSX Plain Text[0m] Found: "[1mUpdates in real-time as you edit.[0m"
     [33m→[0m <p className="text-xs">[1m[31mUpdates in real-time as you edit.[0m</p>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/triggers/webhooks/components/IncomingWebhookPayloadSchemaSheet.tsx[0m
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1mEdit Payload Schema[0m"
     [33m→[0m <IconCode className="size-4" /> [1m[31mEdit Payload Schema[0m
  [31m[Line 22][0m [[36mJSX Plain Text[0m] Found: "[1mPayload Schema Builder[0m"
     [33m→[0m <Sheet.Title>[1m[31mPayload Schema Builder[0m</Sheet.Title>
  [31m[Line 23][0m [[36mJSX Plain Text[0m] Found: "[1mDefine required properties and data types for incoming payloads.[0m"
     [33m→[0m <Sheet.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/nodes/triggers/webhooks/components/IncomingWebhookSettingsField.tsx[0m
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1mMax Retries[0m"
     [33m→[0m <Form.Label>[1m[31mMax Retries[0m</Form.Label>
  [31m[Line 26][0m [[36mJSX Plain Text[0m] Found: "[1mTimeout (seconds)[0m"
     [33m→[0m <Form.Label>[1m[31mTimeout (seconds)[0m</Form.Label>
  [31m[Line 36][0m [[36mJSX Plain Text[0m] Found: "[1mSecret[0m"
     [33m→[0m <Form.Label>[1m[31mSecret[0m</Form.Label>
  [31m[Line 46][0m [[36mJSX Plain Text[0m] Found: "[1mBearar Token[0m"
     [33m→[0m <Form.Label>[1m[31mBearar Token[0m</Form.Label>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/AutomationBuilderSecondarySidebar.tsx[0m
  [31m[Line 10][0m [[36mJSX Plain Text[0m] Found: "[1mVariables[0m"
     [33m→[0m <h3 className="text-base font-semibold">[1m[31mVariables[0m</h3>
  [31m[Line 13][0m [[36mJSX Plain Text[0m] Found: "[1mOutput variables panel will live here.[0m"
     [33m→[0m <p className="text-sm text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/AutomationBuilderSecondarySidebarToggle.tsx[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mHide variables panel[0m"
     [33m→[0m ? '[1m[31mHide variables panel[0m'
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mOpen variables panel[0m"
     [33m→[0m : '[1m[31mOpen variables panel[0m'
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mHide variables panel[0m"
     [33m→[0m ? '[1m[31mHide variables panel[0m'
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mOpen variables panel[0m"
     [33m→[0m : '[1m[31mOpen variables panel[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/AutomationBuilderSidebar.tsx[0m
  [31m[Line 72][0m [[36mJS/TS String Literal[0m] Found: "[1mw-full  sm:w-fit sm:min-w-md sm:max-w-4xl[0m"
     [33m→[0m ? '[1m[31mw-full  sm:w-fit sm:min-w-md sm:max-w-4xl[0m'
  [31m[Line 73][0m [[36mJS/TS String Literal[0m] Found: "[1mw-full  sm:w-fit sm:min-w-80 sm:max-w-2xl[0m"
     [33m→[0m : '[1m[31mw-full  sm:w-fit sm:min-w-80 sm:max-w-2xl[0m';

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/content/action/AutomationActionContentSidebar.tsx[0m
  [31m[Line 24][0m [[36mJSX Plain Text[0m] Found: "[1mSomething went wrong[0m"
     [33m→[0m return <Card.Content>[1m[31mSomething went wrong[0m</Card.Content>;
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mForm is not configured[0m"
     [33m→[0m title: '[1m[31mForm is not configured[0m',
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease configure the action form before saving[0m"
     [33m→[0m description: '[1m[31mPlease configure the action form before saving[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/content/action/AutomationActionTargetSelector.tsx[0m
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mSelect target[0m"
     [33m→[0m <Form.Label>[1m[31mSelect target[0m</Form.Label>
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect target type[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect target type[0m" />
  [31m[Line 51][0m [[36mJSX Plain Text[0m] Found: "[1mSelect which action or trigger to use as the target.[0m"
     [33m→[0m <Form.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/content/action/AutomationCoreActionSidebarContent.tsx[0m
  [31m[Line 27][0m [[36mJSX Plain Text[0m] Found: "[1mUnknown action type:[0m"
     [33m→[0m <Card.Content>[1m[31mUnknown action type:[0m {currentAction.type}</Card.Content>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/content/trigger/components/AutomationDefaultTriggerHeader.tsx[0m
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mEvery records[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mEvery records[0m" />
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mEvery records[0m"
     [33m→[0m <Select.Item value="every">[1m[31mEvery records[0m</Select.Item>
  [31m[Line 33][0m [[36mJSX Plain Text[0m] Found: "[1mNew records only[0m"
     [33m→[0m <Select.Item value="new">[1m[31mNew records only[0m</Select.Item>
  [31m[Line 34][0m [[36mJSX Plain Text[0m] Found: "[1mExisting records only[0m"
     [33m→[0m <Select.Item value="existing">[1m[31mExisting records only[0m</Select.Item>
  [31m[Line 81][0m [[36mJSX Plain Text[0m] Found: "[1mNo re-enrollment rules found. Please add a re-enrollment rule to the
        segment.[0m"
     [33m→[0m <p>
  [31m[Line 90][0m [[36mJSX Plain Text[0m] Found: "[1mRe-enrollment[0m"
     [33m→[0m <b>[1m[31mRe-enrollment[0m</b>
  [31m[Line 91][0m [[36mJSX Plain Text[0m] Found: "[1mWhen a record is updated, the automation will run again.[0m"
     [33m→[0m <p className="text-sm text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/content/trigger/components/AutomationTriggerContentSidebar.tsx[0m
  [31m[Line 10][0m [[36mJS/TS String Literal[0m] Found: "[1mh-full flex flex-col[0m"
     [33m→[0m const containerClasses = '[1m[31mh-full flex flex-col[0m';

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/content/trigger/components/CustomCoreTriggerContent.tsx[0m
  [31m[Line 29][0m [[36mTemplate Literal String[0m] Found: "[1mSave[0m"
     [33m→[0m aria-label={`[1m[31mSave[0m ${
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mcore trigger[0m"
     [33m→[0m activeNode?.type || '[1m[31mcore trigger[0m'
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mSave Configuration[0m"
     [33m→[0m >
  [31m[Line 44][0m [[36mTemplate Literal String[0m] Found: "[1mConfigure[0m"
     [33m→[0m aria-label={`[1m[31mConfigure[0m ${activeNode?.type || 'core trigger'} settings`}
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mcore trigger[0m"
     [33m→[0m aria-label={`Configure ${activeNode?.type || '[1m[31mcore trigger[0m'} settings`}

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/content/trigger/components/CustomRemoteTriggerContent.tsx[0m
  [31m[Line 32][0m [[36mTemplate Literal String[0m] Found: "[1mSave[0m"
     [33m→[0m aria-label={`[1m[31mSave[0m ${
  [31m[Line 35][0m [[36mJSX Plain Text[0m] Found: "[1mSave Configuration[0m"
     [33m→[0m >
  [31m[Line 55][0m [[36mTemplate Literal String[0m] Found: "[1mConfigure[0m"
     [33m→[0m aria-label={`[1m[31mConfigure[0m ${pluginName} ${moduleName} trigger`}

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/content/trigger/wrapper/TriggerContentLoadingFallback.tsx[0m
  [31m[Line 10][0m [[36mJS/TS String Literal[0m] Found: "[1mLoading trigger configuration[0m"
     [33m→[0m aria-label="[1m[31mLoading trigger configuration[0m"
  [31m[Line 13][0m [[36mJSX Plain Text[0m] Found: "[1mLoading...[0m"
     [33m→[0m <span className="sr-only">[1m[31mLoading...[0m</span>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/library/AutomationNodeLibrarySidebar.tsx[0m
  [31m[Line 73][0m [[36mJS/TS String Literal[0m] Found: "[1mm-0 rounded-md bg-background shadow-xs[0m"
     [33m→[0m wrapperClassName="[1m[31mm-0 rounded-md bg-background shadow-xs[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/library/NodeLibraryRow.tsx[0m
  [31m[Line 42][0m [[36mTemplate Literal String[0m] Found: "[1m<div
      style="
        display:flex;
        align-items:center;
        gap:10px;
        padding:10px 12px;
        border-radius:12px;
        border:1px solid[0m"
     [33m→[0m ghost.innerHTML = `
  [31m[Line 42][0m [[36mTemplate Literal String[0m] Found: "[1m;
        background:var(--background, rgba(255,255,255,0.96));
        color:var(--foreground, rgb(15,23,42));
        box-shadow:0 16px 40px rgba(15,23,42,0.16);
        min-width:160px;
        font-family:inherit;
      "
    >
      <div
        style="
          display:flex;
          align-items:center;
          justify-content:center;
          width:32px;
          height:32px;
          border-radius:10px;
          background:[0m"
     [33m→[0m ghost.innerHTML = `
  [31m[Line 42][0m [[36mTemplate Literal String[0m] Found: "[1m;
          color:[0m"
     [33m→[0m ghost.innerHTML = `
  [31m[Line 42][0m [[36mTemplate Literal String[0m] Found: "[1m</div>
      <div style="display:flex;flex-direction:column;min-width:0;">
        <div style="font-size:11px;line-height:1;text-transform:uppercase;opacity:.6;">[0m"
     [33m→[0m ghost.innerHTML = `
  [31m[Line 42][0m [[36mTemplate Literal String[0m] Found: "[1m</div>
        <div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">[0m"
     [33m→[0m ghost.innerHTML = `
  [31m[Line 42][0m [[36mTemplate Literal String[0m] Found: "[1m</div>
      </div>
    </div>[0m"
     [33m→[0m ghost.innerHTML = `

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/library/WorkflowsNodeLibrary.tsx[0m
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mHello World[0m"
     [33m→[0m description: '[1m[31mHello World[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/output-variables/AutomationVariableBrowser.tsx[0m
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mSelected Node[0m"
     [33m→[0m sourceSectionTitle = '[1m[31mSelected Node[0m',
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mVariable Sources[0m"
     [33m→[0m <AutomationVariableBrowserSection title="[1m[31mVariable Sources[0m">
  [31m[Line 92][0m [[36mJS/TS String Literal[0m] Found: "[1mSearch variables...[0m"
     [33m→[0m placeholder="[1m[31mSearch variables...[0m"
  [31m[Line 96][0m [[36mJS/TS String Literal[0m] Found: "[1mOutput Variables[0m"
     [33m→[0m <AutomationVariableBrowserSection title="[1m[31mOutput Variables[0m">
  [31m[Line 108][0m [[36mJS/TS String Literal[0m] Found: "[1mCustom Properties[0m"
     [33m→[0m <AutomationVariableBrowserSection title="[1m[31mCustom Properties[0m">
  [31m[Line 124][0m [[36mJS/TS String Literal[0m] Found: "[1mNo property sources available.[0m"
     [33m→[0m <AutomationVariableBrowserEmptyState text="[1m[31mNo property sources available.[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/output-variables/components/AutomationOutputPropertySourceFields.tsx[0m
  [31m[Line 45][0m [[36mJSX Plain Text[0m] Found: "[1mLoading property fields...[0m"
     [33m→[0m <Spinner size="sm" />
  [31m[Line 81][0m [[36mJS/TS String Literal[0m] Found: "[1mNo matching property fields.[0m"
     [33m→[0m ? '[1m[31mNo matching property fields.[0m'
  [31m[Line 82][0m [[36mJS/TS String Literal[0m] Found: "[1mNo property fields available.[0m"
     [33m→[0m : '[1m[31mNo property fields available.[0m'

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/output-variables/components/AutomationOutputVariableList.tsx[0m
  [31m[Line 33][0m [[36mJSX Plain Text[0m] Found: "[1mLoading outputs...[0m"
     [33m→[0m <Spinner size="sm" />
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mNo matching output variables.[0m"
     [33m→[0m ? '[1m[31mNo matching output variables.[0m'
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mNo output variables available.[0m"
     [33m→[0m : '[1m[31mNo output variables available.[0m'
  [31m[Line 71][0m [[36mJSX Plain Text[0m] Found: "[1mReference[0m"
     [33m→[0m <Badge variant="secondary">[1m[31mReference[0m</Badge>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/components/output-variables/components/AutomationVariableSourceNodeCard.tsx[0m
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mTrigger[0m"
     [33m→[0m {node.nodeType === AutomationNodeType.[1m[31mTrigger[0m ? 'Trigger' : 'Action'}
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mAction[0m"
     [33m→[0m {node.nodeType === AutomationNodeType.Trigger ? 'Trigger' : '[1m[31mAction[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/hooks/useAutomationActionContentSidebar.ts[0m
  [31m[Line 84][0m [[36mJS/TS String Literal[0m] Found: "[1mAction configuration added successfully.[0m"
     [33m→[0m title: '[1m[31mAction configuration added successfully.[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/hooks/useAutomationBuilderSecondarySidebar.ts[0m
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect a source node[0m"
     [33m→[0m title: '[1m[31mSelect a source node[0m',
  [31m[Line 43][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose a trigger or previous action on the canvas to browse its output variables here.[0m"
     [33m→[0m '[1m[31mChoose a trigger or previous action on the canvas to browse its output variables here.[0m',
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mCurrent node outputs are unavailable here[0m"
     [33m→[0m title: '[1m[31mCurrent node outputs are unavailable here[0m',
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mThis node cannot reference its own outputs. Select a different trigger or previous action to insert variables.[0m"
     [33m→[0m '[1m[31mThis node cannot reference its own outputs. Select a different trigger or previous action to insert variables.[0m',
  [31m[Line 57][0m [[36mJS/TS String Literal[0m] Found: "[1mUnsupported node selection[0m"
     [33m→[0m title: '[1m[31mUnsupported node selection[0m',
  [31m[Line 59][0m [[36mJS/TS String Literal[0m] Found: "[1mOnly trigger and action nodes can expose variables in this panel.[0m"
     [33m→[0m '[1m[31mOnly trigger and action nodes can expose variables in this panel.[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/hooks/useCoreCustomTriggerContent.ts[0m
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mAction configuration added successfully.[0m"
     [33m→[0m title: '[1m[31mAction configuration added successfully.[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/builder/sidebar/hooks/useCustomTriggerContent.ts[0m
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mTrigger configuration added successfully.[0m"
     [33m→[0m title: '[1m[31mTrigger configuration added successfully.[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/common/AutomationConfigFormFooter.tsx[0m
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mSave Configuration[0m"
     [33m→[0m label = '[1m[31mSave Configuration[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/common/AutomationSegmentForm.tsx[0m
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mTrigger[0m"
     [33m→[0m formName: '[1m[31mTrigger[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/common/ErrorState.tsx[0m
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mAn error occurred[0m"
     [33m→[0m title = '[1m[31mAn error occurred[0m',
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mThe workflow execution failed because one of the required parameters is missing or invalid. Please check your configuration and try again.[0m"
     [33m→[0m errorDetails = '[1m[31mThe workflow execution failed because one of the required parameters is missing or invalid. Please check your configuration and try again.[0m',
  [31m[Line 45][0m [[36mJSX Plain Text[0m] Found: "[1mDismiss[0m"
     [33m→[0m <span className="sr-only">[1m[31mDismiss[0m</span>
  [31m[Line 72][0m [[36mJS/TS String Literal[0m] Found: "[1mHide details[0m"
     [33m→[0m {isOpen ? '[1m[31mHide details[0m' : 'Show details'}
  [31m[Line 72][0m [[36mJS/TS String Literal[0m] Found: "[1mShow details[0m"
     [33m→[0m {isOpen ? 'Hide details' : '[1m[31mShow details[0m'}
  [31m[Line 98][0m [[36mJSX Plain Text[0m] Found: "[1mTry again[0m"
     [33m→[0m <IconRefresh className="h-3.5 w-3.5 mr-1.5" />

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/common/RenderPluginsComponentWrapper.tsx[0m
  [31m[Line 30][0m [[36mTemplate Literal String[0m] Found: "[1mPlugin[0m"
     [33m→[0m {`[1m[31mPlugin[0m ${pluginName} disabled`}

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/list/AutomationColumns.tsx[0m
  [31m[Line 50][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the "[0m${cell.row.original.name}" automation?`,
  [31m[Line 50][0m [[36mTemplate Literal String[0m] Found: "[1m" automation?[0m"
     [33m→[0m message: `Are you sure you want to delete the "${cell.row.original.name}[1m[31m" automation?[0m`,
  [31m[Line 55][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 62][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 64][0m [[36mJS/TS String Literal[0m] Found: "[1mAutomations deleted successfully[0m"
     [33m→[0m description: '[1m[31mAutomations deleted successfully[0m',
  [31m[Line 136][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 143][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 145][0m [[36mJS/TS String Literal[0m] Found: "[1mAutomation updated successfully[0m"
     [33m→[0m description: '[1m[31mAutomation updated successfully[0m',
  [31m[Line 230][0m [[36mJS/TS String Literal[0m] Found: "[1mAutomation[0m"
     [33m→[0m __typename: '[1m[31mAutomation[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/list/AutomationRecordTableCommandBar.tsx[0m
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mAutomation[0m"
     [33m→[0m __typename: '[1m[31mAutomation[0m',
  [31m[Line 59][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/list/AutomationRecordTableStatusInlineCell.tsx[0m
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mAutomation status updated successfully[0m"
     [33m→[0m description: '[1m[31mAutomation status updated successfully[0m',
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/list/AutomationRemoveButtonCommandBar.tsx[0m
  [31m[Line 20][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${automationIds.length} selected automations?`,
  [31m[Line 20][0m [[36mTemplate Literal String[0m] Found: "[1mselected automations?[0m"
     [33m→[0m message: `Are you sure you want to delete the ${automationIds.length} [1m[31mselected automations?[0m`,
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mAutomations deleted successfully[0m"
     [33m→[0m description: '[1m[31mAutomations deleted successfully[0m',
  [31m[Line 50][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m {loading ? <Spinner /> : <IconTrash />}

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/list/filters/AutomationRecordTableFilterMenu.tsx[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m placeholder="[1m[31mFilter[0m"
  [31m[Line 24][0m [[36mJSX Plain Text[0m] Found: "[1mSearch[0m"
     [33m→[0m <Icon[1m[31mSearch[0m />
  [31m[Line 28][0m [[36mJSX Plain Text[0m] Found: "[1mStatus[0m"
     [33m→[0m <IconProgressCheck />
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mCreated At[0m"
     [33m→[0m <IconCalendar />
  [31m[Line 36][0m [[36mJSX Plain Text[0m] Found: "[1mCreated By[0m"
     [33m→[0m <IconUser />
  [31m[Line 40][0m [[36mJSX Plain Text[0m] Found: "[1mUpdated At[0m"
     [33m→[0m <IconCalendar />
  [31m[Line 44][0m [[36mJSX Plain Text[0m] Found: "[1mUpdated By[0m"
     [33m→[0m <IconUserUp />
  [31m[Line 48][0m [[36mJSX Plain Text[0m] Found: "[1mTrigger Types[0m"
     [33m→[0m <IconPointerBolt />
  [31m[Line 52][0m [[36mJSX Plain Text[0m] Found: "[1mAction Types[0m"
     [33m→[0m <IconBolt />
  [31m[Line 56][0m [[36mJSX Plain Text[0m] Found: "[1mTags[0m"
     [33m→[0m <Icon[1m[31mTags[0m />

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/list/filters/AutomationRecordTableFilterViews.tsx[0m
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mSearch[0m"
     [33m→[0m placeholder="[1m[31mSearch[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/list/filters/AutomationRecordTableNodeTypeFilter.tsx[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mSearch[0m"
     [33m→[0m <Command.Input placeholder="[1m[31mSearch[0m" focusOnMount />

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/AutomationSettingsSidebar.tsx[0m
  [31m[Line 17][0m [[36mJSX Plain Text[0m] Found: "[1mAgents[0m"
     [33m→[0m <Link to={`/settings/automations/agents`}>[1m[31mAgents[0m</Link>
  [31m[Line 27][0m [[36mJSX Plain Text[0m] Found: "[1mEmail Templates[0m"
     [33m→[0m <Link to={`/settings/automations/email-templates`}>
  [31m[Line 37][0m [[36mJSX Plain Text[0m] Found: "[1mBots[0m"
     [33m→[0m <Link to={`/settings/automations/bots`}>[1m[31mBots[0m</Link>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/AiAgentContextFileEditorDialog.tsx[0m
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to load context file[0m"
     [33m→[0m throw new Error(text || '[1m[31mFailed to load context file[0m');
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to upload context file[0m"
     [33m→[0m throw new Error(key || '[1m[31mFailed to upload context file[0m');
  [31m[Line 121][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to load context file[0m"
     [33m→[0m title: '[1m[31mFailed to load context file[0m',
  [31m[Line 123][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease try again.[0m"
     [33m→[0m error instanceof Error ? error.message : '[1m[31mPlease try again.[0m',
  [31m[Line 171][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to save context file[0m"
     [33m→[0m title: '[1m[31mFailed to save context file[0m',
  [31m[Line 173][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease try again.[0m"
     [33m→[0m error instanceof Error ? error.message : '[1m[31mPlease try again.[0m',
  [31m[Line 186][0m [[36mJSX Plain Text[0m] Found: "[1mEdit Context File[0m"
     [33m→[0m <Dialog.Title>[1m[31mEdit Context File[0m</Dialog.Title>
  [31m[Line 187][0m [[36mJSX Plain Text[0m] Found: "[1mEdit this context file, rename it, and save a new version.[0m"
     [33m→[0m <Dialog.Description className="text-sm text-muted-foreground">
  [31m[Line 207][0m [[36mJSX Plain Text[0m] Found: "[1mFile Name[0m"
     [33m→[0m <h3 className="text-sm font-medium">[1m[31mFile Name[0m</h3>
  [31m[Line 208][0m [[36mJSX Plain Text[0m] Found: "[1mSaving creates a new uploaded file and keeps the previous
                    one in version history.[0m"
     [33m→[0m <p className="text-xs text-muted-foreground">
  [31m[Line 214][0m [[36mJSX Plain Text[0m] Found: "[1mprevious
                  versions[0m"
     [33m→[0m {getContextFileVersionCount(file || undefined)} previous
  [31m[Line 232][0m [[36mJSX Plain Text[0m] Found: "[1mOnly the file name changes. The extension stays fixed.[0m"
     [33m→[0m <p className="text-xs text-muted-foreground">
  [31m[Line 241][0m [[36mJSX Plain Text[0m] Found: "[1mLoading markdown...[0m"
     [33m→[0m <IconLoader2 className="mr-2 size-4 animate-spin" />
  [31m[Line 249][0m [[36mJS/TS String Literal[0m] Found: "[1mWrite markdown context here...[0m"
     [33m→[0m placeholder="[1m[31mWrite markdown context here...[0m"
  [31m[Line 261][0m [[36mJSX Plain Text[0m] Found: "[1mCurrent File[0m"
     [33m→[0m <h3 className="text-sm font-medium">[1m[31mCurrent File[0m</h3>
  [31m[Line 272][0m [[36mJS/TS String Literal[0m] Found: "[1mUntitled[0m"
     [33m→[0m {file?.name || '[1m[31mUntitled[0m'}
  [31m[Line 278][0m [[36mJSX Plain Text[0m] Found: "[1mAdded[0m"
     [33m→[0m <div className="mt-1 text-xs text-muted-foreground">
  [31m[Line 288][0m [[36mJSX Plain Text[0m] Found: "[1mVersion History[0m"
     [33m→[0m <h3 className="text-sm font-medium">[1m[31mVersion History[0m</h3>
  [31m[Line 311][0m [[36mJSX Plain Text[0m] Found: "[1mSaved[0m"
     [33m→[0m <div className="mt-1 text-xs text-muted-foreground">
  [31m[Line 320][0m [[36mJSX Plain Text[0m] Found: "[1mNo previous versions yet. The first save from this dialog
                      will keep the current file as history.[0m"
     [33m→[0m <div className="rounded-xl border border-dashed bg-background px-4 py-6 text-sm text-muted-foreground">
  [31m[Line 337][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m >
  [31m[Line 347][0m [[36mJSX Plain Text[0m] Found: "[1mSaving...[0m"
     [33m→[0m <IconLoader2 className="mr-2 size-4 animate-spin" />
  [31m[Line 351][0m [[36mJS/TS String Literal[0m] Found: "[1mSave[0m"
     [33m→[0m '[1m[31mSave[0m'

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/AutomationAiAgentDetail.tsx[0m
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid form[0m"
     [33m→[0m title: '[1m[31mInvalid form[0m',
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease review the highlighted fields.[0m"
     [33m→[0m description: '[1m[31mPlease review the highlighted fields.[0m',
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mEdit AI Agent[0m"
     [33m→[0m title={isEditing ? '[1m[31mEdit AI Agent[0m' : 'Create AI Agent'}
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate AI Agent[0m"
     [33m→[0m title={isEditing ? 'Edit AI Agent' : '[1m[31mCreate AI Agent[0m'}
  [31m[Line 63][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdate your AI agent[0m"
     [33m→[0m ? '[1m[31mUpdate your AI agent[0m'
  [31m[Line 64][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate a new AI agent for automation[0m"
     [33m→[0m : '[1m[31mCreate a new AI agent for automation[0m'
  [31m[Line 69][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m <IconDeviceFloppy className="size-4 " />
  [31m[Line 78][0m [[36mJSX Plain Text[0m] Found: "[1mGeneral[0m"
     [33m→[0m <Tabs.Trigger className="w-1/4" value="general">
  [31m[Line 81][0m [[36mJSX Plain Text[0m] Found: "[1mConnection[0m"
     [33m→[0m <Tabs.Trigger className="w-1/4" value="connection">
  [31m[Line 84][0m [[36mJSX Plain Text[0m] Found: "[1mContext[0m"
     [33m→[0m <Tabs.Trigger className="w-1/4" value="context">
  [31m[Line 87][0m [[36mJSX Plain Text[0m] Found: "[1mHealth[0m"
     [33m→[0m <Tabs.Trigger className="w-1/4" value="health">

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/AutomationAiAgentMoreColumn.tsx[0m
  [31m[Line 28][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m /> Edit

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/AutomationAiAgentRecordTable.tsx[0m
  [31m[Line 23][0m [[36mJSX Plain Text[0m] Found: "[1mConfigured agents[0m"
     [33m→[0m <h2 className="text-sm font-medium">[1m[31mConfigured agents[0m</h2>
  [31m[Line 24][0m [[36mJSX Plain Text[0m] Found: "[1mPick an existing agent for editing or create a new one with the same
            provider contract.[0m"
     [33m→[0m <p className="text-sm text-muted-foreground">
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mCreate Agent[0m"
     [33m→[0m <IconPlus className="size-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/AutomationAiAgentTableEmptyState.tsx[0m
  [31m[Line 19][0m [[36mJSX Plain Text[0m] Found: "[1mNo AI agents found[0m"
     [33m→[0m <h3 className="text-lg font-semibold">[1m[31mNo AI agents found[0m</h3>
  [31m[Line 20][0m [[36mJSX Plain Text[0m] Found: "[1mCreate your first AI agent to start automating conversations with
            your customers.[0m"
     [33m→[0m <p className="text-muted-foreground text-sm">
  [31m[Line 27][0m [[36mJSX Plain Text[0m] Found: "[1mCreate First Agent[0m"
     [33m→[0m <IconPlus className="size-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/AutomationAiAgentsList.tsx[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mAI Agents[0m"
     [33m→[0m title="[1m[31mAI Agents[0m"
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mConfigure credential-backed AI agents, attach context files, and validate provider readiness before wiring them into automation actions.[0m"
     [33m→[0m description="[1m[31mConfigure credential-backed AI agents, attach context files, and validate provider readiness before wiring them into automation actions.[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/DropFilesZone.tsx[0m
  [31m[Line 87][0m [[36mJS/TS String Literal[0m] Found: "[1mUnsupported file format[0m"
     [33m→[0m title: '[1m[31mUnsupported file format[0m',
  [31m[Line 88][0m [[36mTemplate Literal String[0m] Found: "[1m" must be MD, MARKDOWN, or TXT.[0m"
     [33m→[0m description: `"${file.name}[1m[31m" must be MD, MARKDOWN, or TXT.[0m`,
  [31m[Line 96][0m [[36mJS/TS String Literal[0m] Found: "[1mContext file is too large[0m"
     [33m→[0m title: '[1m[31mContext file is too large[0m',
  [31m[Line 97][0m [[36mTemplate Literal String[0m] Found: "[1m" exceeds[0m"
     [33m→[0m description: `"${file.name}[1m[31m" exceeds[0m ${formatBytes(maxSingleFileBytes)}.`,
  [31m[Line 105][0m [[36mJS/TS String Literal[0m] Found: "[1mToo many context files[0m"
     [33m→[0m title: '[1m[31mToo many context files[0m',
  [31m[Line 106][0m [[36mTemplate Literal String[0m] Found: "[1mYou can attach up to[0m"
     [33m→[0m description: `[1m[31mYou can attach up to[0m ${maxFiles} files.`,
  [31m[Line 119][0m [[36mJS/TS String Literal[0m] Found: "[1mCombined context is too large[0m"
     [33m→[0m title: '[1m[31mCombined context is too large[0m',
  [31m[Line 120][0m [[36mTemplate Literal String[0m] Found: "[1mKeep total context under[0m"
     [33m→[0m description: `[1m[31mKeep total context under[0m ${formatBytes(maxTotalContextBytes)}.`,
  [31m[Line 257][0m [[36mJSX Plain Text[0m] Found: "[1mUpload Context Files[0m"
     [33m→[0m <h3 className="text-lg font-semibold">[1m[31mUpload Context Files[0m</h3>
  [31m[Line 258][0m [[36mJSX Plain Text[0m] Found: "[1mDrag markdown or text files here, or click to browse[0m"
     [33m→[0m <p className="text-sm text-muted-foreground">
  [31m[Line 276][0m [[36mJS/TS String Literal[0m] Found: "[1mUploading...[0m"
     [33m→[0m {isLoading ? '[1m[31mUploading...[0m' : 'Choose Files'}
  [31m[Line 276][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose Files[0m"
     [33m→[0m {isLoading ? 'Uploading...' : '[1m[31mChoose Files[0m'}
  [31m[Line 278][0m [[36mJSX Plain Text[0m] Found: "[1mSupported formats: MD, MARKDOWN, TXT[0m"
     [33m→[0m <p className="text-xs uppercase tracking-wide text-muted-foreground">
  [31m[Line 310][0m [[36mJS/TS String Literal[0m] Found: "[1mUploading files...[0m"
     [33m→[0m ? '[1m[31mUploading files...[0m'
  [31m[Line 311][0m [[36mJS/TS String Literal[0m] Found: "[1mDrop more files or click to add[0m"
     [33m→[0m : '[1m[31mDrop more files or click to add[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/FilesList.tsx[0m
  [31m[Line 108][0m [[36mJSX Plain Text[0m] Found: "[1mAdded[0m"
     [33m→[0m <span>
  [31m[Line 157][0m [[36mTemplate Literal String[0m] Found: "[1mReindex[0m"
     [33m→[0m aria-label={`[1m[31mReindex[0m ${file.name}`}
  [31m[Line 168][0m [[36mJSX Plain Text[0m] Found: "[1mReindex knowledge[0m"
     [33m→[0m <Tooltip.Content>[1m[31mReindex knowledge[0m</Tooltip.Content>
  [31m[Line 179][0m [[36mTemplate Literal String[0m] Found: "[1mRemove[0m"
     [33m→[0m aria-label={`[1m[31mRemove[0m ${file.name}`}

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/automationAiAgentColumns.tsx[0m
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mName[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mName[0m" />,
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mProvider[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mProvider[0m" />,
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mModel[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mModel[0m" />,
  [31m[Line 55][0m [[36mJS/TS String Literal[0m] Found: "[1mModel not set[0m"
     [33m→[0m title={(cell.getValue() as string) || '[1m[31mModel not set[0m'}
  [31m[Line 57][0m [[36mJS/TS String Literal[0m] Found: "[1mModel not set[0m"
     [33m→[0m {(cell.getValue() as string) || '[1m[31mModel not set[0m'}
  [31m[Line 65][0m [[36mJS/TS String Literal[0m] Found: "[1mDescription[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mDescription[0m" />,
  [31m[Line 79][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mCreated[0m" />,

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/form/AiAgentContextForm.tsx[0m
  [31m[Line 44][0m [[36mJSX Plain Text[0m] Found: "[1mSystem Prompt[0m"
     [33m→[0m <Form.Label>[1m[31mSystem Prompt[0m</Form.Label>
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mYou are an automation AI bridge. Use the provided context, follow the requested output format, and never invent facts.[0m"
     [33m→[0m placeholder="[1m[31mYou are an automation AI bridge. Use the provided context, follow the requested output format, and never invent facts.[0m"
  [31m[Line 52][0m [[36mJSX Plain Text[0m] Found: "[1mDefine the runtime rules that every AI action should follow
                before user input and context files are injected.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 65][0m [[36mJSX Plain Text[0m] Found: "[1mContext Files[0m"
     [33m→[0m <h3 className="text-sm font-medium">[1m[31mContext Files[0m</h3>
  [31m[Line 66][0m [[36mJSX Plain Text[0m] Found: "[1mAttach markdown or plain text files that should be passed to the
              external AI provider as runtime knowledge.[0m"
     [33m→[0m <p className="text-sm text-muted-foreground">
  [31m[Line 70][0m [[36mJSX Plain Text[0m] Found: "[1mLimits: up to[0m"
     [33m→[0m <p className="text-xs text-muted-foreground">
  [31m[Line 72][0m [[36mJSX Plain Text[0m] Found: "[1mper file,[0m"
     [33m→[0m {formatBytes(AI_AGENT_UI_LIMITS.maxSingleFileBytes)} [1m[31mper file,[0m{' '}
  [31m[Line 119][0m [[36mJS/TS String Literal[0m] Found: "[1mReindex queued[0m"
     [33m→[0m title: '[1m[31mReindex queued[0m',
  [31m[Line 121][0m [[36mJS/TS String Literal[0m] Found: "[1mKnowledge chunks will refresh in the background.[0m"
     [33m→[0m '[1m[31mKnowledge chunks will refresh in the background.[0m',
  [31m[Line 126][0m [[36mJS/TS String Literal[0m] Found: "[1mCould not queue reindex[0m"
     [33m→[0m title: '[1m[31mCould not queue reindex[0m',
  [31m[Line 157][0m [[36mJSX Plain Text[0m] Found: "[1mKeep files focused and compact so health checks stay green,
                    prompts stay small, and the provider responds quickly.[0m"
     [33m→[0m <Form.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/form/AiAgentGeneralForm.tsx[0m
  [31m[Line 15][0m [[36mJSX Plain Text[0m] Found: "[1mName[0m"
     [33m→[0m <Form.Label>[1m[31mName[0m</Form.Label>
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mFacebook Order Router[0m"
     [33m→[0m placeholder="[1m[31mFacebook Order Router[0m"
  [31m[Line 23][0m [[36mJSX Plain Text[0m] Found: "[1mGive the agent a clear name so it is easy to pick inside
              automation actions.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 37][0m [[36mJSX Plain Text[0m] Found: "[1mDescription[0m"
     [33m→[0m <Form.Label>[1m[31mDescription[0m</Form.Label>
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mRoutes Facebook conversations, classifies intents, and extracts order attributes for downstream automation steps.[0m"
     [33m→[0m placeholder="[1m[31mRoutes Facebook conversations, classifies intents, and extracts order attributes for downstream automation steps.[0m"
  [31m[Line 45][0m [[36mJSX Plain Text[0m] Found: "[1mDescribe what this agent is meant to do for the team and for
              future automation builders.[0m"
     [33m→[0m <Form.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/form/AiAgentRuntimeForm.tsx[0m
  [31m[Line 27][0m [[36mJSX Plain Text[0m] Found: "[1mTemperature[0m"
     [33m→[0m <Form.Label>[1m[31mTemperature[0m</Form.Label>
  [31m[Line 40][0m [[36mJSX Plain Text[0m] Found: "[1mLower values keep routing and extraction more deterministic.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 53][0m [[36mJSX Plain Text[0m] Found: "[1mMax Tokens[0m"
     [33m→[0m <Form.Label>[1m[31mMax Tokens[0m</Form.Label>
  [31m[Line 65][0m [[36mJSX Plain Text[0m] Found: "[1mCaps the length of the AI response so automation steps stay fast.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 78][0m [[36mJSX Plain Text[0m] Found: "[1mTimeout (ms)[0m"
     [33m→[0m <Form.Label>[1m[31mTimeout (ms)[0m</Form.Label>
  [31m[Line 90][0m [[36mJSX Plain Text[0m] Found: "[1mThe automation waits for the provider until this timeout is
              reached.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 105][0m [[36mJS/TS String Literal[0m] Found: "[1mAgent Budget[0m"
     [33m→[0m title="[1m[31mAgent Budget[0m"
  [31m[Line 106][0m [[36mJS/TS String Literal[0m] Found: "[1mThese limits apply to every automation action that uses this agent.[0m"
     [33m→[0m description="[1m[31mThese limits apply to every automation action that uses this agent.[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/form/AutomationAiAgentHealthSection.tsx[0m
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mSchema[0m"
     [33m→[0m schema: '[1m[31mSchema[0m',
  [31m[Line 26][0m [[36mJS/TS String Literal[0m] Found: "[1mCredentials[0m"
     [33m→[0m credentials: '[1m[31mCredentials[0m',
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mContext Files[0m"
     [33m→[0m files: '[1m[31mContext Files[0m',
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mEndpoint[0m"
     [33m→[0m endpoint: '[1m[31mEndpoint[0m',
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mModel Access[0m"
     [33m→[0m model: '[1m[31mModel Access[0m',
  [31m[Line 85][0m [[36mJSX Plain Text[0m] Found: "[1mSave the agent first[0m"
     [33m→[0m <Alert.Title>[1m[31mSave the agent first[0m</Alert.Title>
  [31m[Line 86][0m [[36mJSX Plain Text[0m] Found: "[1mHealth checks become available after the agent has been created and an
          ID exists in the workspace.[0m"
     [33m→[0m <Alert.Description>
  [31m[Line 99][0m [[36mJSX Plain Text[0m] Found: "[1mProvider Health[0m"
     [33m→[0m <h3 className="text-sm font-medium">[1m[31mProvider Health[0m</h3>
  [31m[Line 102][0m [[36mJS/TS String Literal[0m] Found: "[1mReady[0m"
     [33m→[0m {health.ready ? '[1m[31mReady[0m' : 'Needs attention'}
  [31m[Line 102][0m [[36mJS/TS String Literal[0m] Found: "[1mNeeds attention[0m"
     [33m→[0m {health.ready ? 'Ready' : '[1m[31mNeeds attention[0m'}
  [31m[Line 106][0m [[36mJSX Plain Text[0m] Found: "[1mValidate schema, credentials, model access, and runtime context
            before wiring this agent into automation actions.[0m"
     [33m→[0m <p className="text-sm text-muted-foreground">
  [31m[Line 111][0m [[36mJSX Plain Text[0m] Found: "[1mLast checked[0m"
     [33m→[0m <div className="text-xs text-muted-foreground">
  [31m[Line 116][0m [[36mJS/TS String Literal[0m] Found: "[1mjust now[0m"
     [33m→[0m '[1m[31mjust now[0m'
  [31m[Line 127][0m [[36mJS/TS String Literal[0m] Found: "[1mChecking...[0m"
     [33m→[0m {loading ? '[1m[31mChecking...[0m' : 'Run health check'}
  [31m[Line 127][0m [[36mJS/TS String Literal[0m] Found: "[1mRun health check[0m"
     [33m→[0m {loading ? 'Checking...' : '[1m[31mRun health check[0m'}
  [31m[Line 144][0m [[36mJS/TS String Literal[0m] Found: "[1mThis agent is ready for provider calls.[0m"
     [33m→[0m ? '[1m[31mThis agent is ready for provider calls.[0m'
  [31m[Line 145][0m [[36mJS/TS String Literal[0m] Found: "[1mThis agent still needs attention before execution.[0m"
     [33m→[0m : '[1m[31mThis agent still needs attention before execution.[0m'}
  [31m[Line 149][0m [[36mTemplate Literal String[0m] Found: "[1merror(s) found.[0m"
     [33m→[0m ? `${health.errors.length} [1m[31merror(s) found.[0m`
  [31m[Line 150][0m [[36mTemplate Literal String[0m] Found: "[1mwarning(s) found.[0m"
     [33m→[0m : `${health.warnings?.length || 0} [1m[31mwarning(s) found.[0m`}
  [31m[Line 172][0m [[36mJSX Plain Text[0m] Found: "[1mWarnings[0m"
     [33m→[0m <h4 className="text-sm font-medium">[1m[31mWarnings[0m</h4>
  [31m[Line 185][0m [[36mJSX Plain Text[0m] Found: "[1mErrors[0m"
     [33m→[0m <h4 className="text-sm font-medium">[1m[31mErrors[0m</h4>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/form/connection/AiAgentModelSelect.tsx[0m
  [31m[Line 38][0m [[36mJSX Plain Text[0m] Found: "[1mModel[0m"
     [33m→[0m <Form.Label>[1m[31mModel[0m</Form.Label>
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect model[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect model[0m" />
  [31m[Line 56][0m [[36mJSX Plain Text[0m] Found: "[1mChoose the model this automation agent should use.[0m"
     [33m→[0m <Form.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/form/connection/AiAgentProviderSelect.tsx[0m
  [31m[Line 22][0m [[36mJSX Plain Text[0m] Found: "[1mProvider[0m"
     [33m→[0m <Form.Label>[1m[31mProvider[0m</Form.Label>
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect provider[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect provider[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/form/connection/AiAgentSecretField.tsx[0m
  [31m[Line 41][0m [[36mJSX Plain Text[0m] Found: "[1mReplace secret[0m"
     [33m→[0m >
  [31m[Line 67][0m [[36mJSX Plain Text[0m] Found: "[1mKeep existing secret[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/form/connection/providers/cloudflareAiGateway/CloudflareAiGatewayConnectionForm.tsx[0m
  [31m[Line 25][0m [[36mJSX Plain Text[0m] Found: "[1mGateway Mode[0m"
     [33m→[0m <Form.Label>[1m[31mGateway Mode[0m</Form.Label>
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect gateway mode[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect gateway mode[0m" />
  [31m[Line 35][0m [[36mJSX Plain Text[0m] Found: "[1mCompat[0m"
     [33m→[0m <Select.Item value="compat">[1m[31mCompat[0m</Select.Item>
  [31m[Line 36][0m [[36mJSX Plain Text[0m] Found: "[1mOpenAI Provider[0m"
     [33m→[0m <Select.Item value="openai-provider">
  [31m[Line 42][0m [[36mJSX Plain Text[0m] Found: "[1mCompat keeps one OpenAI-compatible endpoint while the model name
              selects the downstream provider.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 57][0m [[36mJSX Plain Text[0m] Found: "[1mAccount ID[0m"
     [33m→[0m <Form.Label>[1m[31mAccount ID[0m</Form.Label>
  [31m[Line 59][0m [[36mJS/TS String Literal[0m] Found: "[1mUse platform default[0m"
     [33m→[0m <Input placeholder="[1m[31mUse platform default[0m" {...field} />
  [31m[Line 61][0m [[36mJSX Plain Text[0m] Found: "[1mLeave empty to use the platform Cloudflare account.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 74][0m [[36mJSX Plain Text[0m] Found: "[1mGateway ID[0m"
     [33m→[0m <Form.Label>[1m[31mGateway ID[0m</Form.Label>
  [31m[Line 76][0m [[36mJS/TS String Literal[0m] Found: "[1mUse platform default[0m"
     [33m→[0m <Input placeholder="[1m[31mUse platform default[0m" {...field} />
  [31m[Line 78][0m [[36mJSX Plain Text[0m] Found: "[1mLeave empty to use the platform AI Gateway.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 89][0m [[36mJS/TS String Literal[0m] Found: "[1mGateway Token[0m"
     [33m→[0m label="[1m[31mGateway Token[0m"
  [31m[Line 90][0m [[36mJS/TS String Literal[0m] Found: "[1mUse platform gateway token[0m"
     [33m→[0m placeholder="[1m[31mUse platform gateway token[0m"
  [31m[Line 92][0m [[36mJS/TS String Literal[0m] Found: "[1mOptional Cloudflare AI Gateway token. Leave empty to use the platform token.[0m"
     [33m→[0m description="[1m[31mOptional Cloudflare AI Gateway token. Leave empty to use the platform token.[0m"
  [31m[Line 97][0m [[36mJS/TS String Literal[0m] Found: "[1mProvider API Key[0m"
     [33m→[0m label="[1m[31mProvider API Key[0m"
  [31m[Line 98][0m [[36mJS/TS String Literal[0m] Found: "[1mUse platform provider key[0m"
     [33m→[0m placeholder="[1m[31mUse platform provider key[0m"
  [31m[Line 100][0m [[36mJS/TS String Literal[0m] Found: "[1mOptional downstream provider key. Leave empty to use the platform-managed key.[0m"
     [33m→[0m description="[1m[31mOptional downstream provider key. Leave empty to use the platform-managed key.[0m"
  [31m[Line 108][0m [[36mJSX Plain Text[0m] Found: "[1mBase URL Override[0m"
     [33m→[0m <Form.Label>[1m[31mBase URL Override[0m</Form.Label>
  [31m[Line 111][0m [[36mJS/TS String Literal[0m] Found: "[1mGenerated from account, gateway, and mode[0m"
     [33m→[0m placeholder="[1m[31mGenerated from account, gateway, and mode[0m"
  [31m[Line 115][0m [[36mJSX Plain Text[0m] Found: "[1mOptional. When empty, the backend builds the Cloudflare Gateway
              URL from the account, gateway, and mode.[0m"
     [33m→[0m <Form.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/components/form/connection/providers/openai/OpenAiConnectionForm.tsx[0m
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mOpenAI-compatible[0m"
     [33m→[0m const providerLabel = AI_AGENT_PROVIDER_LABELS[provider] || '[1m[31mOpenAI-compatible[0m';
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mAPI Key[0m"
     [33m→[0m label="[1m[31mAPI Key[0m"
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mExisting secrets stay masked. Replace the key only when you want to rotate it.[0m"
     [33m→[0m description="[1m[31mExisting secrets stay masked. Replace the key only when you want to rotate it.[0m"
  [31m[Line 40][0m [[36mJSX Plain Text[0m] Found: "[1mBase URL[0m"
     [33m→[0m <Form.Label>[1m[31mBase URL[0m</Form.Label>
  [31m[Line 44][0m [[36mJSX Plain Text[0m] Found: "[1mDirect OpenAI-compatible endpoint for this[0m"
     [33m→[0m <Form.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/constants/automationAiAgents.ts[0m
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mCloudflare AI Gateway[0m"
     [33m→[0m label: '[1m[31mCloudflare AI Gateway[0m',
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mUse the platform-managed AI Gateway or override it.[0m"
     [33m→[0m description: '[1m[31mUse the platform-managed AI Gateway or override it.[0m',
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mGrok[0m"
     [33m→[0m label: '[1m[31mGrok[0m',
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mConnect xAI Grok with organization-owned credentials.[0m"
     [33m→[0m description: '[1m[31mConnect xAI Grok with organization-owned credentials.[0m',
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mKimi[0m"
     [33m→[0m label: '[1m[31mKimi[0m',
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mConnect Moonshot Kimi with organization-owned credentials.[0m"
     [33m→[0m description: '[1m[31mConnect Moonshot Kimi with organization-owned credentials.[0m',
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mKimi for Code[0m"
     [33m→[0m label: '[1m[31mKimi for Code[0m',
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mConnect Moonshot Kimi for Code with organization-owned credentials.[0m"
     [33m→[0m '[1m[31mConnect Moonshot Kimi for Code with organization-owned credentials.[0m',
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mOpenAI Direct[0m"
     [33m→[0m label: '[1m[31mOpenAI Direct[0m',
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mConnect OpenAI with organization-owned credentials.[0m"
     [33m→[0m description: '[1m[31mConnect OpenAI with organization-owned credentials.[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/constants/providers.ts[0m
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mCloudflare AI Gateway[0m"
     [33m→[0m 'cloudflare-ai-gateway': '[1m[31mCloudflare AI Gateway[0m',
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mGrok[0m"
     [33m→[0m grok: '[1m[31mGrok[0m',
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mKimi[0m"
     [33m→[0m kimi: '[1m[31mKimi[0m',
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mKimi Coding[0m"
     [33m→[0m 'kimi-code': '[1m[31mKimi Coding[0m',
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mOpenAI Direct[0m"
     [33m→[0m openai: '[1m[31mOpenAI Direct[0m',
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mUse the platform gateway by default, or override it with your own Cloudflare Gateway settings.[0m"
     [33m→[0m '[1m[31mUse the platform gateway by default, or override it with your own Cloudflare Gateway settings.[0m',
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mConnect directly to xAI Grok with organization-owned credentials.[0m"
     [33m→[0m grok: '[1m[31mConnect directly to xAI Grok with organization-owned credentials.[0m',
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mConnect directly to Moonshot Kimi with organization-owned credentials.[0m"
     [33m→[0m kimi: '[1m[31mConnect directly to Moonshot Kimi with organization-owned credentials.[0m',
  [31m[Line 26][0m [[36mJS/TS String Literal[0m] Found: "[1mConnect to Kimi Coding with Anthropic Messages-compatible credentials.[0m"
     [33m→[0m '[1m[31mConnect to Kimi Coding with Anthropic Messages-compatible credentials.[0m',
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mConnect directly to OpenAI with organization-owned credentials.[0m"
     [33m→[0m openai: '[1m[31mConnect directly to OpenAI with organization-owned credentials.[0m',
  [31m[Line 96][0m [[36mJS/TS String Literal[0m] Found: "[1mUse platform provider key[0m"
     [33m→[0m 'cloudflare-ai-gateway': '[1m[31mUse platform provider key[0m',
  [31m[Line 97][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter xAI API key[0m"
     [33m→[0m grok: '[1m[31mEnter xAI API key[0m',
  [31m[Line 98][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter Moonshot API key[0m"
     [33m→[0m kimi: '[1m[31mEnter Moonshot API key[0m',
  [31m[Line 99][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter Kimi Coding API key[0m"
     [33m→[0m 'kimi-code': '[1m[31mEnter Kimi Coding API key[0m',
  [31m[Line 100][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter OpenAI API key[0m"
     [33m→[0m openai: '[1m[31mEnter OpenAI API key[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/graphql/automationsAiAgents.ts[0m
  [31m[Line 3][0m [[36mTemplate Literal String[0m] Found: "[1m$name: String,
  $description: String,
  $connection: JSON,
  $runtime: JSON,
  $context: JSON[0m"
     [33m→[0m const commonAIAgentParams = `
  [31m[Line 11][0m [[36mTemplate Literal String[0m] Found: "[1mname: $name,
  description: $description,
  connection: $connection,
  runtime: $runtime,
  context: $context[0m"
     [33m→[0m const commonAIAgentParamsDef = `

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/hooks/useAiAgentDetail.ts[0m
  [31m[Line 66][0m [[36mJS/TS String Literal[0m] Found: "[1mSomething went wrong[0m"
     [33m→[0m title: '[1m[31mSomething went wrong[0m',
  [31m[Line 73][0m [[36mTemplate Literal String[0m] Found: "[1mSuccefully[0m"
     [33m→[0m title: `[1m[31mSuccefully[0m ${id ? 'edited' : 'added'}`,

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/states/AiAgentConnectionSchema.ts[0m
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter a valid base URL[0m"
     [33m→[0m message: '[1m[31mEnter a valid base URL[0m',
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mModel is required[0m"
     [33m→[0m model: z.string().trim().min(1, '[1m[31mModel is required[0m'),
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mModel is required[0m"
     [33m→[0m model: z.string().trim().min(1, '[1m[31mModel is required[0m'),
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter a valid base URL[0m"
     [33m→[0m .url('[1m[31mEnter a valid base URL[0m')
  [31m[Line 46][0m [[36mJS/TS String Literal[0m] Found: "[1mModel is required[0m"
     [33m→[0m model: z.string().trim().min(1, '[1m[31mModel is required[0m'),
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter a valid base URL[0m"
     [33m→[0m .url('[1m[31mEnter a valid base URL[0m')
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mModel is required[0m"
     [33m→[0m model: z.string().trim().min(1, '[1m[31mModel is required[0m'),
  [31m[Line 66][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter a valid base URL[0m"
     [33m→[0m .url('[1m[31mEnter a valid base URL[0m')
  [31m[Line 74][0m [[36mJS/TS String Literal[0m] Found: "[1mModel is required[0m"
     [33m→[0m model: z.string().trim().min(1, '[1m[31mModel is required[0m'),
  [31m[Line 80][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter a valid base URL[0m"
     [33m→[0m .url('[1m[31mEnter a valid base URL[0m')

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/agents/states/AiAgentFormSchema.ts[0m
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m name: z.string().trim().min(1, '[1m[31mName is required[0m'),
  [31m[Line 97][0m [[36mJS/TS String Literal[0m] Found: "[1mAPI key is required[0m"
     [33m→[0m message: '[1m[31mAPI key is required[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/bots/components/AutomationBotIntegrationDetailHeader.tsx[0m
  [31m[Line 36][0m [[36mTemplate Literal String[0m] Found: "[1mConnect and manage[0m"
     [33m→[0m {`[1m[31mConnect and manage[0m ${label} bots`}

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/bots/components/AutomationBotIntegrationDetailLayout.tsx[0m
  [31m[Line 15][0m [[36mJSX Plain Text[0m] Found: "[1mBots[0m"
     [33m→[0m <IconChevronLeft />

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/bots/components/AutomationBotIntegrationDetailSettings.tsx[0m
  [31m[Line 18][0m [[36mJSX Plain Text[0m] Found: "[1mSomething went wrong[0m"
     [33m→[0m <h4 className="font-bold">[1m[31mSomething went wrong[0m</h4>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/bots/components/AutomationBotsEmptyState.tsx[0m
  [31m[Line 11][0m [[36mJSX Plain Text[0m] Found: "[1mNo automation bots available[0m"
     [33m→[0m <h3 className="text-lg font-semibold">
  [31m[Line 14][0m [[36mJSX Plain Text[0m] Found: "[1mThere are no bot integrations enabled for this workspace yet. Once a
            bot integration is added, it will appear here.[0m"
     [33m→[0m <p className="text-muted-foreground text-sm">

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/bots/components/AutomationsBotsSettings.tsx[0m
  [31m[Line 69][0m [[36mJS/TS String Literal[0m] Found: "[1mAutomation bots[0m"
     [33m→[0m title="[1m[31mAutomation bots[0m"
  [31m[Line 70][0m [[36mJS/TS String Literal[0m] Found: "[1mSet up your bots and start connecting with your customers[0m"
     [33m→[0m description="[1m[31mSet up your bots and start connecting with your customers[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/bots/hooks/useAutomationBots.ts[0m
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mNot found bot constants [0m"
     [33m→[0m error: botConstantsError?.message || '[1m[31mNot found bot constants [0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/email-templates/components/AutomationEmailTemplatesSettings.tsx[0m
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mAre you sure you want to remove this email template?[0m"
     [33m→[0m if (confirm('[1m[31mAre you sure you want to remove this email template?[0m')) {
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail Templates[0m"
     [33m→[0m title="[1m[31mEmail Templates[0m"
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate and manage email templates for your automation workflows[0m"
     [33m→[0m description="[1m[31mCreate and manage email templates for your automation workflows[0m"
  [31m[Line 42][0m [[36mJSX Plain Text[0m] Found: "[1mCreate Template[0m"
     [33m→[0m <IconPlus />
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mSearch email templates...[0m"
     [33m→[0m placeholder="[1m[31mSearch email templates...[0m"
  [31m[Line 63][0m [[36mJS/TS String Literal[0m] Found: "[1mLoading...[0m"
     [33m→[0m ? '[1m[31mLoading...[0m'

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/email-templates/components/EmailTemplateCard.tsx[0m
  [31m[Line 37][0m [[36mJSX Plain Text[0m] Found: "[1mCreated[0m"
     [33m→[0m <span>
  [31m[Line 67][0m [[36mJSX Plain Text[0m] Found: "[1mRemove[0m"
     [33m→[0m <IconTrash className="size-4 mr-2" />

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/email-templates/components/EmailTemplateForm.tsx[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m name: z.string().min(1, '[1m[31mName is required[0m'),
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mContent is required[0m"
     [33m→[0m content: z.string().min(1, '[1m[31mContent is required[0m'),
  [31m[Line 126][0m [[36mJSX Plain Text[0m] Found: "[1mLoading template...[0m"
     [33m→[0m <div className="text-muted-foreground">[1m[31mLoading template...[0m</div>
  [31m[Line 134][0m [[36mJS/TS String Literal[0m] Found: "[1mEdit Email Template[0m"
     [33m→[0m title={isEditing ? '[1m[31mEdit Email Template[0m' : 'Create Email Template'}
  [31m[Line 134][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate Email Template[0m"
     [33m→[0m title={isEditing ? 'Edit Email Template' : '[1m[31mCreate Email Template[0m'}
  [31m[Line 137][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdate your email template[0m"
     [33m→[0m ? '[1m[31mUpdate your email template[0m'
  [31m[Line 138][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate a new email template for automation[0m"
     [33m→[0m : '[1m[31mCreate a new email template for automation[0m'
  [31m[Line 145][0m [[36mJS/TS String Literal[0m] Found: "[1mSaving...[0m"
     [33m→[0m ? '[1m[31mSaving...[0m'
  [31m[Line 147][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdate Template[0m"
     [33m→[0m ? '[1m[31mUpdate Template[0m'
  [31m[Line 148][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate Template[0m"
     [33m→[0m : '[1m[31mCreate Template[0m'}
  [31m[Line 161][0m [[36mJSX Plain Text[0m] Found: "[1mTemplate Name *[0m"
     [33m→[0m <Label htmlFor="name">[1m[31mTemplate Name *[0m</Label>
  [31m[Line 165][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter template name[0m"
     [33m→[0m placeholder="[1m[31mEnter template name[0m"
  [31m[Line 176][0m [[36mJSX Plain Text[0m] Found: "[1mDescription[0m"
     [33m→[0m <Label htmlFor="description">[1m[31mDescription[0m</Label>
  [31m[Line 180][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter template description[0m"
     [33m→[0m placeholder="[1m[31mEnter template description[0m"
  [31m[Line 186][0m [[36mJSX Plain Text[0m] Found: "[1mContent *[0m"
     [33m→[0m <Label>[1m[31mContent *[0m</Label>

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/email-templates/components/EmailTemplatesList.tsx[0m
  [31m[Line 31][0m [[36mJSX Plain Text[0m] Found: "[1mNo email templates[0m"
     [33m→[0m <h3 className="text-lg font-semibold mb-2">[1m[31mNo email templates[0m</h3>
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mCreate your first email template to get started with automated email
          campaigns.[0m"
     [33m→[0m <p className="text-muted-foreground text-sm max-w-sm">

[1m[33m📄 File: frontend/core-ui/src/modules/automations/components/settings/components/email-templates/hooks/useAutomationEmailTemplateMutations.tsx[0m
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail template created successfully[0m"
     [33m→[0m description: '[1m[31mEmail template created successfully[0m',
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 57][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail template updated successfully[0m"
     [33m→[0m description: '[1m[31mEmail template updated successfully[0m',
  [31m[Line 64][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 92][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 93][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail template removed successfully[0m"
     [33m→[0m description: '[1m[31mEmail template removed successfully[0m',
  [31m[Line 99][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/constants/index.ts[0m
  [31m[Line 10][0m [[36mJS/TS String Literal[0m] Found: "[1mSet[0m"
     [33m→[0m label: '[1m[31mSet[0m',
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mConcat[0m"
     [33m→[0m label: '[1m[31mConcat[0m',
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mSet[0m"
     [33m→[0m label: '[1m[31mSet[0m',
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd Day[0m"
     [33m→[0m label: '[1m[31mAdd Day[0m',
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mSubtract Day[0m"
     [33m→[0m label: '[1m[31mSubtract Day[0m',
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd[0m"
     [33m→[0m label: '[1m[31mAdd[0m',
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mMultiply[0m"
     [33m→[0m label: '[1m[31mMultiply[0m',
  [31m[Line 46][0m [[36mJS/TS String Literal[0m] Found: "[1mDivide[0m"
     [33m→[0m label: '[1m[31mDivide[0m',
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mSet[0m"
     [33m→[0m label: '[1m[31mSet[0m',
  [31m[Line 56][0m [[36mJS/TS String Literal[0m] Found: "[1mSet[0m"
     [33m→[0m label: '[1m[31mSet[0m',
  [31m[Line 77][0m [[36mJS/TS String Literal[0m] Found: "[1mTriggers[0m"
     [33m→[0m label: '[1m[31mTriggers[0m',
  [31m[Line 80][0m [[36mJS/TS String Literal[0m] Found: "[1mActions[0m"
     [33m→[0m { value: AutomationNodeType.Action, label: '[1m[31mActions[0m', icon: IconBolt },

[1m[33m📄 File: frontend/core-ui/src/modules/automations/context/AutomationBuilderDnDProvider.tsx[0m
  [31m[Line 63][0m [[36mJS/TS String Literal[0m] Found: "[1museDnD must be used within AutomationBuilderDnDProvider[0m"
     [33m→[0m throw new Error('[1m[31museDnD must be used within AutomationBuilderDnDProvider[0m');

[1m[33m📄 File: frontend/core-ui/src/modules/automations/context/AutomationProvider.tsx[0m
  [31m[Line 227][0m [[36mJS/TS String Literal[0m] Found: "[1museAutomation must be used within AutomationProvider[0m"
     [33m→[0m throw new Error('[1m[31museAutomation must be used within AutomationProvider[0m');

[1m[33m📄 File: frontend/core-ui/src/modules/automations/utils/ai/aiAgentRuntimeSummary.ts[0m
  [31m[Line 165][0m [[36mJS/TS String Literal[0m] Found: "[1mThis action will send the full trigger payload to the AI agent. Narrow the input path if you only need a few fields.[0m"
     [33m→[0m text: '[1m[31mThis action will send the full trigger payload to the AI agent. Narrow the input path if you only need a few fields.[0m',
  [31m[Line 172][0m [[36mJS/TS String Literal[0m] Found: "[1mThis action reads the whole previous action result. Large upstream payloads can slow the model call.[0m"
     [33m→[0m text: '[1m[31mThis action reads the whole previous action result. Large upstream payloads can slow the model call.[0m',
  [31m[Line 179][0m [[36mJS/TS String Literal[0m] Found: "[1mGPT-5 models may spend part of the completion budget on internal reasoning. Very low max token caps can end with no visible text even when the prompt is short.[0m"
     [33m→[0m text: '[1m[31mGPT-5 models may spend part of the completion budget on internal reasoning. Very low max token caps can end with no visible text even when the prompt is short.[0m',
  [31m[Line 187][0m [[36mJS/TS String Literal[0m] Found: "[1mchat assistant[0m"
     [33m→[0m '[1m[31mchat assistant[0m',
  [31m[Line 188][0m [[36mJS/TS String Literal[0m] Found: "[1mfollow-up question[0m"
     [33m→[0m '[1m[31mfollow-up question[0m',
  [31m[Line 189][0m [[36mJS/TS String Literal[0m] Found: "[1mone question at a time[0m"
     [33m→[0m '[1m[31mone question at a time[0m',
  [31m[Line 194][0m [[36mJS/TS String Literal[0m] Found: "[1mThis agent system prompt looks chat-oriented. For email or template generation, use an artifact-oriented prompt instead of a live support assistant prompt.[0m"
     [33m→[0m text: '[1m[31mThis agent system prompt looks chat-oriented. For email or template generation, use an artifact-oriented prompt instead of a live support assistant prompt.[0m',
  [31m[Line 201][0m [[36mJS/TS String Literal[0m] Found: "[1mShort email or reply generation usually stays stable around 150-300 max tokens.[0m"
     [33m→[0m text: '[1m[31mShort email or reply generation usually stays stable around 150-300 max tokens.[0m',
  [31m[Line 214][0m [[36mJS/TS String Literal[0m] Found: "[1mThis setup may hit the current timeout on slower providers. Reduce prompt/context size or increase the timeout.[0m"
     [33m→[0m text: '[1m[31mThis setup may hit the current timeout on slower providers. Reduce prompt/context size or increase the timeout.[0m',
  [31m[Line 221][0m [[36mJS/TS String Literal[0m] Found: "[1mFocused input paths, moderate token caps, and shorter prompts usually produce the most reliable automation runs.[0m"
     [33m→[0m text: '[1m[31mFocused input paths, moderate token caps, and shorter prompts usually produce the most reliable automation runs.[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/utils/automationBuilderUtils/triggerUtils.ts[0m
  [31m[Line 162][0m [[36mJS/TS String Literal[0m] Found: "[1mCopied successfully[0m"
     [33m→[0m toast({ title: '[1m[31mCopied successfully[0m', variant: 'success' });
  [31m[Line 166][0m [[36mJS/TS String Literal[0m] Found: "[1mSomething went wrong[0m"
     [33m→[0m title: '[1m[31mSomething went wrong[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/utils/automationFormDefinitions.ts[0m
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mCustom triggers must include a config[0m"
     [33m→[0m message: '[1m[31mCustom triggers must include a config[0m',
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mEach non-custom trigger must include a config with segment[0m"
     [33m→[0m message: '[1m[31mEach non-custom trigger must include a config with segment[0m',
  [31m[Line 59][0m [[36mJS/TS String Literal[0m] Found: "[1mAction configuration must not be empty[0m"
     [33m→[0m message: '[1m[31mAction configuration must not be empty[0m',
  [31m[Line 85][0m [[36mJS/TS String Literal[0m] Found: "[1mA trigger is required to save this automation.[0m"
     [33m→[0m message: '[1m[31mA trigger is required to save this automation.[0m',
  [31m[Line 88][0m [[36mJS/TS String Literal[0m] Found: "[1mA action is required to save this automation.[0m"
     [33m→[0m message: '[1m[31mA action is required to save this automation.[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/automations/utils/webhookSchemaUtils.ts[0m
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mWebhook Payload[0m"
     [33m→[0m groupName: string = '[1m[31mWebhook Payload[0m',
  [31m[Line 47][0m [[36mJS/TS String Literal[0m] Found: "[1mFields from incoming webhook payload[0m"
     [33m→[0m description: '[1m[31mFields from incoming webhook payload[0m',
  [31m[Line 64][0m [[36mTemplate Literal String[0m] Found: "[1m(First Item)[0m"
     [33m→[0m label: `${property.description || property.name} [1m[31m(First Item)[0m`,
  [31m[Line 66][0m [[36mTemplate Literal String[0m] Found: "[1mFirst item in[0m"
     [33m→[0m description: `[1m[31mFirst item in[0m ${
  [31m[Line 72][0m [[36mJS/TS String Literal[0m] Found: "[1mFields from incoming webhook payload[0m"
     [33m→[0m description: '[1m[31mFields from incoming webhook payload[0m',
  [31m[Line 110][0m [[36mJS/TS String Literal[0m] Found: "[1mGenerated Webhook Attributes:

[0m"
     [33m→[0m let preview = 'Generated Webhook Attributes:\n\n';

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/BroadcastBreadcrumb.tsx[0m
  [31m[Line 13][0m [[36mJSX Plain Text[0m] Found: "[1mBroadcast[0m"
     [33m→[0m <Icon[1m[31mBroadcast[0m />

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/BroadcastColumns.tsx[0m
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mName[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mName[0m" icon={IconLabelFilled} />
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mStatus[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mStatus[0m" icon={IconLabelFilled} />
  [31m[Line 67][0m [[36mJS/TS String Literal[0m] Found: "[1mSending[0m"
     [33m→[0m let labelText = '[1m[31mSending[0m';
  [31m[Line 71][0m [[36mJS/TS String Literal[0m] Found: "[1mPaused[0m"
     [33m→[0m labelText = '[1m[31mPaused[0m';
  [31m[Line 74][0m [[36mJS/TS String Literal[0m] Found: "[1mSending[0m"
     [33m→[0m labelText = '[1m[31mSending[0m';
  [31m[Line 80][0m [[36mJS/TS String Literal[0m] Found: "[1mSent[0m"
     [33m→[0m labelText = '[1m[31mSent[0m';
  [31m[Line 83][0m [[36mJS/TS String Literal[0m] Found: "[1mNot Sent[0m"
     [33m→[0m labelText = '[1m[31mNot Sent[0m';
  [31m[Line 89][0m [[36mJS/TS String Literal[0m] Found: "[1mDraft[0m"
     [33m→[0m labelText = '[1m[31mDraft[0m';
  [31m[Line 108][0m [[36mJS/TS String Literal[0m] Found: "[1mTotal[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mTotal[0m" icon={IconLabelFilled} />
  [31m[Line 141][0m [[36mTemplate Literal String[0m] Found: "[1mcustomers are valid[0m"
     [33m→[0m {`${validCustomersCount} of ${totalCustomersCount} [1m[31mcustomers are valid[0m`}
  [31m[Line 154][0m [[36mJS/TS String Literal[0m] Found: "[1mType[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mType[0m" icon={IconLabelFilled} />
  [31m[Line 160][0m [[36mJS/TS String Literal[0m] Found: "[1mUnknown[0m"
     [33m→[0m let label: string = '[1m[31mUnknown[0m';
  [31m[Line 165][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail[0m"
     [33m→[0m label = '[1m[31mEmail[0m';
  [31m[Line 170][0m [[36mJS/TS String Literal[0m] Found: "[1mSms[0m"
     [33m→[0m label = '[1m[31mSms[0m';
  [31m[Line 175][0m [[36mJS/TS String Literal[0m] Found: "[1mMessenger[0m"
     [33m→[0m label = '[1m[31mMessenger[0m';
  [31m[Line 180][0m [[36mJS/TS String Literal[0m] Found: "[1mNotification[0m"
     [33m→[0m label = '[1m[31mNotification[0m';
  [31m[Line 204][0m [[36mJS/TS String Literal[0m] Found: "[1mBrand[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mBrand[0m" icon={IconLabelFilled} />
  [31m[Line 211][0m [[36mJS/TS String Literal[0m] Found: "[1mNo Brand[0m"
     [33m→[0m placeholder="[1m[31mNo Brand[0m"
  [31m[Line 221][0m [[36mJS/TS String Literal[0m] Found: "[1mFrom[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mFrom[0m" icon={IconLabelFilled} />
  [31m[Line 228][0m [[36mJS/TS String Literal[0m] Found: "[1mNo Member[0m"
     [33m→[0m placeholder="[1m[31mNo Member[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/BroadcastDetailSidebar.tsx[0m
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mStatistic[0m"
     [33m→[0m statistic: '[1m[31mStatistic[0m',
  [31m[Line 5][0m [[36mJS/TS String Literal[0m] Found: "[1mPreview[0m"
     [33m→[0m preview: '[1m[31mPreview[0m',
  [31m[Line 6][0m [[36mJS/TS String Literal[0m] Found: "[1mTraces[0m"
     [33m→[0m log: '[1m[31mTraces[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/BroadcastFilter.tsx[0m
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m placeholder="[1m[31mFilter[0m"
  [31m[Line 41][0m [[36mJSX Plain Text[0m] Found: "[1mAuto[0m"
     [33m→[0m <IconSettingsSpark />
  [31m[Line 48][0m [[36mJSX Plain Text[0m] Found: "[1mManual[0m"
     [33m→[0m <IconSettings />
  [31m[Line 57][0m [[36mJSX Plain Text[0m] Found: "[1mSearch[0m"
     [33m→[0m <Icon[1m[31mSearch[0m />
  [31m[Line 61][0m [[36mJSX Plain Text[0m] Found: "[1mStatus[0m"
     [33m→[0m <IconProgress />
  [31m[Line 65][0m [[36mJSX Plain Text[0m] Found: "[1mMethod[0m"
     [33m→[0m <IconBroadcast />
  [31m[Line 70][0m [[36mJS/TS String Literal[0m] Found: "[1mFrom[0m"
     [33m→[0m <SelectMember.FilterItem value="fromUser" label="[1m[31mFrom[0m" />
  [31m[Line 114][0m [[36mJS/TS String Literal[0m] Found: "[1mAuto[0m"
     [33m→[0m {queries?.kind === 'auto' ? '[1m[31mAuto[0m' : 'Manual'}
  [31m[Line 114][0m [[36mJS/TS String Literal[0m] Found: "[1mManual[0m"
     [33m→[0m {queries?.kind === 'auto' ? 'Auto' : '[1m[31mManual[0m'}
  [31m[Line 120][0m [[36mJSX Plain Text[0m] Found: "[1mSearch[0m"
     [33m→[0m <Icon[1m[31mSearch[0m />
  [31m[Line 130][0m [[36mJSX Plain Text[0m] Found: "[1mStatus[0m"
     [33m→[0m <IconProgress />
  [31m[Line 138][0m [[36mJSX Plain Text[0m] Found: "[1mMethod[0m"
     [33m→[0m <IconBroadcast />
  [31m[Line 145][0m [[36mJS/TS String Literal[0m] Found: "[1mFrom[0m"
     [33m→[0m <SelectMember.FilterBar queryKey="fromUser" label="[1m[31mFrom[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/BroadcastHeader.tsx[0m
  [31m[Line 20][0m [[36mJSX Plain Text[0m] Found: "[1mGo to settings[0m"
     [33m→[0m <IconSettings />

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/BroadcastMemberInline.tsx[0m
  [31m[Line 235][0m [[36mTemplate Literal String[0m] Found: "[1mYou and[0m"
     [33m→[0m return `[1m[31mYou and[0m ${otherMembersCount} others`;
  [31m[Line 239][0m [[36mTemplate Literal String[0m] Found: "[1mYou and[0m"
     [33m→[0m return `[1m[31mYou and[0m ${otherMember?.email}`;

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/BroadcastMethod.tsx[0m
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1mNew broadcast[0m"
     [33m→[0m <IconPlus />
  [31m[Line 25][0m [[36mJSX Plain Text[0m] Found: "[1mEmail[0m"
     [33m→[0m <Label variant="peer">[1m[31mEmail[0m</Label>
  [31m[Line 26][0m [[36mJSX Plain Text[0m] Found: "[1mMaster email marketing with fully customized templates[0m"
     [33m→[0m <div className="text-xs text-accent-foreground">
  [31m[Line 37][0m [[36mJSX Plain Text[0m] Found: "[1mMessenger[0m"
     [33m→[0m <Label variant="peer">[1m[31mMessenger[0m</Label>
  [31m[Line 38][0m [[36mJSX Plain Text[0m] Found: "[1mInteract personally with direct in-app-messaging[0m"
     [33m→[0m <div className="text-xs text-accent-foreground">
  [31m[Line 49][0m [[36mJSX Plain Text[0m] Found: "[1mNotification[0m"
     [33m→[0m <Label variant="peer">[1m[31mNotification[0m</Label>
  [31m[Line 50][0m [[36mJSX Plain Text[0m] Found: "[1mSend automated notifications to your customers[0m"
     [33m→[0m <div className="text-xs text-accent-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/BroadcastPreview.tsx[0m
  [31m[Line 18][0m [[36mJSX Plain Text[0m] Found: "[1mMethod not found[0m"
     [33m→[0m return <div>[1m[31mMethod not found[0m</div>;

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/BroadcastRules.tsx[0m
  [31m[Line 22][0m [[36mJSX Plain Text[0m] Found: "[1mCondition[0m"
     [33m→[0m <Label>[1m[31mCondition[0m</Label>
  [31m[Line 23][0m [[36mJSX Plain Text[0m] Found: "[1mValue[0m"
     [33m→[0m <Label>[1m[31mValue[0m</Label>
  [31m[Line 27][0m [[36mJSX Plain Text[0m] Found: "[1mAdd rules[0m"
     [33m→[0m <Label>[1m[31mAdd rules[0m</Label>

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/BroadcastSheetActions.tsx[0m
  [31m[Line 2][0m [[36mJSX Plain Text[0m] Found: "[1mBroadcastSheetActions[0m"
     [33m→[0m return <div>[1m[31mBroadcastSheetActions[0m</div>;

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/BroadcastStatistic.tsx[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mSent[0m"
     [33m→[0m label: '[1m[31mSent[0m',
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mDelivered[0m"
     [33m→[0m label: '[1m[31mDelivered[0m',
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mOpened[0m"
     [33m→[0m label: '[1m[31mOpened[0m',
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mClicked[0m"
     [33m→[0m label: '[1m[31mClicked[0m',
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mComplaints[0m"
     [33m→[0m label: '[1m[31mComplaints[0m',
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mBounce[0m"
     [33m→[0m label: '[1m[31mBounce[0m',
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mRejected[0m"
     [33m→[0m label: '[1m[31mRejected[0m',
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mRendering Failure[0m"
     [33m→[0m label: '[1m[31mRendering Failure[0m',
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mAverage email statistics[0m"
     [33m→[0m label="[1m[31mAverage email statistics[0m"
  [31m[Line 92][0m [[36mJS/TS String Literal[0m] Found: "[1mStatistic[0m"
     [33m→[0m label="[1m[31mStatistic[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/chooser/BroadcastChooser.tsx[0m
  [31m[Line 10][0m [[36mJSX Plain Text[0m] Found: "[1mBroadcastChooser[0m"
     [33m→[0m return <div>[1m[31mBroadcastChooser[0m</div>;

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/commands/BroadcastDelete.tsx[0m
  [31m[Line 26][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${broadcastIds.length} selected broadcast?`,
  [31m[Line 26][0m [[36mTemplate Literal String[0m] Found: "[1mselected broadcast?[0m"
     [33m→[0m message: `Are you sure you want to delete the ${broadcastIds.length} [1m[31mselected broadcast?[0m`,
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 43][0m [[36mJS/TS String Literal[0m] Found: "[1mBroadcast deleted successfully[0m"
     [33m→[0m description: '[1m[31mBroadcast deleted successfully[0m',
  [31m[Line 50][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/commands/BroadcastSetLive.tsx[0m
  [31m[Line 26][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to set this broadcast live?[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to set this broadcast live?[0m`,
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 43][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccesfully set live[0m"
     [33m→[0m description: '[1m[31mSuccesfully set live[0m',
  [31m[Line 50][0m [[36mJSX Plain Text[0m] Found: "[1mLive[0m"
     [33m→[0m <IconPlayerPlayFilled />

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/methods/BroadcastEmailMethod.tsx[0m
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mFrom user is required[0m"
     [33m→[0m rules={{ required: '[1m[31mFrom user is required[0m' }}
  [31m[Line 18][0m [[36mJSX Plain Text[0m] Found: "[1mFrom User[0m"
     [33m→[0m <Form.Label>[1m[31mFrom User[0m</Form.Label>
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect team members[0m"
     [33m→[0m placeholder="[1m[31mSelect team members[0m"
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail subject is required[0m"
     [33m→[0m rules={{ required: '[1m[31mEmail subject is required[0m' }}
  [31m[Line 37][0m [[36mJSX Plain Text[0m] Found: "[1mEmail Subject[0m"
     [33m→[0m <Form.Label>[1m[31mEmail Subject[0m</Form.Label>
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mSubject[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mSubject[0m" />
  [31m[Line 52][0m [[36mJSX Plain Text[0m] Found: "[1mSender[0m"
     [33m→[0m <Form.Label>[1m[31mSender[0m</Form.Label>
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mSender[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mSender[0m" />
  [31m[Line 64][0m [[36mJSX Plain Text[0m] Found: "[1mReply To[0m"
     [33m→[0m <Form.Label>[1m[31mReply To[0m</Form.Label>
  [31m[Line 66][0m [[36mJS/TS String Literal[0m] Found: "[1mReply To[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mReply To[0m" />
  [31m[Line 78][0m [[36mJSX Plain Text[0m] Found: "[1mAttachments[0m"
     [33m→[0m <Form.Label>[1m[31mAttachments[0m</Form.Label>

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/methods/BroadcastEmailTabContent.tsx[0m
  [31m[Line 34][0m [[36mJSX Plain Text[0m] Found: "[1mSubject:[0m"
     [33m→[0m <span className="text-sm text-muted-foreground">[1m[31mSubject:[0m</span>{' '}
  [31m[Line 39][0m [[36mJSX Plain Text[0m] Found: "[1mFrom:[0m"
     [33m→[0m <span className="text-sm text-muted-foreground">[1m[31mFrom:[0m</span>

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/methods/BroadcastMessengerMethod.tsx[0m
  [31m[Line 19][0m [[36mJSX Plain Text[0m] Found: "[1mFrom User[0m"
     [33m→[0m <Form.Label>[1m[31mFrom User[0m</Form.Label>
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect team members[0m"
     [33m→[0m placeholder="[1m[31mSelect team members[0m"
  [31m[Line 35][0m [[36mJSX Plain Text[0m] Found: "[1mBrand[0m"
     [33m→[0m <Form.Label>[1m[31mBrand[0m</Form.Label>
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect brand[0m"
     [33m→[0m placeholder="[1m[31mSelect brand[0m"
  [31m[Line 54][0m [[36mJSX Plain Text[0m] Found: "[1mMessage type[0m"
     [33m→[0m <Form.Label>[1m[31mMessage type[0m</Form.Label>
  [31m[Line 69][0m [[36mJSX Plain Text[0m] Found: "[1mSent as[0m"
     [33m→[0m <Form.Label>[1m[31mSent as[0m</Form.Label>

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/methods/BroadcastMessengerTabContent.tsx[0m
  [31m[Line 6][0m [[36mJSX Plain Text[0m] Found: "[1mMessenger Preview[0m"
     [33m→[0m return <div>[1m[31mMessenger Preview[0m</div>;

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/methods/BroadcastNotificationMethod.tsx[0m
  [31m[Line 26][0m [[36mJSX Plain Text[0m] Found: "[1mIn-app push notification[0m"
     [33m→[0m <Label className="cursor-pointer">
  [31m[Line 53][0m [[36mJSX Plain Text[0m] Found: "[1mMobile & Web push notification[0m"
     [33m→[0m <Label className="cursor-pointer">
  [31m[Line 68][0m [[36mJSX Plain Text[0m] Found: "[1mNotification title[0m"
     [33m→[0m <Form.Label>[1m[31mNotification title[0m</Form.Label>
  [31m[Line 72][0m [[36mJS/TS String Literal[0m] Found: "[1mTitle[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mTitle[0m" maxLength={15} />
  [31m[Line 83][0m [[36mJSX Plain Text[0m] Found: "[1mNotification content[0m"
     [33m→[0m <Form.Label>[1m[31mNotification content[0m</Form.Label>
  [31m[Line 89][0m [[36mJS/TS String Literal[0m] Found: "[1mContent[0m"
     [33m→[0m placeholder="[1m[31mContent[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/methods/BroadcastNotificationTabContent.tsx[0m
  [31m[Line 6][0m [[36mJSX Plain Text[0m] Found: "[1mNotification Preview[0m"
     [33m→[0m return <div>[1m[31mNotification Preview[0m</div>;

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/mockup/BroadcastMobileNotificationMockup.tsx[0m
  [31m[Line 55][0m [[36mJS/TS String Literal[0m] Found: "[1mM12.6796 16.7509C16.1909 11.598 19.4964 6.1423 22.4233 0.5C19.092 4.26153 15.1649 9.73484 11.5688 15.1003C9.66263 12.3476 7.38208 9.39684 4.76955 6.63271C7.3583 11.4228 8.66767 14.0594 10.459 16.7696C5.01156 25.0008 0.57666 32.5 0.57666 32.5C4.31137 28.1879 8.03367 23.4404 11.5688 18.3714C13.084 20.4647 15.0439 22.8349 18.1756 26.3911C18.1694 26.386 16.2147 22.1278 12.6796 16.7509Z[0m"
     [33m→[0m d="[1m[31mM12.6796 16.7509C16.1909 11.598 19.4964 6.1423 22.4233 0.5C19.092 4.26153 15.1649 9.73484 11.5688 15.1003C9.66263 12.3476 7.38208 9.39684 4.76955 6.63271C7.3583 11.4228 8.66767 14.0594 10.459 16.7696C5.01156 25.0008 0.57666 32.5 0.57666 32.5C4.31137 28.1879 8.03367 23.4404 11.5688 18.3714C13.084 20.4647 15.0439 22.8349 18.1756 26.3911C18.1694 26.386 16.2147 22.1278 12.6796 16.7509Z[0m"
  [31m[Line 62][0m [[36mJSX Plain Text[0m] Found: "[1mErxes[0m"
     [33m→[0m <IconBellRinging className="h-3 w-3" />
  [31m[Line 68][0m [[36mJS/TS String Literal[0m] Found: "[1mNotification title[0m"
     [33m→[0m {title || '[1m[31mNotification title[0m'}
  [31m[Line 72][0m [[36mJS/TS String Literal[0m] Found: "[1mNotification content will appear here[0m"
     [33m→[0m {content || '[1m[31mNotification content will appear here[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/mockup/BroadcastWebNotificationMockup.tsx[0m
  [31m[Line 28][0m [[36mJSX Plain Text[0m] Found: "[1mIn-app notification[0m"
     [33m→[0m <span className="text-sm font-medium">
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mM12.6796 16.7509C16.1909 11.598 19.4964 6.1423 22.4233 0.5C19.092 4.26153 15.1649 9.73484 11.5688 15.1003C9.66263 12.3476 7.38208 9.39684 4.76955 6.63271C7.3583 11.4228 8.66767 14.0594 10.459 16.7696C5.01156 25.0008 0.57666 32.5 0.57666 32.5C4.31137 28.1879 8.03367 23.4404 11.5688 18.3714C13.084 20.4647 15.0439 22.8349 18.1756 26.3911C18.1694 26.386 16.2147 22.1278 12.6796 16.7509Z[0m"
     [33m→[0m d="[1m[31mM12.6796 16.7509C16.1909 11.598 19.4964 6.1423 22.4233 0.5C19.092 4.26153 15.1649 9.73484 11.5688 15.1003C9.66263 12.3476 7.38208 9.39684 4.76955 6.63271C7.3583 11.4228 8.66767 14.0594 10.459 16.7696C5.01156 25.0008 0.57666 32.5 0.57666 32.5C4.31137 28.1879 8.03367 23.4404 11.5688 18.3714C13.084 20.4647 15.0439 22.8349 18.1756 26.3911C18.1694 26.386 16.2147 22.1278 12.6796 16.7509Z[0m"
  [31m[Line 47][0m [[36mJS/TS String Literal[0m] Found: "[1mNotification title[0m"
     [33m→[0m {title || '[1m[31mNotification title[0m'}
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mNotification content will appear here[0m"
     [33m→[0m {content || '[1m[31mNotification content will appear here[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/preview/BroadcastEmailPreview.tsx[0m
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mContent is required[0m"
     [33m→[0m rules={{ required: '[1m[31mContent is required[0m' }}

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/select/BroadcastSelectMember.tsx[0m
  [31m[Line 137][0m [[36mJS/TS String Literal[0m] Found: "[1mSearch member...[0m"
     [33m→[0m placeholder="[1m[31mSearch member...[0m"
  [31m[Line 200][0m [[36mJS/TS String Literal[0m] Found: "[1mSelectMemberFormItem[0m"
     [33m→[0m [1m[31mSelectMemberFormItem[0m.displayName = 'SelectMemberFormItem';
  [31m[Line 236][0m [[36mJS/TS String Literal[0m] Found: "[1mSelectMemberRoot[0m"
     [33m→[0m [1m[31mSelectMemberRoot[0m.displayName = 'SelectMemberRoot';

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/select/BroadcastSelectMessageMethod.tsx[0m
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1museSelectStatusContext must be used within SelectStatusProvider[0m"
     [33m→[0m '[1m[31museSelectStatusContext must be used within SelectStatusProvider[0m',
  [31m[Line 74][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect method...[0m"
     [33m→[0m {placeholder || '[1m[31mSelect method...[0m'}
  [31m[Line 112][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect method[0m"
     [33m→[0m <Command.Input placeholder="[1m[31mSelect method[0m" />
  [31m[Line 114][0m [[36mJSX Plain Text[0m] Found: "[1mNo method found[0m"
     [33m→[0m <Command.Empty>[1m[31mNo method found[0m</Command.Empty>

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/select/BroadcastSelectMessageStatus.tsx[0m
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1museSelectStatusContext must be used within SelectStatusProvider[0m"
     [33m→[0m '[1m[31museSelectStatusContext must be used within SelectStatusProvider[0m',
  [31m[Line 74][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect status...[0m"
     [33m→[0m {placeholder || '[1m[31mSelect status...[0m'}
  [31m[Line 112][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect status[0m"
     [33m→[0m <Command.Input placeholder="[1m[31mSelect status[0m" />
  [31m[Line 114][0m [[36mJSX Plain Text[0m] Found: "[1mNo status found[0m"
     [33m→[0m <Command.Empty>[1m[31mNo status found[0m</Command.Empty>

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/select/BroadcastSelectMessengerMessageSentAs.tsx[0m
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect sent as[0m"
     [33m→[0m <Select.Value placeholder={'[1m[31mSelect sent as[0m'}>
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect sent as[0m"
     [33m→[0m {BROADCAST_MESSENGER_SENT_AS_TYPES[value] || '[1m[31mSelect sent as[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/select/BroadcastSelectMessengerMessageType.tsx[0m
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect message type[0m"
     [33m→[0m <Select.Value placeholder={'[1m[31mSelect message type[0m'}>
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect message type[0m"
     [33m→[0m {BROADCAST_MESSENGER_MESSAGE_TYPES[value] || '[1m[31mSelect message type[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/select/BroadcastSelectRule.tsx[0m
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect rule[0m"
     [33m→[0m placeholder="[1m[31mSelect rule[0m"
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mSelect rule[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/select/BroadcastSelectTargetType.tsx[0m
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect target type[0m"
     [33m→[0m <Select.Value placeholder={'[1m[31mSelect target type[0m'}>
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect target type[0m"
     [33m→[0m {BROADCAST_TARGET_TYPE[value] || '[1m[31mSelect target type[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/settings/BroadcastSettings.tsx[0m
  [31m[Line 78][0m [[36mJSX Plain Text[0m] Found: "[1mVerified emails[0m"
     [33m→[0m <Form.Label>[1m[31mVerified emails[0m</Form.Label>

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/settings/BroadcastSettingsVerifiedEmail.tsx[0m
  [31m[Line 43][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid email[0m"
     [33m→[0m title: '[1m[31mInvalid email[0m',
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease enter a valid email[0m"
     [33m→[0m description: '[1m[31mPlease enter a valid email[0m',
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail added successfully[0m"
     [33m→[0m title: '[1m[31mEmail added successfully[0m',
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mYour email has been added! Please check your inbox for confirmation[0m"
     [33m→[0m '[1m[31mYour email has been added! Please check your inbox for confirmation[0m',
  [31m[Line 67][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to remove this email?[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to remove this email?[0m`,
  [31m[Line 97][0m [[36mJSX Plain Text[0m] Found: "[1mNo verified emails[0m"
     [33m→[0m <span className="text-muted-foreground font-medium">
  [31m[Line 108][0m [[36mJS/TS String Literal[0m] Found: "[1mSearch or add email[0m"
     [33m→[0m placeholder="[1m[31mSearch or add email[0m"
  [31m[Line 131][0m [[36mJSX Plain Text[0m] Found: "[1mVerify email: "[0m"
     [33m→[0m <IconShieldFilled />
  [31m[Line 135][0m [[36mJSX Plain Text[0m] Found: "[1mNo verified emails found. You can add by typing an email address.[0m"
     [33m→[0m <div className='py-5 px-3 text-center'>

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/steps/BroadcastConfigStep.tsx[0m
  [31m[Line 18][0m [[36mJSX Plain Text[0m] Found: "[1mMethod not found, Try to refresh the page[0m"
     [33m→[0m return <div>[1m[31mMethod not found, Try to refresh the page[0m</div>;

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/steps/BroadcastSegmentStep.tsx[0m
  [31m[Line 3][0m [[36mJSX Plain Text[0m] Found: "[1mBroadcastSegmentStep[0m"
     [33m→[0m <div className="h-full w-full flex items-center">[1m[31mBroadcastSegmentStep[0m</div>

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/steps/BroadcastSteps.tsx[0m
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mBroadcast recipients[0m"
     [33m→[0m title: '[1m[31mBroadcast recipients[0m',
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mSegment who’s going to receive this broacast[0m"
     [33m→[0m description: '[1m[31mSegment who’s going to receive this broacast[0m',
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mBroadcast Config[0m"
     [33m→[0m title: '[1m[31mBroadcast Config[0m',
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mConfigure, Write and Compose your broadcast[0m"
     [33m→[0m description: '[1m[31mConfigure, Write and Compose your broadcast[0m',
  [31m[Line 78][0m [[36mJS/TS String Literal[0m] Found: "[1mBroadcast saved as draft[0m"
     [33m→[0m ? '[1m[31mBroadcast saved as draft[0m'
  [31m[Line 79][0m [[36mJS/TS String Literal[0m] Found: "[1mBroadcast created[0m"
     [33m→[0m : '[1m[31mBroadcast created[0m',
  [31m[Line 111][0m [[36mJSX Plain Text[0m] Found: "[1mNew Broadcast[0m"
     [33m→[0m <Sheet.Title>[1m[31mNew Broadcast[0m</Sheet.Title>
  [31m[Line 188][0m [[36mJS/TS String Literal[0m] Found: "[1mCancel[0m"
     [33m→[0m {step === 0 ? '[1m[31mCancel[0m' : 'Previous step'}
  [31m[Line 188][0m [[36mJS/TS String Literal[0m] Found: "[1mPrevious step[0m"
     [33m→[0m {step === 0 ? 'Cancel' : '[1m[31mPrevious step[0m'}
  [31m[Line 191][0m [[36mJSX Plain Text[0m] Found: "[1mSave & Draft[0m"
     [33m→[0m <Button onClick={() => handleAction(step + 1, 'draft')}>
  [31m[Line 196][0m [[36mJS/TS String Literal[0m] Found: "[1mSave & Live[0m"
     [33m→[0m {step + 1 === BROADCAST_STEPS.length ? '[1m[31mSave & Live[0m' : 'Next step'}
  [31m[Line 196][0m [[36mJS/TS String Literal[0m] Found: "[1mNext step[0m"
     [33m→[0m {step + 1 === BROADCAST_STEPS.length ? 'Save & Live' : '[1m[31mNext step[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/steps/BroadcastTargetStep.tsx[0m
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mSegment[0m"
     [33m→[0m title: '[1m[31mSegment[0m',
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mSegment who’s going to receive this broacast[0m"
     [33m→[0m description: '[1m[31mSegment who’s going to receive this broacast[0m',
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mTag[0m"
     [33m→[0m title: '[1m[31mTag[0m',
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mConfigure, Write and Compose your broadcast[0m"
     [33m→[0m description: '[1m[31mConfigure, Write and Compose your broadcast[0m',
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mBrand[0m"
     [33m→[0m title: '[1m[31mBrand[0m',
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect brands for this broadcast[0m"
     [33m→[0m description: '[1m[31mSelect brands for this broadcast[0m',
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mTitle is required[0m"
     [33m→[0m rules={{ required: '[1m[31mTitle is required[0m' }}
  [31m[Line 43][0m [[36mJSX Plain Text[0m] Found: "[1mTitle[0m"
     [33m→[0m <Form.Label>[1m[31mTitle[0m</Form.Label>
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mTitle[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mTitle[0m" />
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mTarget type is required[0m"
     [33m→[0m rules={{ required: '[1m[31mTarget type is required[0m' }}
  [31m[Line 57][0m [[36mJSX Plain Text[0m] Found: "[1mTarget Type[0m"
     [33m→[0m <Form.Label>[1m[31mTarget Type[0m</Form.Label>
  [31m[Line 71][0m [[36mJS/TS String Literal[0m] Found: "[1mCustomer are required[0m"
     [33m→[0m rules={{ required: '[1m[31mCustomer are required[0m' }}
  [31m[Line 79][0m [[36mJSX Plain Text[0m] Found: "[1mCustomer[0m"
     [33m→[0m <span>[1m[31mCustomer[0m</span>

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/tab/BroadcastTabLogContent.tsx[0m
  [31m[Line 78][0m [[36mJSX Plain Text[0m] Found: "[1mLoading...[0m"
     [33m→[0m {loading && <p className="text-sm text-muted-foreground">[1m[31mLoading...[0m</p>}
  [31m[Line 86][0m [[36mJSX Plain Text[0m] Found: "[1mNo traces yet[0m"
     [33m→[0m <Empty.Title>[1m[31mNo traces yet[0m</Empty.Title>
  [31m[Line 87][0m [[36mJSX Plain Text[0m] Found: "[1mTraces will appear here once the broadcast starts sending.[0m"
     [33m→[0m <Empty.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/components/tab/BroadcastTabStatisticContent.tsx[0m
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mTotal[0m"
     [33m→[0m title: '[1m[31mTotal[0m',
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mThe cumulative count of all email messages processed during this broadcast.[0m"
     [33m→[0m '[1m[31mThe cumulative count of all email messages processed during this broadcast.[0m',
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mSent[0m"
     [33m→[0m title: '[1m[31mSent[0m',
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mThe handoff to Amazon SES was successful and delivery is now being attempted.[0m"
     [33m→[0m '[1m[31mThe handoff to Amazon SES was successful and delivery is now being attempted.[0m',
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mDelivered[0m"
     [33m→[0m title: '[1m[31mDelivered[0m',
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mThe email was successfully accepted by the recipient’s incoming mail server.[0m"
     [33m→[0m '[1m[31mThe email was successfully accepted by the recipient’s incoming mail server.[0m',
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mOpened[0m"
     [33m→[0m title: '[1m[31mOpened[0m',
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mThe recipient viewed the message content within their specific email client.[0m"
     [33m→[0m '[1m[31mThe recipient viewed the message content within their specific email client.[0m',
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mClicked[0m"
     [33m→[0m title: '[1m[31mClicked[0m',
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mThe recipient interacted with one or more tracked hyperlinks in the email.[0m"
     [33m→[0m '[1m[31mThe recipient interacted with one or more tracked hyperlinks in the email.[0m',
  [31m[Line 46][0m [[36mJS/TS String Literal[0m] Found: "[1mComplaint/Spam[0m"
     [33m→[0m title: '[1m[31mComplaint/Spam[0m',
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mThe recipient received the email but manually flagged the message as spam.[0m"
     [33m→[0m '[1m[31mThe recipient received the email but manually flagged the message as spam.[0m',
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mBounce[0m"
     [33m→[0m title: '[1m[31mBounce[0m',
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mThe recipient’s mail server permanently rejected the message delivery attempt.[0m"
     [33m→[0m '[1m[31mThe recipient’s mail server permanently rejected the message delivery attempt.[0m',
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mRendering failure[0m"
     [33m→[0m title: '[1m[31mRendering failure[0m',
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mThe email was not sent due to a technical error within the template syntax.[0m"
     [33m→[0m '[1m[31mThe email was not sent due to a technical error within the template syntax.[0m',
  [31m[Line 64][0m [[36mJS/TS String Literal[0m] Found: "[1mRejected[0m"
     [33m→[0m title: '[1m[31mRejected[0m',
  [31m[Line 66][0m [[36mJS/TS String Literal[0m] Found: "[1mThe email was scanned by Amazon SES, found to be a risk, and blocked.[0m"
     [33m→[0m '[1m[31mThe email was scanned by Amazon SES, found to be a risk, and blocked.[0m',
  [31m[Line 77][0m [[36mJSX Plain Text[0m] Found: "[1mThis campaign has run:[0m"
     [33m→[0m <span className="text-muted-foreground inline-flex gap-2">
  [31m[Line 81][0m [[36mJSX Plain Text[0m] Found: "[1mLast run at:[0m"
     [33m→[0m <span className="text-muted-foreground inline-flex gap-2">
  [31m[Line 89][0m [[36mJS/TS String Literal[0m] Found: "[1mNever[0m"
     [33m→[0m : '[1m[31mNever[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/constants.ts[0m
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mAuto[0m"
     [33m→[0m auto: '[1m[31mAuto[0m',
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mVisitor auto[0m"
     [33m→[0m visitorAuto: '[1m[31mVisitor auto[0m',
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mManual[0m"
     [33m→[0m manual: '[1m[31mManual[0m',
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mChat[0m"
     [33m→[0m chat: '[1m[31mChat[0m',
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mNote[0m"
     [33m→[0m note: '[1m[31mNote[0m',
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mPost[0m"
     [33m→[0m post: '[1m[31mPost[0m',
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mBadge[0m"
     [33m→[0m badge: '[1m[31mBadge[0m',
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mSnippet[0m"
     [33m→[0m snippet: '[1m[31mSnippet[0m',
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mShow the full message[0m"
     [33m→[0m fullMessage: '[1m[31mShow the full message[0m',
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mIs[0m"
     [33m→[0m is: '[1m[31mIs[0m',
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mIs not[0m"
     [33m→[0m isNot: '[1m[31mIs not[0m',
  [31m[Line 43][0m [[36mJS/TS String Literal[0m] Found: "[1mStarts with[0m"
     [33m→[0m startsWith: '[1m[31mStarts with[0m',
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mEnds with[0m"
     [33m→[0m endsWith: '[1m[31mEnds with[0m',
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mContains[0m"
     [33m→[0m contains: '[1m[31mContains[0m',
  [31m[Line 46][0m [[36mJS/TS String Literal[0m] Found: "[1mDoes not contain[0m"
     [33m→[0m doesNotContain: '[1m[31mDoes not contain[0m',
  [31m[Line 47][0m [[36mJS/TS String Literal[0m] Found: "[1mIs unknown[0m"
     [33m→[0m isUnknown: '[1m[31mIs unknown[0m',
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mHas any value[0m"
     [33m→[0m hasAnyValue: '[1m[31mHas any value[0m',
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mGreater than[0m"
     [33m→[0m greaterThan: '[1m[31mGreater than[0m',
  [31m[Line 53][0m [[36mJS/TS String Literal[0m] Found: "[1mLess than[0m"
     [33m→[0m lessThan: '[1m[31mLess than[0m',
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mIs[0m"
     [33m→[0m is: '[1m[31mIs[0m',
  [31m[Line 55][0m [[36mJS/TS String Literal[0m] Found: "[1mIs not[0m"
     [33m→[0m isNot: '[1m[31mIs not[0m',
  [31m[Line 56][0m [[36mJS/TS String Literal[0m] Found: "[1mIs unknown[0m"
     [33m→[0m isUnknown: '[1m[31mIs unknown[0m',
  [31m[Line 57][0m [[36mJS/TS String Literal[0m] Found: "[1mHas any value[0m"
     [33m→[0m hasAnyValue: '[1m[31mHas any value[0m',
  [31m[Line 76][0m [[36mJS/TS String Literal[0m] Found: "[1mBrowser language[0m"
     [33m→[0m title: '[1m[31mBrowser language[0m',
  [31m[Line 78][0m [[36mJS/TS String Literal[0m] Found: "[1mRecognizes which language is set for visitor’s browser. Insert only Language codes in value field as appointed in ISO-639, i.e "en" for English, "fr" for French, "de" for German etc.[0m"
     [33m→[0m '[1m[31mRecognizes which language is set for visitor’s browser. Insert only Language codes in value field as appointed in ISO-639, i.e "en" for English, "fr" for French, "de" for German etc.[0m',
  [31m[Line 82][0m [[36mJS/TS String Literal[0m] Found: "[1mCurrent page url[0m"
     [33m→[0m title: '[1m[31mCurrent page url[0m',
  [31m[Line 84][0m [[36mJS/TS String Literal[0m] Found: "[1mWrite your desired page URL, excluding domain name. For example: If you want to place your engagement message on https://office.erxes.io/pricing - then write /pricing[0m"
     [33m→[0m '[1m[31mWrite your desired page URL, excluding domain name. For example: If you want to place your engagement message on https://office.erxes.io/pricing - then write /pricing[0m',
  [31m[Line 88][0m [[36mJS/TS String Literal[0m] Found: "[1mCountry[0m"
     [33m→[0m title: '[1m[31mCountry[0m',
  [31m[Line 90][0m [[36mJS/TS String Literal[0m] Found: "[1mLocates visitor’s physical location in country resolution. Insert only Country codes in value field as appointed in ISO-3166 standard, i.e “gb” for Great Britain, “fr” for French, “de” for German, “jp” for Japanese etc.[0m"
     [33m→[0m '[1m[31mLocates visitor’s physical location in country resolution. Insert only Country codes in value field as appointed in ISO-3166 standard, i.e “gb” for Great Britain, “fr” for French, “de” for German, “jp” for Japanese etc.[0m',
  [31m[Line 94][0m [[36mJS/TS String Literal[0m] Found: "[1mCity[0m"
     [33m→[0m title: '[1m[31mCity[0m',
  [31m[Line 96][0m [[36mJS/TS String Literal[0m] Found: "[1mLocates visitor’s physical location in city resolution. Write a name of the City in value field. If Country’s not set, every city with same name will meet the criteria.[0m"
     [33m→[0m '[1m[31mLocates visitor’s physical location in city resolution. Write a name of the City in value field. If Country’s not set, every city with same name will meet the criteria.[0m',
  [31m[Line 97][0m [[36mJS/TS String Literal[0m] Found: "[1mLondon[0m"
     [33m→[0m placeholder: '[1m[31mLondon[0m',
  [31m[Line 100][0m [[36mJS/TS String Literal[0m] Found: "[1mNumber of visits[0m"
     [33m→[0m title: '[1m[31mNumber of visits[0m',
  [31m[Line 101][0m [[36mJS/TS String Literal[0m] Found: "[1mCounts individual visitor’s visiting number.[0m"
     [33m→[0m description: '[1m[31mCounts individual visitor’s visiting number.[0m',
  [31m[Line 107][0m [[36mJS/TS String Literal[0m] Found: "[1mSegment[0m"
     [33m→[0m segment: '[1m[31mSegment[0m',
  [31m[Line 108][0m [[36mJS/TS String Literal[0m] Found: "[1mTag[0m"
     [33m→[0m tag: '[1m[31mTag[0m',
  [31m[Line 109][0m [[36mJS/TS String Literal[0m] Found: "[1mBrand[0m"
     [33m→[0m brand: '[1m[31mBrand[0m',
  [31m[Line 113][0m [[36mJS/TS String Literal[0m] Found: "[1mSent[0m"
     [33m→[0m { value: 'sent', label: '[1m[31mSent[0m' },
  [31m[Line 114][0m [[36mJS/TS String Literal[0m] Found: "[1mDraft[0m"
     [33m→[0m { value: 'draft', label: '[1m[31mDraft[0m' },
  [31m[Line 115][0m [[36mJS/TS String Literal[0m] Found: "[1mPaused[0m"
     [33m→[0m { value: 'paused', label: '[1m[31mPaused[0m' },
  [31m[Line 116][0m [[36mJS/TS String Literal[0m] Found: "[1mSending[0m"
     [33m→[0m { value: 'sending', label: '[1m[31mSending[0m' },
  [31m[Line 117][0m [[36mJS/TS String Literal[0m] Found: "[1mNot Sent[0m"
     [33m→[0m { value: 'notSent', label: '[1m[31mNot Sent[0m' },
  [31m[Line 124][0m [[36mJS/TS String Literal[0m] Found: "[1mSending[0m"
     [33m→[0m sending: { text: '[1m[31mSending[0m', style: 'info' },
  [31m[Line 125][0m [[36mJS/TS String Literal[0m] Found: "[1mSent[0m"
     [33m→[0m completed: { text: '[1m[31mSent[0m', style: 'success' },
  [31m[Line 126][0m [[36mJS/TS String Literal[0m] Found: "[1mNot Sent[0m"
     [33m→[0m failed: { text: '[1m[31mNot Sent[0m', style: 'warning' },
  [31m[Line 130][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail[0m"
     [33m→[0m { value: 'email', label: '[1m[31mEmail[0m' },
  [31m[Line 131][0m [[36mJS/TS String Literal[0m] Found: "[1mMessenger[0m"
     [33m→[0m { value: 'messenger', label: '[1m[31mMessenger[0m' },
  [31m[Line 132][0m [[36mJS/TS String Literal[0m] Found: "[1mNotification[0m"
     [33m→[0m { value: 'notification', label: '[1m[31mNotification[0m' },
  [31m[Line 136][0m [[36mJS/TS String Literal[0m] Found: "[1mAuto[0m"
     [33m→[0m { value: 'auto', label: '[1m[31mAuto[0m' },
  [31m[Line 137][0m [[36mJS/TS String Literal[0m] Found: "[1mManual[0m"
     [33m→[0m { value: 'manual', label: '[1m[31mManual[0m' },
  [31m[Line 145][0m [[36mJS/TS String Literal[0m] Found: "[1mAWS SES Access Key id[0m"
     [33m→[0m label: '[1m[31mAWS SES Access Key id[0m',
  [31m[Line 153][0m [[36mJS/TS String Literal[0m] Found: "[1mAWS SES Secret Access Key[0m"
     [33m→[0m label: '[1m[31mAWS SES Secret Access Key[0m',
  [31m[Line 161][0m [[36mJS/TS String Literal[0m] Found: "[1mAWS Region[0m"
     [33m→[0m label: '[1m[31mAWS Region[0m',
  [31m[Line 169][0m [[36mJS/TS String Literal[0m] Found: "[1mAWS SES Config Set[0m"
     [33m→[0m label: '[1m[31mAWS SES Config Set[0m',
  [31m[Line 177][0m [[36mJS/TS String Literal[0m] Found: "[1mUnverified emails limit[0m"
     [33m→[0m label: '[1m[31mUnverified emails limit[0m',
  [31m[Line 184][0m [[36mJS/TS String Literal[0m] Found: "[1mAllowed email skip limit[0m"
     [33m→[0m label: '[1m[31mAllowed email skip limit[0m',
  [31m[Line 186][0m [[36mJS/TS String Literal[0m] Found: "[1mThe number of times that each customer can skip to open or click campaign emails. If this limit is exceeded, then the customer will automatically set to unsubscribed mode.[0m"
     [33m→[0m '[1m[31mThe number of times that each customer can skip to open or click campaign emails. If this limit is exceeded, then the customer will automatically set to unsubscribed mode.[0m',
  [31m[Line 192][0m [[36mJS/TS String Literal[0m] Found: "[1mCustomer limit per auto SMS campaign[0m"
     [33m→[0m label: '[1m[31mCustomer limit per auto SMS campaign[0m',
  [31m[Line 194][0m [[36mJS/TS String Literal[0m] Found: "[1mThe maximum number of customers that can receive auto SMS campaign per each runtime.[0m"
     [33m→[0m '[1m[31mThe maximum number of customers that can receive auto SMS campaign per each runtime.[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/context/BroadcastMemberContext.ts[0m
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1museBroadcastMemberContext must be used within a BroadcastMemberProvider[0m"
     [33m→[0m '[1m[31museBroadcastMemberContext must be used within a BroadcastMemberProvider[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/context/BroadcastMemberInlineContext.ts[0m
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1museBroadcastMemberInlineContext must be used within a BroadcastMemberInlineProvider[0m"
     [33m→[0m '[1m[31museBroadcastMemberInlineContext must be used within a BroadcastMemberInlineProvider[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/hooks/useBroadcastConfig.ts[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mConfigs[0m"
     [33m→[0m refetchQueries: ['[1m[31mConfigs[0m'],
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mAre you sure you want to update file configs?[0m"
     [33m→[0m message: '[1m[31mAre you sure you want to update file configs?[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/hooks/useBroadcastMemberAdd.ts[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/broadcast/hooks/useBroadcastMemberRemove.ts[0m
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail removed successfully[0m"
     [33m→[0m title: '[1m[31mEmail removed successfully[0m',
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalAddSheet.tsx[0m
  [31m[Line 74][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess![0m"
     [33m→[0m title: '[1m[31mSuccess![0m',
  [31m[Line 76][0m [[36mJS/TS String Literal[0m] Found: "[1mClient portal created successfully[0m"
     [33m→[0m description: '[1m[31mClient portal created successfully[0m',
  [31m[Line 90][0m [[36mJSX Plain Text[0m] Found: "[1mCreate client portal[0m"
     [33m→[0m <IconPlus />
  [31m[Line 104][0m [[36mJSX Plain Text[0m] Found: "[1mCreate client portal[0m"
     [33m→[0m <Sheet.Title>[1m[31mCreate client portal[0m</Sheet.Title>
  [31m[Line 115][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m >
  [31m[Line 118][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate[0m"
     [33m→[0m <Button type="submit">{loading ? <Spinner /> : '[1m[31mCreate[0m'}</Button>

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalColumns.tsx[0m
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mName[0m"
     [33m→[0m header: () => <RecordTable.InlineHead icon={IconAlignLeft} label="[1m[31mName[0m" />,
  [31m[Line 63][0m [[36mJS/TS String Literal[0m] Found: "[1mDomain[0m"
     [33m→[0m header: () => <RecordTable.InlineHead icon={IconBrowser} label="[1m[31mDomain[0m" />,
  [31m[Line 74][0m [[36mJS/TS String Literal[0m] Found: "[1mToken[0m"
     [33m→[0m header: () => <RecordTable.InlineHead icon={IconKey} label="[1m[31mToken[0m" />,
  [31m[Line 81][0m [[36mJS/TS String Literal[0m] Found: "[1mCopied to clipboard[0m"
     [33m→[0m toast({ title: '[1m[31mCopied to clipboard[0m' });
  [31m[Line 111][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated At[0m"
     [33m→[0m <RecordTable.InlineHead icon={IconCalendar} label="[1m[31mCreated At[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalCreateForm.tsx[0m
  [31m[Line 15][0m [[36mJSX Plain Text[0m] Found: "[1mClient portal name[0m"
     [33m→[0m <Form.Label>[1m[31mClient portal name[0m</Form.Label>

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetail2FA.tsx[0m
  [31m[Line 79][0m [[36mJSX Plain Text[0m] Found: "[1mEnable 2FA[0m"
     [33m→[0m <Label variant="peer" htmlFor="enable2FA">
  [31m[Line 94][0m [[36mJSX Plain Text[0m] Found: "[1mEmail[0m"
     [33m→[0m <Tabs.Trigger value="email">[1m[31mEmail[0m</Tabs.Trigger>
  [31m[Line 95][0m [[36mJSX Plain Text[0m] Found: "[1mSMS/Phone[0m"
     [33m→[0m <Tabs.Trigger value="sms">[1m[31mSMS/Phone[0m</Tabs.Trigger>
  [31m[Line 105][0m [[36mJSX Plain Text[0m] Found: "[1mEmail Subject[0m"
     [33m→[0m <Form.Label>[1m[31mEmail Subject[0m</Form.Label>
  [31m[Line 109][0m [[36mJSX Plain Text[0m] Found: "[1m2FA email subject[0m"
     [33m→[0m <Form.Description>[1m[31m2FA email subject[0m</Form.Description>
  [31m[Line 119][0m [[36mJSX Plain Text[0m] Found: "[1mCode Length[0m"
     [33m→[0m <Form.Label>[1m[31mCode Length[0m</Form.Label>
  [31m[Line 130][0m [[36mJSX Plain Text[0m] Found: "[1m2FA code length (4-6 digits)[0m"
     [33m→[0m <Form.Description>
  [31m[Line 142][0m [[36mJSX Plain Text[0m] Found: "[1mMessage Template[0m"
     [33m→[0m <Form.Label>[1m[31mMessage Template[0m</Form.Label>
  [31m[Line 146][0m [[36mJSX Plain Text[0m] Found: "[1mEmail message body with[0m"
     [33m→[0m <Form.Description>
  [31m[Line 158][0m [[36mJSX Plain Text[0m] Found: "[1mExpiration Duration (minutes)[0m"
     [33m→[0m <Form.Label>[1m[31mExpiration Duration (minutes)[0m</Form.Label>
  [31m[Line 169][0m [[36mJSX Plain Text[0m] Found: "[1m2FA code expiration duration in minutes[0m"
     [33m→[0m <Form.Description>
  [31m[Line 186][0m [[36mJSX Plain Text[0m] Found: "[1mSMS Provider[0m"
     [33m→[0m <Form.Label>[1m[31mSMS Provider[0m</Form.Label>
  [31m[Line 194][0m [[36mJSX Plain Text[0m] Found: "[1mSMS provider configuration[0m"
     [33m→[0m <Form.Description>
  [31m[Line 206][0m [[36mJSX Plain Text[0m] Found: "[1mCode Length[0m"
     [33m→[0m <Form.Label>[1m[31mCode Length[0m</Form.Label>
  [31m[Line 217][0m [[36mJSX Plain Text[0m] Found: "[1m2FA code length (4-6 digits)[0m"
     [33m→[0m <Form.Description>
  [31m[Line 229][0m [[36mJSX Plain Text[0m] Found: "[1mMessage Template[0m"
     [33m→[0m <Form.Label>[1m[31mMessage Template[0m</Form.Label>
  [31m[Line 233][0m [[36mJSX Plain Text[0m] Found: "[1mSMS message body with[0m"
     [33m→[0m <Form.Description>
  [31m[Line 245][0m [[36mJSX Plain Text[0m] Found: "[1mExpiration Duration (minutes)[0m"
     [33m→[0m <Form.Label>[1m[31mExpiration Duration (minutes)[0m</Form.Label>
  [31m[Line 256][0m [[36mJSX Plain Text[0m] Found: "[1m2FA code expiration duration in minutes[0m"
     [33m→[0m <Form.Description>
  [31m[Line 274][0m [[36mJS/TS String Literal[0m] Found: "[1mw-auto flex-none mr-2[0m"
     [33m→[0m <Spinner containerClassName="[1m[31mw-auto flex-none mr-2[0m" />
  [31m[Line 275][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m )}

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetail3rdPartyAuths.tsx[0m
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mThird Party Authentication[0m"
     [33m→[0m <InfoCard title="[1m[31mThird Party Authentication[0m">
  [31m[Line 24][0m [[36mJSX Plain Text[0m] Found: "[1mGoogle[0m"
     [33m→[0m <ToggleGroup.Item value="google" className="flex-auto">
  [31m[Line 27][0m [[36mJSX Plain Text[0m] Found: "[1mFacebook[0m"
     [33m→[0m <ToggleGroup.Item value="facebook" className="flex-auto">
  [31m[Line 30][0m [[36mJSX Plain Text[0m] Found: "[1mSocialPay[0m"
     [33m→[0m <ToggleGroup.Item value="socialpay" className="flex-auto">
  [31m[Line 33][0m [[36mJSX Plain Text[0m] Found: "[1mToki[0m"
     [33m→[0m <ToggleGroup.Item value="toki" className="flex-auto">

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetailAuth.tsx[0m
  [31m[Line 154][0m [[36mJS/TS String Literal[0m] Found: "[1mAuthentication Token[0m"
     [33m→[0m <InfoCard title="[1m[31mAuthentication Token[0m">
  [31m[Line 164][0m [[36mJSX Plain Text[0m] Found: "[1mToken Settings[0m"
     [33m→[0m <ToggleGroup.Item value="token" className="flex-auto">
  [31m[Line 167][0m [[36mJSX Plain Text[0m] Found: "[1mEmail[0m"
     [33m→[0m <ToggleGroup.Item value="email" className="flex-auto">
  [31m[Line 170][0m [[36mJSX Plain Text[0m] Found: "[1mPhone[0m"
     [33m→[0m <ToggleGroup.Item value="phone" className="flex-auto">
  [31m[Line 173][0m [[36mJSX Plain Text[0m] Found: "[1mOTP Resend[0m"
     [33m→[0m <ToggleGroup.Item value="resend" className="flex-auto">
  [31m[Line 195][0m [[36mJSX Plain Text[0m] Found: "[1mToken Pass Method[0m"
     [33m→[0m <Form.Label className="block">
  [31m[Line 205][0m [[36mJSX Plain Text[0m] Found: "[1mHeader[0m"
     [33m→[0m <ToggleGroup.Item value="header" className="flex-auto">
  [31m[Line 208][0m [[36mJSX Plain Text[0m] Found: "[1mCookie[0m"
     [33m→[0m <ToggleGroup.Item value="cookie" className="flex-auto">
  [31m[Line 222][0m [[36mJSX Plain Text[0m] Found: "[1mToken expiration duration (days)[0m"
     [33m→[0m <Form.Label>
  [31m[Line 244][0m [[36mJSX Plain Text[0m] Found: "[1mRefresh Token expiration duration (days)[0m"
     [33m→[0m <Form.Label>
  [31m[Line 271][0m [[36mJSX Plain Text[0m] Found: "[1mUpdate[0m"
     [33m→[0m {loading && <Spinner />}
  [31m[Line 297][0m [[36mJSX Plain Text[0m] Found: "[1mEnable Email Verification[0m"
     [33m→[0m <Form.Label variant="peer">
  [31m[Line 315][0m [[36mJSX Plain Text[0m] Found: "[1mEnable Passwordless Login[0m"
     [33m→[0m <Form.Label variant="peer">
  [31m[Line 327][0m [[36mJSX Plain Text[0m] Found: "[1mEmail Subject[0m"
     [33m→[0m <Form.Label>[1m[31mEmail Subject[0m</Form.Label>
  [31m[Line 331][0m [[36mJSX Plain Text[0m] Found: "[1mOTP email subject[0m"
     [33m→[0m <Form.Description>[1m[31mOTP email subject[0m</Form.Description>
  [31m[Line 341][0m [[36mJSX Plain Text[0m] Found: "[1mCode Length[0m"
     [33m→[0m <Form.Label>[1m[31mCode Length[0m</Form.Label>
  [31m[Line 352][0m [[36mJSX Plain Text[0m] Found: "[1mOTP code length (4-6 digits)[0m"
     [33m→[0m <Form.Description>
  [31m[Line 364][0m [[36mJSX Plain Text[0m] Found: "[1mMessage Template[0m"
     [33m→[0m <Form.Label>[1m[31mMessage Template[0m</Form.Label>
  [31m[Line 368][0m [[36mJSX Plain Text[0m] Found: "[1mEmail message body with[0m"
     [33m→[0m <Form.Description>
  [31m[Line 380][0m [[36mJSX Plain Text[0m] Found: "[1mExpiration Duration (minutes)[0m"
     [33m→[0m <Form.Label>[1m[31mExpiration Duration (minutes)[0m</Form.Label>
  [31m[Line 391][0m [[36mJSX Plain Text[0m] Found: "[1mOTP expiration duration in minutes[0m"
     [33m→[0m <Form.Description>
  [31m[Line 406][0m [[36mJS/TS String Literal[0m] Found: "[1mw-auto flex-none mr-2[0m"
     [33m→[0m <Spinner containerClassName="[1m[31mw-auto flex-none mr-2[0m" />
  [31m[Line 407][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m )}
  [31m[Line 432][0m [[36mJSX Plain Text[0m] Found: "[1mEnable Phone Verification[0m"
     [33m→[0m <Form.Label variant="peer">
  [31m[Line 450][0m [[36mJSX Plain Text[0m] Found: "[1mEnable Passwordless Login[0m"
     [33m→[0m <Form.Label variant="peer">
  [31m[Line 462][0m [[36mJSX Plain Text[0m] Found: "[1mSMS Provider[0m"
     [33m→[0m <Form.Label>[1m[31mSMS Provider[0m</Form.Label>
  [31m[Line 469][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect SMS provider[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect SMS provider[0m" />
  [31m[Line 473][0m [[36mJSX Plain Text[0m] Found: "[1mCallPro[0m"
     [33m→[0m <Select.Item value="callPro">[1m[31mCallPro[0m</Select.Item>
  [31m[Line 474][0m [[36mJSX Plain Text[0m] Found: "[1mTwilio[0m"
     [33m→[0m <Select.Item value="twilio">[1m[31mTwilio[0m</Select.Item>
  [31m[Line 477][0m [[36mJSX Plain Text[0m] Found: "[1mSelect the SMS provider to use for sending OTP codes[0m"
     [33m→[0m <Form.Description>
  [31m[Line 489][0m [[36mJSX Plain Text[0m] Found: "[1mCode Length[0m"
     [33m→[0m <Form.Label>[1m[31mCode Length[0m</Form.Label>
  [31m[Line 500][0m [[36mJSX Plain Text[0m] Found: "[1mOTP code length (4-6 digits)[0m"
     [33m→[0m <Form.Description>
  [31m[Line 512][0m [[36mJSX Plain Text[0m] Found: "[1mMessage Template[0m"
     [33m→[0m <Form.Label>[1m[31mMessage Template[0m</Form.Label>
  [31m[Line 516][0m [[36mJSX Plain Text[0m] Found: "[1mSMS message body with[0m"
     [33m→[0m <Form.Description>
  [31m[Line 528][0m [[36mJSX Plain Text[0m] Found: "[1mExpiration Duration (minutes)[0m"
     [33m→[0m <Form.Label>[1m[31mExpiration Duration (minutes)[0m</Form.Label>
  [31m[Line 539][0m [[36mJSX Plain Text[0m] Found: "[1mOTP expiration duration in minutes[0m"
     [33m→[0m <Form.Description>
  [31m[Line 554][0m [[36mJS/TS String Literal[0m] Found: "[1mw-auto flex-none mr-2[0m"
     [33m→[0m <Spinner containerClassName="[1m[31mw-auto flex-none mr-2[0m" />
  [31m[Line 555][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m )}
  [31m[Line 574][0m [[36mJSX Plain Text[0m] Found: "[1mCooldown period (seconds)[0m"
     [33m→[0m <Form.Label>[1m[31mCooldown period (seconds)[0m</Form.Label>
  [31m[Line 590][0m [[36mJSX Plain Text[0m] Found: "[1mMinimum seconds between OTP resend requests[0m"
     [33m→[0m <Form.Description>
  [31m[Line 602][0m [[36mJSX Plain Text[0m] Found: "[1mMax attempts per hour[0m"
     [33m→[0m <Form.Label>[1m[31mMax attempts per hour[0m</Form.Label>
  [31m[Line 618][0m [[36mJSX Plain Text[0m] Found: "[1mMaximum OTP resend requests per hour[0m"
     [33m→[0m <Form.Description>
  [31m[Line 633][0m [[36mJS/TS String Literal[0m] Found: "[1mw-auto flex-none mr-2[0m"
     [33m→[0m <Spinner containerClassName="[1m[31mw-auto flex-none mr-2[0m" />
  [31m[Line 634][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m )}

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetailAuthLogics.tsx[0m
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mAccount Security & Verification[0m"
     [33m→[0m <InfoCard title="[1m[31mAccount Security & Verification[0m">
  [31m[Line 23][0m [[36mJSX Plain Text[0m] Found: "[1mTwo-factor authentication[0m"
     [33m→[0m <ToggleGroup.Item value="two-factor" className="flex-auto">
  [31m[Line 27][0m [[36mJSX Plain Text[0m] Found: "[1mReset password email[0m"
     [33m→[0m <ToggleGroup.Item value="reset" className="flex-auto">
  [31m[Line 30][0m [[36mJSX Plain Text[0m] Found: "[1mManual verification[0m"
     [33m→[0m <ToggleGroup.Item value="manual" className="flex-auto">

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetailFacebook.tsx[0m
  [31m[Line 52][0m [[36mJSX Plain Text[0m] Found: "[1mFacebook App ID[0m"
     [33m→[0m <Form.Label>[1m[31mFacebook App ID[0m</Form.Label>
  [31m[Line 54][0m [[36mJSX Plain Text[0m] Found: "[1mYour Facebook App ID. Get it from
                https://developers.facebook.com/[0m"
     [33m→[0m <Form.Description>
  [31m[Line 68][0m [[36mJS/TS String Literal[0m] Found: "[1mw-auto flex-none[0m"
     [33m→[0m {loading && <Spinner containerClassName="[1m[31mw-auto flex-none[0m" />}
  [31m[Line 68][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m {loading && <Spinner containerClassName="w-auto flex-none" />}

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetailFirebase.tsx[0m
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mFirebase Configuration[0m"
     [33m→[0m <InfoCard title="[1m[31mFirebase Configuration[0m">
  [31m[Line 58][0m [[36mJSX Plain Text[0m] Found: "[1mEnable push notifications (Firebase)[0m"
     [33m→[0m <Form.Label variant="peer">
  [31m[Line 62][0m [[36mJSX Plain Text[0m] Found: "[1mSend push notifications to client portal users via FCM[0m"
     [33m→[0m <Form.Description>
  [31m[Line 74][0m [[36mJSX Plain Text[0m] Found: "[1mService account key[0m"
     [33m→[0m <Form.Label>[1m[31mService account key[0m</Form.Label>
  [31m[Line 83][0m [[36mJSX Plain Text[0m] Found: "[1mPaste the JSON from Firebase Console → Project settings →
                    Service accounts → Generate new private key[0m"
     [33m→[0m <Form.Description>
  [31m[Line 97][0m [[36mJS/TS String Literal[0m] Found: "[1mw-auto flex-none[0m"
     [33m→[0m {loading && <Spinner containerClassName="[1m[31mw-auto flex-none[0m" />}
  [31m[Line 97][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m {loading && <Spinner containerClassName="w-auto flex-none" />}

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetailGoogle.tsx[0m
  [31m[Line 59][0m [[36mJSX Plain Text[0m] Found: "[1mGoogle Client ID[0m"
     [33m→[0m <Form.Label>[1m[31mGoogle Client ID[0m</Form.Label>
  [31m[Line 63][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter Google Client ID[0m"
     [33m→[0m placeholder="[1m[31mEnter Google Client ID[0m"
  [31m[Line 76][0m [[36mJSX Plain Text[0m] Found: "[1mGoogle Client Secret[0m"
     [33m→[0m <Form.Label>[1m[31mGoogle Client Secret[0m</Form.Label>
  [31m[Line 81][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter Google Client Secret[0m"
     [33m→[0m placeholder="[1m[31mEnter Google Client Secret[0m"
  [31m[Line 95][0m [[36mJSX Plain Text[0m] Found: "[1mGoogle Credentials (JSON, optional)[0m"
     [33m→[0m <Form.Label>[1m[31mGoogle Credentials (JSON, optional)[0m</Form.Label>
  [31m[Line 99][0m [[36mJS/TS String Literal[0m] Found: "[1mPaste Google Credentials JSON[0m"
     [33m→[0m placeholder="[1m[31mPaste Google Credentials JSON[0m"
  [31m[Line 112][0m [[36mJSX Plain Text[0m] Found: "[1mGoogle Redirect URI[0m"
     [33m→[0m <Form.Label>[1m[31mGoogle Redirect URI[0m</Form.Label>
  [31m[Line 116][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter Google Redirect URI[0m"
     [33m→[0m placeholder="[1m[31mEnter Google Redirect URI[0m"
  [31m[Line 130][0m [[36mJS/TS String Literal[0m] Found: "[1mw-auto flex-none[0m"
     [33m→[0m {loading && <Spinner containerClassName="[1m[31mw-auto flex-none[0m" />}
  [31m[Line 130][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m {loading && <Spinner containerClassName="w-auto flex-none" />}

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetailHeader.tsx[0m
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1mClient portal[0m"
     [33m→[0m <IconTerminal2 />

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetailManual.tsx[0m
  [31m[Line 53][0m [[36mJSX Plain Text[0m] Found: "[1mEnable manual verification[0m"
     [33m→[0m <Label variant="peer" htmlFor="enableManualVerification">
  [31m[Line 68][0m [[36mJSX Plain Text[0m] Found: "[1mTeam Members[0m"
     [33m→[0m <Form.Label>[1m[31mTeam Members[0m</Form.Label>
  [31m[Line 73][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect team members[0m"
     [33m→[0m placeholder="[1m[31mSelect team members[0m"
  [31m[Line 75][0m [[36mJSX Plain Text[0m] Found: "[1mSelect team members who can verify[0m"
     [33m→[0m <Form.Description>
  [31m[Line 94][0m [[36mJSX Plain Text[0m] Found: "[1mVerify customer[0m"
     [33m→[0m <Form.Label variant="peer">[1m[31mVerify customer[0m</Form.Label>
  [31m[Line 112][0m [[36mJSX Plain Text[0m] Found: "[1mVerify company[0m"
     [33m→[0m <Form.Label variant="peer">[1m[31mVerify company[0m</Form.Label>
  [31m[Line 124][0m [[36mJS/TS String Literal[0m] Found: "[1mw-auto flex-none[0m"
     [33m→[0m {loading && <Spinner containerClassName="[1m[31mw-auto flex-none[0m" />}
  [31m[Line 124][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m {loading && <Spinner containerClassName="w-auto flex-none" />}

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetailOTPf.tsx[0m
  [31m[Line 126][0m [[36mJSX Plain Text[0m] Found: "[1mEmail[0m"
     [33m→[0m <Tabs.Trigger value="email">[1m[31mEmail[0m</Tabs.Trigger>
  [31m[Line 127][0m [[36mJSX Plain Text[0m] Found: "[1mSMS/Phone[0m"
     [33m→[0m <Tabs.Trigger value="sms">[1m[31mSMS/Phone[0m</Tabs.Trigger>
  [31m[Line 143][0m [[36mJSX Plain Text[0m] Found: "[1mEnable Email Verification[0m"
     [33m→[0m <Form.Label variant="peer">
  [31m[Line 161][0m [[36mJSX Plain Text[0m] Found: "[1mEnable Passwordless Login[0m"
     [33m→[0m <Form.Label variant="peer">
  [31m[Line 173][0m [[36mJSX Plain Text[0m] Found: "[1mEmail Subject[0m"
     [33m→[0m <Form.Label>[1m[31mEmail Subject[0m</Form.Label>
  [31m[Line 177][0m [[36mJSX Plain Text[0m] Found: "[1mOTP email subject[0m"
     [33m→[0m <Form.Description>[1m[31mOTP email subject[0m</Form.Description>
  [31m[Line 187][0m [[36mJSX Plain Text[0m] Found: "[1mCode Length[0m"
     [33m→[0m <Form.Label>[1m[31mCode Length[0m</Form.Label>
  [31m[Line 198][0m [[36mJSX Plain Text[0m] Found: "[1mOTP code length (4-6 digits)[0m"
     [33m→[0m <Form.Description>
  [31m[Line 210][0m [[36mJSX Plain Text[0m] Found: "[1mMessage Template[0m"
     [33m→[0m <Form.Label>[1m[31mMessage Template[0m</Form.Label>
  [31m[Line 214][0m [[36mJSX Plain Text[0m] Found: "[1mEmail message body with[0m"
     [33m→[0m <Form.Description>
  [31m[Line 226][0m [[36mJSX Plain Text[0m] Found: "[1mExpiration Duration (minutes)[0m"
     [33m→[0m <Form.Label>[1m[31mExpiration Duration (minutes)[0m</Form.Label>
  [31m[Line 237][0m [[36mJSX Plain Text[0m] Found: "[1mOTP expiration duration in minutes[0m"
     [33m→[0m <Form.Description>
  [31m[Line 260][0m [[36mJSX Plain Text[0m] Found: "[1mEnable Phone Verification[0m"
     [33m→[0m <Form.Label variant="peer">
  [31m[Line 278][0m [[36mJSX Plain Text[0m] Found: "[1mEnable Passwordless Login[0m"
     [33m→[0m <Form.Label variant="peer">
  [31m[Line 290][0m [[36mJSX Plain Text[0m] Found: "[1mSMS Provider[0m"
     [33m→[0m <Form.Label>[1m[31mSMS Provider[0m</Form.Label>
  [31m[Line 297][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect SMS provider[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect SMS provider[0m" />
  [31m[Line 301][0m [[36mJSX Plain Text[0m] Found: "[1mCallPro[0m"
     [33m→[0m <Select.Item value="callPro">[1m[31mCallPro[0m</Select.Item>
  [31m[Line 302][0m [[36mJSX Plain Text[0m] Found: "[1mTwilio[0m"
     [33m→[0m <Select.Item value="twilio">[1m[31mTwilio[0m</Select.Item>
  [31m[Line 305][0m [[36mJSX Plain Text[0m] Found: "[1mSelect the SMS provider to use for sending OTP codes[0m"
     [33m→[0m <Form.Description>
  [31m[Line 317][0m [[36mJSX Plain Text[0m] Found: "[1mCode Length[0m"
     [33m→[0m <Form.Label>[1m[31mCode Length[0m</Form.Label>
  [31m[Line 328][0m [[36mJSX Plain Text[0m] Found: "[1mOTP code length (4-6 digits)[0m"
     [33m→[0m <Form.Description>
  [31m[Line 340][0m [[36mJSX Plain Text[0m] Found: "[1mMessage Template[0m"
     [33m→[0m <Form.Label>[1m[31mMessage Template[0m</Form.Label>
  [31m[Line 344][0m [[36mJSX Plain Text[0m] Found: "[1mSMS message body with[0m"
     [33m→[0m <Form.Description>
  [31m[Line 356][0m [[36mJSX Plain Text[0m] Found: "[1mExpiration Duration (minutes)[0m"
     [33m→[0m <Form.Label>[1m[31mExpiration Duration (minutes)[0m</Form.Label>
  [31m[Line 367][0m [[36mJSX Plain Text[0m] Found: "[1mOTP expiration duration in minutes[0m"
     [33m→[0m <Form.Description>
  [31m[Line 385][0m [[36mJS/TS String Literal[0m] Found: "[1mw-auto flex-none mr-2[0m"
     [33m→[0m <Spinner containerClassName="[1m[31mw-auto flex-none mr-2[0m" />
  [31m[Line 386][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m )}

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetailPasswordVerification.tsx[0m
  [31m[Line 58][0m [[36mJSX Plain Text[0m] Found: "[1mVerify by link or code[0m"
     [33m→[0m <Form.Label>[1m[31mVerify by link or code[0m</Form.Label>
  [31m[Line 66][0m [[36mJSX Plain Text[0m] Found: "[1mLink[0m"
     [33m→[0m <ToggleGroup.Item value="link" className="flex-auto">
  [31m[Line 69][0m [[36mJSX Plain Text[0m] Found: "[1mCode[0m"
     [33m→[0m <ToggleGroup.Item value="code" className="flex-auto">
  [31m[Line 82][0m [[36mJSX Plain Text[0m] Found: "[1mEmail Subject[0m"
     [33m→[0m <Form.Label>[1m[31mEmail Subject[0m</Form.Label>
  [31m[Line 84][0m [[36mJSX Plain Text[0m] Found: "[1mThe subject for the reset password email (optional)[0m"
     [33m→[0m <Form.Description>
  [31m[Line 96][0m [[36mJSX Plain Text[0m] Found: "[1mEmail Content[0m"
     [33m→[0m <Form.Label>[1m[31mEmail Content[0m</Form.Label>
  [31m[Line 102][0m [[36mJSX Plain Text[0m] Found: "[1mContent of the reset password email[0m"
     [33m→[0m <Form.Description>
  [31m[Line 116][0m [[36mJS/TS String Literal[0m] Found: "[1mw-auto flex-none[0m"
     [33m→[0m {loading && <Spinner containerClassName="[1m[31mw-auto flex-none[0m" />}
  [31m[Line 116][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m {loading && <Spinner containerClassName="w-auto flex-none" />}

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetailSMSProviders.tsx[0m
  [31m[Line 70][0m [[36mJS/TS String Literal[0m] Found: "[1mSMS Providers Configuration[0m"
     [33m→[0m <InfoCard title="[1m[31mSMS Providers Configuration[0m">
  [31m[Line 82][0m [[36mJSX Plain Text[0m] Found: "[1mCallPro[0m"
     [33m→[0m <Tabs.Trigger value="callPro">[1m[31mCallPro[0m</Tabs.Trigger>
  [31m[Line 83][0m [[36mJSX Plain Text[0m] Found: "[1mTwilio[0m"
     [33m→[0m <Tabs.Trigger value="twilio">[1m[31mTwilio[0m</Tabs.Trigger>
  [31m[Line 93][0m [[36mJSX Plain Text[0m] Found: "[1mPhone[0m"
     [33m→[0m <Form.Label>[1m[31mPhone[0m</Form.Label>
  [31m[Line 97][0m [[36mJSX Plain Text[0m] Found: "[1mCallPro phone number[0m"
     [33m→[0m <Form.Description>
  [31m[Line 109][0m [[36mJSX Plain Text[0m] Found: "[1mToken[0m"
     [33m→[0m <Form.Label>[1m[31mToken[0m</Form.Label>
  [31m[Line 117][0m [[36mJSX Plain Text[0m] Found: "[1mCallPro authentication token[0m"
     [33m→[0m <Form.Description>
  [31m[Line 134][0m [[36mJSX Plain Text[0m] Found: "[1mAPI Key[0m"
     [33m→[0m <Form.Label>[1m[31mAPI Key[0m</Form.Label>
  [31m[Line 142][0m [[36mJSX Plain Text[0m] Found: "[1mTwilio API Key[0m"
     [33m→[0m <Form.Description>[1m[31mTwilio API Key[0m</Form.Description>
  [31m[Line 152][0m [[36mJSX Plain Text[0m] Found: "[1mAPI Secret[0m"
     [33m→[0m <Form.Label>[1m[31mAPI Secret[0m</Form.Label>
  [31m[Line 160][0m [[36mJSX Plain Text[0m] Found: "[1mTwilio API Secret[0m"
     [33m→[0m <Form.Description>[1m[31mTwilio API Secret[0m</Form.Description>
  [31m[Line 170][0m [[36mJSX Plain Text[0m] Found: "[1mAPI URL[0m"
     [33m→[0m <Form.Label>[1m[31mAPI URL[0m</Form.Label>
  [31m[Line 174][0m [[36mJSX Plain Text[0m] Found: "[1mTwilio API URL (optional)[0m"
     [33m→[0m <Form.Description>
  [31m[Line 191][0m [[36mJS/TS String Literal[0m] Found: "[1mw-auto flex-none[0m"
     [33m→[0m {loading && <Spinner containerClassName="[1m[31mw-auto flex-none[0m" />}
  [31m[Line 191][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m {loading && <Spinner containerClassName="w-auto flex-none" />}

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetailSocialPay.tsx[0m
  [31m[Line 54][0m [[36mJSX Plain Text[0m] Found: "[1mSocialPay Public Key[0m"
     [33m→[0m <Form.Label>[1m[31mSocialPay Public Key[0m</Form.Label>
  [31m[Line 56][0m [[36mJSX Plain Text[0m] Found: "[1mYour SocialPay public key (provided by SocialPay)[0m"
     [33m→[0m <Form.Description>
  [31m[Line 68][0m [[36mJSX Plain Text[0m] Found: "[1mSocialPay Cert ID[0m"
     [33m→[0m <Form.Label>[1m[31mSocialPay Cert ID[0m</Form.Label>
  [31m[Line 70][0m [[36mJSX Plain Text[0m] Found: "[1mYour SocialPay CertID (provided by SocialPay)[0m"
     [33m→[0m <Form.Description>
  [31m[Line 83][0m [[36mJS/TS String Literal[0m] Found: "[1mw-auto flex-none[0m"
     [33m→[0m {loading && <Spinner containerClassName="[1m[31mw-auto flex-none[0m" />}
  [31m[Line 83][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m {loading && <Spinner containerClassName="w-auto flex-none" />}

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetailTest.tsx[0m
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mTest Account[0m"
     [33m→[0m <InfoCard title="[1m[31mTest Account[0m">
  [31m[Line 67][0m [[36mJSX Plain Text[0m] Found: "[1mEnable test user[0m"
     [33m→[0m <Form.Label>[1m[31mEnable test user[0m</Form.Label>
  [31m[Line 84][0m [[36mJSX Plain Text[0m] Found: "[1mEmail[0m"
     [33m→[0m <Form.Label>[1m[31mEmail[0m</Form.Label>
  [31m[Line 97][0m [[36mJSX Plain Text[0m] Found: "[1mPhone[0m"
     [33m→[0m <Form.Label>[1m[31mPhone[0m</Form.Label>
  [31m[Line 120][0m [[36mJSX Plain Text[0m] Found: "[1mPassword[0m"
     [33m→[0m <Form.Label>[1m[31mPassword[0m</Form.Label>
  [31m[Line 146][0m [[36mJS/TS String Literal[0m] Found: "[1mw-auto flex-none[0m"
     [33m→[0m {loading && <Spinner containerClassName="[1m[31mw-auto flex-none[0m" />}
  [31m[Line 146][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m {loading && <Spinner containerClassName="w-auto flex-none" />}

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetailToken.tsx[0m
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mCopied to clipboard[0m"
     [33m→[0m title: '[1m[31mCopied to clipboard[0m',
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mClient Portal Token[0m"
     [33m→[0m <InfoCard title="[1m[31mClient Portal Token[0m">
  [31m[Line 23][0m [[36mJSX Plain Text[0m] Found: "[1mCopy Token[0m"
     [33m→[0m <IconCopy className="w-4 h-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetailToki.tsx[0m
  [31m[Line 56][0m [[36mJSX Plain Text[0m] Found: "[1mToki Merchant ID[0m"
     [33m→[0m <Form.Label>[1m[31mToki Merchant ID[0m</Form.Label>
  [31m[Line 58][0m [[36mJSX Plain Text[0m] Found: "[1mYour Toki Client ID (provided by Toki)[0m"
     [33m→[0m <Form.Description>
  [31m[Line 70][0m [[36mJSX Plain Text[0m] Found: "[1mToki API Key[0m"
     [33m→[0m <Form.Label>[1m[31mToki API Key[0m</Form.Label>
  [31m[Line 72][0m [[36mJSX Plain Text[0m] Found: "[1mYour Toki API Key (provided by Toki)[0m"
     [33m→[0m <Form.Description>
  [31m[Line 84][0m [[36mJSX Plain Text[0m] Found: "[1mToki Username[0m"
     [33m→[0m <Form.Label>[1m[31mToki Username[0m</Form.Label>
  [31m[Line 86][0m [[36mJSX Plain Text[0m] Found: "[1mYour Toki Username (provided by Toki)[0m"
     [33m→[0m <Form.Description>
  [31m[Line 98][0m [[36mJSX Plain Text[0m] Found: "[1mToki Password[0m"
     [33m→[0m <Form.Label>[1m[31mToki Password[0m</Form.Label>
  [31m[Line 100][0m [[36mJSX Plain Text[0m] Found: "[1mYour Toki Password (provided by Toki)[0m"
     [33m→[0m <Form.Description>
  [31m[Line 113][0m [[36mJS/TS String Literal[0m] Found: "[1mw-auto flex-none[0m"
     [33m→[0m {loading && <Spinner containerClassName="[1m[31mw-auto flex-none[0m" />}
  [31m[Line 113][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m {loading && <Spinner containerClassName="w-auto flex-none" />}

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetails.tsx[0m
  [31m[Line 31][0m [[36mJSX Plain Text[0m] Found: "[1mError:[0m"
     [33m→[0m <div className="flex items-center justify-center h-full text-destructive">

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalDetailsGeneral.tsx[0m
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mGeneral[0m"
     [33m→[0m <InfoCard title="[1m[31mGeneral[0m">
  [31m[Line 51][0m [[36mJSX Plain Text[0m] Found: "[1mName[0m"
     [33m→[0m <Form.Label>[1m[31mName[0m</Form.Label>
  [31m[Line 62][0m [[36mJSX Plain Text[0m] Found: "[1mDomain[0m"
     [33m→[0m <Form.Label>[1m[31mDomain[0m</Form.Label>
  [31m[Line 73][0m [[36mJSX Plain Text[0m] Found: "[1mDescription[0m"
     [33m→[0m <Form.Label>[1m[31mDescription[0m</Form.Label>
  [31m[Line 90][0m [[36mJS/TS String Literal[0m] Found: "[1mw-auto flex-none[0m"
     [33m→[0m {loading && <Spinner containerClassName="[1m[31mw-auto flex-none[0m" />}
  [31m[Line 90][0m [[36mJSX Plain Text[0m] Found: "[1mUpdate[0m"
     [33m→[0m {loading && <Spinner containerClassName="w-auto flex-none" />}

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalHeader.tsx[0m
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1mClient portal[0m"
     [33m→[0m <IconTerminal2 />

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/ClientPortalMoreColumn.tsx[0m
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mClient portal ID is missing[0m"
     [33m→[0m description: '[1m[31mClient portal ID is missing[0m',
  [31m[Line 41][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete "[0m${name}"?`,
  [31m[Line 46][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mClient portal deleted successfully[0m"
     [33m→[0m description: '[1m[31mClient portal deleted successfully[0m',
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 80][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m /> Edit
  [31m[Line 84][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash /> [1m[31mDelete[0m

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/components/client-portal-command-bar/delete/ClientPortalRemove.tsx[0m
  [31m[Line 25][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${clientPortalIds.length} selected client portal?`,
  [31m[Line 25][0m [[36mTemplate Literal String[0m] Found: "[1mselected client portal?[0m"
     [33m→[0m message: `Are you sure you want to delete the ${clientPortalIds.length} [1m[31mselected client portal?[0m`,
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mClient portal deleted successfully[0m"
     [33m→[0m description: '[1m[31mClient portal deleted successfully[0m',
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 47][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/constants/clientPortalEditSchema.ts[0m
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mOTP must be a number[0m"
     [33m→[0m .regex(/^\d+$/, '[1m[31mOTP must be a number[0m')
  [31m[Line 139][0m [[36mJS/TS String Literal[0m] Found: "[1mService account key is required when Firebase is enabled[0m"
     [33m→[0m message: '[1m[31mService account key is required when Firebase is enabled[0m',
  [31m[Line 154][0m [[36mJS/TS String Literal[0m] Found: "[1mService account key must be valid JSON[0m"
     [33m→[0m message: '[1m[31mService account key must be valid JSON[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/hooks/useCreateClientPortal.ts[0m
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/client-portal/hooks/useUpdateClientPortal.ts[0m
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mClient portal updated successfully[0m"
     [33m→[0m description: '[1m[31mClient portal updated successfully[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/components/AddCPUserForm.tsx[0m
  [31m[Line 64][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: t('error', { defaultValue: '[1m[31mError[0m' }),
  [31m[Line 75][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: t('success', { defaultValue: '[1m[31mSuccess[0m' }),
  [31m[Line 78][0m [[36mJS/TS String Literal[0m] Found: "[1mClient portal user created[0m"
     [33m→[0m defaultValue: '[1m[31mClient portal user created[0m',
  [31m[Line 108][0m [[36mJS/TS String Literal[0m] Found: "[1mClient portal[0m"
     [33m→[0m {t('clientPortal', { defaultValue: '[1m[31mClient portal[0m' })}
  [31m[Line 119][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect...[0m"
     [33m→[0m defaultValue: '[1m[31mSelect...[0m',
  [31m[Line 146][0m [[36mJS/TS String Literal[0m] Found: "[1mType[0m"
     [33m→[0m {t('type', { defaultValue: '[1m[31mType[0m' })}
  [31m[Line 157][0m [[36mJSX Plain Text[0m] Found: "[1mCustomer[0m"
     [33m→[0m <Select.Item value="customer">[1m[31mCustomer[0m</Select.Item>
  [31m[Line 158][0m [[36mJSX Plain Text[0m] Found: "[1mCompany[0m"
     [33m→[0m <Select.Item value="company">[1m[31mCompany[0m</Select.Item>
  [31m[Line 175][0m [[36mJSX Plain Text[0m] Found: "[1mEmail[0m"
     [33m→[0m <Form.Label>[1m[31mEmail[0m</Form.Label>
  [31m[Line 193][0m [[36mJS/TS String Literal[0m] Found: "[1mPhone[0m"
     [33m→[0m {t('phone', { defaultValue: '[1m[31mPhone[0m' })}
  [31m[Line 212][0m [[36mJS/TS String Literal[0m] Found: "[1mFirst name[0m"
     [33m→[0m {t('firstName', { defaultValue: '[1m[31mFirst name[0m' })}
  [31m[Line 231][0m [[36mJS/TS String Literal[0m] Found: "[1mLast name[0m"
     [33m→[0m {t('lastName', { defaultValue: '[1m[31mLast name[0m' })}
  [31m[Line 250][0m [[36mJS/TS String Literal[0m] Found: "[1mUsername[0m"
     [33m→[0m {t('username', { defaultValue: '[1m[31mUsername[0m' })}
  [31m[Line 269][0m [[36mJS/TS String Literal[0m] Found: "[1mPassword[0m"
     [33m→[0m {t('password', { defaultValue: '[1m[31mPassword[0m' })}
  [31m[Line 288][0m [[36mJS/TS String Literal[0m] Found: "[1mCancel[0m"
     [33m→[0m {t('cancel', { defaultValue: '[1m[31mCancel[0m' })}
  [31m[Line 295][0m [[36mJS/TS String Literal[0m] Found: "[1mSave[0m"
     [33m→[0m {t('save', { defaultValue: '[1m[31mSave[0m' })}

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/components/CPUserAddSheet.tsx[0m
  [31m[Line 53][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd client portal user[0m"
     [33m→[0m defaultValue: '[1m[31mAdd client portal user[0m',
  [31m[Line 76][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd client portal user[0m"
     [33m→[0m defaultValue: '[1m[31mAdd client portal user[0m',
  [31m[Line 81][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate a new client portal user[0m"
     [33m→[0m defaultValue: '[1m[31mCreate a new client portal user[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/components/CPUserRowDeleteButton.tsx[0m
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mAre you sure you want to delete this client portal user?[0m"
     [33m→[0m '[1m[31mAre you sure you want to delete this client portal user?[0m',
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: t('error', { defaultValue: '[1m[31mError[0m' }),
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: t('success', { defaultValue: '[1m[31mSuccess[0m' }),
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mUser deleted[0m"
     [33m→[0m defaultValue: '[1m[31mUser deleted[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/components/ClientPortalUserColumns.tsx[0m
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mName[0m"
     [33m→[0m header: () => <RecordTable.InlineHead icon={IconUser} label="[1m[31mName[0m" />,
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail[0m"
     [33m→[0m header: () => <RecordTable.InlineHead icon={IconMail} label="[1m[31mEmail[0m" />,
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mPhone[0m"
     [33m→[0m header: () => <RecordTable.InlineHead icon={Icon[1m[31mPhone[0m} label="Phone" />,
  [31m[Line 70][0m [[36mJS/TS String Literal[0m] Found: "[1mType[0m"
     [33m→[0m header: () => <RecordTable.InlineHead icon={IconUser} label="[1m[31mType[0m" />,
  [31m[Line 88][0m [[36mJS/TS String Literal[0m] Found: "[1mCompany[0m"
     [33m→[0m <RecordTable.InlineHead icon={IconBuilding} label="[1m[31mCompany[0m" />
  [31m[Line 100][0m [[36mJS/TS String Literal[0m] Found: "[1mClient portal[0m"
     [33m→[0m <RecordTable.InlineHead icon={IconWorld} label="[1m[31mClient portal[0m" />
  [31m[Line 114][0m [[36mJS/TS String Literal[0m] Found: "[1mVerified[0m"
     [33m→[0m header: () => <RecordTable.InlineHead icon={IconCheck} label="[1m[31mVerified[0m" />,
  [31m[Line 120][0m [[36mJS/TS String Literal[0m] Found: "[1mYes[0m"
     [33m→[0m {isVerified ? '[1m[31mYes[0m' : 'No'}
  [31m[Line 120][0m [[36mJS/TS String Literal[0m] Found: "[1mNo[0m"
     [33m→[0m {isVerified ? 'Yes' : '[1m[31mNo[0m'}
  [31m[Line 130][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated[0m"
     [33m→[0m <RecordTable.InlineHead icon={IconCalendar} label="[1m[31mCreated[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/components/ClientPortalUsersFilter.tsx[0m
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m placeholder="[1m[31mFilter[0m"
  [31m[Line 74][0m [[36mJSX Plain Text[0m] Found: "[1mSearch[0m"
     [33m→[0m <Icon[1m[31mSearch[0m />

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/components/ClientPortalUsersRecordTable.tsx[0m
  [31m[Line 24][0m [[36mJSX Plain Text[0m] Found: "[1mNo client portal users[0m"
     [33m→[0m <Label>[1m[31mNo client portal users[0m</Label>

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/components/ClientPortalUsersTotalCount.tsx[0m
  [31m[Line 12][0m [[36mTemplate Literal String[0m] Found: "[1mrecords found[0m"
     [33m→[0m `${totalCount} [1m[31mrecords found[0m`

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/constants/cpUserFormSchema.ts[0m
  [31m[Line 5][0m [[36mJS/TS String Literal[0m] Found: "[1mClient portal is required[0m"
     [33m→[0m clientPortalId: z.string().min(1, '[1m[31mClient portal is required[0m'),
  [31m[Line 8][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid email format[0m"
     [33m→[0m .email('[1m[31mInvalid email format[0m')
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail or phone is required[0m"
     [33m→[0m message: '[1m[31mEmail or phone is required[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/cp-user-detail/components/CPUserDetail.tsx[0m
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mClient Portal User[0m"
     [33m→[0m title={t('title', { defaultValue: '[1m[31mClient Portal User[0m' })}
  [31m[Line 76][0m [[36mJSX Plain Text[0m] Found: "[1mClient Portal User not found[0m"
     [33m→[0m <Empty.Title>[1m[31mClient Portal User not found[0m</Empty.Title>
  [31m[Line 77][0m [[36mJSX Plain Text[0m] Found: "[1mThere seems to be no client portal user with this ID.[0m"
     [33m→[0m <Empty.Description>
  [31m[Line 95][0m [[36mJSX Plain Text[0m] Found: "[1mError[0m"
     [33m→[0m <Empty.Title>[1m[31mError[0m</Empty.Title>

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/cp-user-detail/components/CPUserDetailFields.tsx[0m
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mFirst name[0m"
     [33m→[0m <DataListItem label={t('firstName', { defaultValue: '[1m[31mFirst name[0m' })}>
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd first name[0m"
     [33m→[0m defaultValue: '[1m[31mAdd first name[0m',
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mLast name[0m"
     [33m→[0m <DataListItem label={t('lastName', { defaultValue: '[1m[31mLast name[0m' })}>
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd last name[0m"
     [33m→[0m placeholder={t('addLastName', { defaultValue: '[1m[31mAdd last name[0m' })}
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail[0m"
     [33m→[0m <DataListItem label={t('email', { defaultValue: '[1m[31mEmail[0m' })}>
  [31m[Line 47][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd email[0m"
     [33m→[0m placeholder={t('addEmail', { defaultValue: '[1m[31mAdd email[0m' })}
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mPhone[0m"
     [33m→[0m <DataListItem label={t('phone', { defaultValue: '[1m[31mPhone[0m' })}>
  [31m[Line 55][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd phone[0m"
     [33m→[0m placeholder={t('addPhone', { defaultValue: '[1m[31mAdd phone[0m' })}
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mType[0m"
     [33m→[0m <DataListItem label={t('type', { defaultValue: '[1m[31mType[0m' })}>
  [31m[Line 65][0m [[36mJS/TS String Literal[0m] Found: "[1mUsername[0m"
     [33m→[0m <DataListItem label={t('username', { defaultValue: '[1m[31mUsername[0m' })}>
  [31m[Line 70][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd username[0m"
     [33m→[0m placeholder={t('addUsername', { defaultValue: '[1m[31mAdd username[0m' })}
  [31m[Line 73][0m [[36mJS/TS String Literal[0m] Found: "[1mCompany[0m"
     [33m→[0m <DataListItem label={t('company', { defaultValue: '[1m[31mCompany[0m' })}>
  [31m[Line 78][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd company[0m"
     [33m→[0m placeholder={t('addCompany', { defaultValue: '[1m[31mAdd company[0m' })}
  [31m[Line 83][0m [[36mJS/TS String Literal[0m] Found: "[1mCompany registration number[0m"
     [33m→[0m defaultValue: '[1m[31mCompany registration number[0m',
  [31m[Line 91][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd registration number[0m"
     [33m→[0m defaultValue: '[1m[31mAdd registration number[0m',
  [31m[Line 96][0m [[36mJS/TS String Literal[0m] Found: "[1mCustomer[0m"
     [33m→[0m label={t('customer', { defaultValue: '[1m[31mCustomer[0m' })}
  [31m[Line 124][0m [[36mJS/TS String Literal[0m] Found: "[1mLast login[0m"
     [33m→[0m <DataListItem label={t('lastLogin', { defaultValue: '[1m[31mLast login[0m' })}>
  [31m[Line 130][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated[0m"
     [33m→[0m <DataListItem label={t('created', { defaultValue: '[1m[31mCreated[0m' })}>

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/cp-user-detail/components/CPUserDetailGeneral.tsx[0m
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mAre you sure you want to delete this client portal user?[0m"
     [33m→[0m '[1m[31mAre you sure you want to delete this client portal user?[0m',
  [31m[Line 61][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: t('error', { defaultValue: '[1m[31mError[0m' }),
  [31m[Line 69][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: t('success', { defaultValue: '[1m[31mSuccess[0m' }),
  [31m[Line 72][0m [[36mJS/TS String Literal[0m] Found: "[1mUser deleted[0m"
     [33m→[0m defaultValue: '[1m[31mUser deleted[0m',
  [31m[Line 121][0m [[36mJS/TS String Literal[0m] Found: "[1mVerified[0m"
     [33m→[0m ? t('verified', { defaultValue: '[1m[31mVerified[0m' })
  [31m[Line 122][0m [[36mJS/TS String Literal[0m] Found: "[1mUnverified[0m"
     [33m→[0m : t('unverified', { defaultValue: '[1m[31mUnverified[0m' })}
  [31m[Line 126][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail verified[0m"
     [33m→[0m {t('emailVerified', { defaultValue: '[1m[31mEmail verified[0m' })}
  [31m[Line 131][0m [[36mJS/TS String Literal[0m] Found: "[1mPhone verified[0m"
     [33m→[0m {t('phoneVerified', { defaultValue: '[1m[31mPhone verified[0m' })}
  [31m[Line 137][0m [[36mJS/TS String Literal[0m] Found: "[1mPush: {{count}} device(s)[0m"
     [33m→[0m defaultValue: '[1m[31mPush: {{count}} device(s)[0m',
  [31m[Line 141][0m [[36mJS/TS String Literal[0m] Found: "[1mPush: No devices[0m"
     [33m→[0m defaultValue: '[1m[31mPush: No devices[0m',
  [31m[Line 154][0m [[36mJS/TS String Literal[0m] Found: "[1mSet password[0m"
     [33m→[0m defaultValue: '[1m[31mSet password[0m',
  [31m[Line 165][0m [[36mJS/TS String Literal[0m] Found: "[1mDelete[0m"
     [33m→[0m {t('delete', { defaultValue: '[1m[31mDelete[0m' })}

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/cp-user-detail/components/CPUserDetailNotifications.tsx[0m
  [31m[Line 151][0m [[36mJS/TS String Literal[0m] Found: "[1mNo notifications[0m"
     [33m→[0m {t('noNotifications', { defaultValue: '[1m[31mNo notifications[0m' })}
  [31m[Line 155][0m [[36mJS/TS String Literal[0m] Found: "[1mThis user has no notifications yet.[0m"
     [33m→[0m defaultValue: '[1m[31mThis user has no notifications yet.[0m',
  [31m[Line 163][0m [[36mJS/TS String Literal[0m] Found: "[1mSend notification[0m"
     [33m→[0m {t('sendNotification', { defaultValue: '[1m[31mSend notification[0m' })}
  [31m[Line 183][0m [[36mJS/TS String Literal[0m] Found: "[1mNotifications[0m"
     [33m→[0m {t('notifications', { defaultValue: '[1m[31mNotifications[0m' })}
  [31m[Line 192][0m [[36mJS/TS String Literal[0m] Found: "[1mSend notification[0m"
     [33m→[0m {t('sendNotification', { defaultValue: '[1m[31mSend notification[0m' })}
  [31m[Line 221][0m [[36mJS/TS String Literal[0m] Found: "[1mRead[0m"
     [33m→[0m {t('read', { defaultValue: '[1m[31mRead[0m' })}
  [31m[Line 225][0m [[36mJS/TS String Literal[0m] Found: "[1mUnread[0m"
     [33m→[0m {t('unread', { defaultValue: '[1m[31mUnread[0m' })}
  [31m[Line 235][0m [[36mJS/TS String Literal[0m] Found: "[1mSent to platforms[0m"
     [33m→[0m defaultValue: '[1m[31mSent to platforms[0m',
  [31m[Line 260][0m [[36mJS/TS String Literal[0m] Found: "[1minline-flex flex-none[0m"
     [33m→[0m <Spinner containerClassName="[1m[31minline-flex flex-none[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/cp-user-detail/components/CPUserDetailSendNotificationDialog.tsx[0m
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mTitle is required[0m"
     [33m→[0m title: z.string().min(1, '[1m[31mTitle is required[0m'),
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mMessage is required[0m"
     [33m→[0m message: z.string().min(1, '[1m[31mMessage is required[0m'),
  [31m[Line 96][0m [[36mJS/TS String Literal[0m] Found: "[1mNotification sent[0m"
     [33m→[0m defaultValue: '[1m[31mNotification sent[0m',
  [31m[Line 110][0m [[36mJS/TS String Literal[0m] Found: "[1mSend notification[0m"
     [33m→[0m title={t('title', { defaultValue: '[1m[31mSend notification[0m' })}
  [31m[Line 112][0m [[36mJS/TS String Literal[0m] Found: "[1mSend a notification to this client portal user[0m"
     [33m→[0m defaultValue: '[1m[31mSend a notification to this client portal user[0m',
  [31m[Line 124][0m [[36mJS/TS String Literal[0m] Found: "[1mTitle[0m"
     [33m→[0m {t('titleLabel', { defaultValue: '[1m[31mTitle[0m' })}
  [31m[Line 130][0m [[36mJS/TS String Literal[0m] Found: "[1mNotification title[0m"
     [33m→[0m defaultValue: '[1m[31mNotification title[0m',
  [31m[Line 144][0m [[36mJS/TS String Literal[0m] Found: "[1mMessage[0m"
     [33m→[0m {t('messageLabel', { defaultValue: '[1m[31mMessage[0m' })}
  [31m[Line 150][0m [[36mJS/TS String Literal[0m] Found: "[1mNotification message[0m"
     [33m→[0m defaultValue: '[1m[31mNotification message[0m',
  [31m[Line 165][0m [[36mJS/TS String Literal[0m] Found: "[1mType[0m"
     [33m→[0m {t('typeLabel', { defaultValue: '[1m[31mType[0m' })}
  [31m[Line 194][0m [[36mJS/TS String Literal[0m] Found: "[1mPriority[0m"
     [33m→[0m {t('priorityLabel', { defaultValue: '[1m[31mPriority[0m' })}
  [31m[Line 223][0m [[36mJS/TS String Literal[0m] Found: "[1mSend notification[0m"
     [33m→[0m t('send', { defaultValue: '[1m[31mSend notification[0m' })

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/cp-user-detail/components/CPUserDetailSidebar.tsx[0m
  [31m[Line 7][0m [[36mJS/TS String Literal[0m] Found: "[1mOverview[0m"
     [33m→[0m overview: '[1m[31mOverview[0m',
  [31m[Line 8][0m [[36mJS/TS String Literal[0m] Found: "[1mActivity log[0m"
     [33m→[0m activity: '[1m[31mActivity log[0m',
  [31m[Line 9][0m [[36mJS/TS String Literal[0m] Found: "[1mNotifications[0m"
     [33m→[0m notifications: '[1m[31mNotifications[0m',
  [31m[Line 21][0m [[36mJSX Plain Text[0m] Found: "[1mGeneral[0m"
     [33m→[0m <Sidebar.GroupLabel>[1m[31mGeneral[0m</Sidebar.GroupLabel>

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/cp-user-detail/components/CPUserSetPasswordDialog.tsx[0m
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least 8 characters[0m"
     [33m→[0m message: '[1m[31mAt least 8 characters[0m',
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least 1 number[0m"
     [33m→[0m .refine((val) => /[0-9]/.test(val), { message: '[1m[31mAt least 1 number[0m' })
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least 1 lowercase letter[0m"
     [33m→[0m message: '[1m[31mAt least 1 lowercase letter[0m',
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least 1 uppercase letter[0m"
     [33m→[0m message: '[1m[31mAt least 1 uppercase letter[0m',
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mPasswords must match[0m"
     [33m→[0m message: '[1m[31mPasswords must match[0m',
  [31m[Line 78][0m [[36mJS/TS String Literal[0m] Found: "[1mThis user's password has been changed[0m"
     [33m→[0m defaultValue: "[1m[31mThis user's password has been changed[0m",
  [31m[Line 92][0m [[36mJS/TS String Literal[0m] Found: "[1mSet password[0m"
     [33m→[0m title={t('title', { defaultValue: '[1m[31mSet password[0m' })}
  [31m[Line 94][0m [[36mJS/TS String Literal[0m] Found: "[1mSet new password for the client portal user[0m"
     [33m→[0m defaultValue: '[1m[31mSet new password for the client portal user[0m',
  [31m[Line 106][0m [[36mJS/TS String Literal[0m] Found: "[1mNew password[0m"
     [33m→[0m {t('newPassword', { defaultValue: '[1m[31mNew password[0m' })}
  [31m[Line 113][0m [[36mJS/TS String Literal[0m] Found: "[1mNew password[0m"
     [33m→[0m defaultValue: '[1m[31mNew password[0m',
  [31m[Line 129][0m [[36mJS/TS String Literal[0m] Found: "[1mRe-type password[0m"
     [33m→[0m defaultValue: '[1m[31mRe-type password[0m',
  [31m[Line 137][0m [[36mJS/TS String Literal[0m] Found: "[1mRe-type password[0m"
     [33m→[0m defaultValue: '[1m[31mRe-type password[0m',
  [31m[Line 157][0m [[36mJS/TS String Literal[0m] Found: "[1mSave[0m"
     [33m→[0m {loading ? <Spinner /> : t('save', { defaultValue: '[1m[31mSave[0m' })}

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/client-portal-users/hooks/useCPUserEdit.ts[0m
  [31m[Line 43][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: t('error', { defaultValue: '[1m[31mError[0m' }),
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: t('success', { defaultValue: '[1m[31mSuccess[0m' }),
  [31m[Line 53][0m [[36mJS/TS String Literal[0m] Found: "[1mUser updated[0m"
     [33m→[0m defaultValue: '[1m[31mUser updated[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/company-detail/CompanyActivityRows.tsx[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1madded tag[0m"
     [33m→[0m {isAdded ? '[1m[31madded tag[0m' : 'removed tag'}
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mremoved tag[0m"
     [33m→[0m {isAdded ? 'added tag' : '[1m[31mremoved tag[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/company-detail/CompanyDetail.tsx[0m
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mCompany Details[0m"
     [33m→[0m <FocusSheet.Header title="[1m[31mCompany Details[0m" />
  [31m[Line 128][0m [[36mJSX Plain Text[0m] Found: "[1mCompany not found[0m"
     [33m→[0m <Empty.Title>[1m[31mCompany not found[0m</Empty.Title>
  [31m[Line 129][0m [[36mJSX Plain Text[0m] Found: "[1mThere seems to be no company with this ID.[0m"
     [33m→[0m <Empty.Description>
  [31m[Line 146][0m [[36mJSX Plain Text[0m] Found: "[1mError[0m"
     [33m→[0m <Empty.Title>[1m[31mError[0m</Empty.Title>

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/company-detail/CompanyDetailFields.tsx[0m
  [31m[Line 96][0m [[36mJS/TS String Literal[0m] Found: "[1mSubscribed[0m"
     [33m→[0m <DataListItem label={t('subscribed') || '[1m[31mSubscribed[0m'}>
  [31m[Line 103][0m [[36mJS/TS String Literal[0m] Found: "[1mYes[0m"
     [33m→[0m isSubscribed: checked ? '[1m[31mYes[0m' : 'No',
  [31m[Line 103][0m [[36mJS/TS String Literal[0m] Found: "[1mNo[0m"
     [33m→[0m isSubscribed: checked ? 'Yes' : '[1m[31mNo[0m',
  [31m[Line 155][0m [[36mJS/TS String Literal[0m] Found: "[1mCompany[0m"
     [33m→[0m __typename: '[1m[31mCompany[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/company-edit/TagsField.tsx[0m
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/components/CompaniesFilter.tsx[0m
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m placeholder="[1m[31mFilter[0m"
  [31m[Line 108][0m [[36mJSX Plain Text[0m] Found: "[1mSearch[0m"
     [33m→[0m <Icon[1m[31mSearch[0m />
  [31m[Line 119][0m [[36mJSX Plain Text[0m] Found: "[1mCreated At[0m"
     [33m→[0m <IconCalendarPlus />
  [31m[Line 126][0m [[36mJSX Plain Text[0m] Found: "[1mUpdated At[0m"
     [33m→[0m <IconCalendarUp />
  [31m[Line 133][0m [[36mJSX Plain Text[0m] Found: "[1mLast Seen At[0m"
     [33m→[0m <IconCalendarTime />

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/components/CompaniesTotalCount.tsx[0m
  [31m[Line 12][0m [[36mTemplate Literal String[0m] Found: "[1mrecords found[0m"
     [33m→[0m `${totalCount} [1m[31mrecords found[0m`

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/components/CompanyAddGeneralInformationFields.tsx[0m
  [31m[Line 211][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect country[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect country[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/components/CompanyAddSheet.tsx[0m
  [31m[Line 57][0m [[36mJSX Plain Text[0m] Found: "[1mAdd a new company[0m"
     [33m→[0m <Sheet.Description className="sr-only">[1m[31mAdd a new company[0m</Sheet.Description>
  [31m[Line 71][0m [[36mJSX Plain Text[0m] Found: "[1mAdd a new company[0m"
     [33m→[0m <Sheet.Description className="sr-only">

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/components/CompanyColumns.tsx[0m
  [31m[Line 85][0m [[36mJS/TS String Literal[0m] Found: "[1mName[0m"
     [33m→[0m scope={clsx(ContactsHotKeyScope.CompaniesPage, _id, '[1m[31mName[0m')}
  [31m[Line 159][0m [[36mJS/TS String Literal[0m] Found: "[1mOwner[0m"
     [33m→[0m '[1m[31mOwner[0m',
  [31m[Line 181][0m [[36mJS/TS String Literal[0m] Found: "[1mCode[0m"
     [33m→[0m label={t('field.code') || '[1m[31mCode[0m'}
  [31m[Line 197][0m [[36mJS/TS String Literal[0m] Found: "[1mParent Company[0m"
     [33m→[0m label={t('field.parentCompanyId') || '[1m[31mParent Company[0m'}
  [31m[Line 233][0m [[36mJS/TS String Literal[0m] Found: "[1mSize[0m"
     [33m→[0m label={t('field.size') || '[1m[31mSize[0m'}
  [31m[Line 249][0m [[36mJS/TS String Literal[0m] Found: "[1mBusiness Type[0m"
     [33m→[0m label={t('field.businessType') || '[1m[31mBusiness Type[0m'}
  [31m[Line 265][0m [[36mJS/TS String Literal[0m] Found: "[1mWebsite[0m"
     [33m→[0m label={t('field.website') || '[1m[31mWebsite[0m'}
  [31m[Line 281][0m [[36mJS/TS String Literal[0m] Found: "[1mLocation[0m"
     [33m→[0m label={t('field.location') || '[1m[31mLocation[0m'}
  [31m[Line 308][0m [[36mJS/TS String Literal[0m] Found: "[1mCompany[0m"
     [33m→[0m __typename: '[1m[31mCompany[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/components/CompanyMoreColumn.tsx[0m
  [31m[Line 33][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m /> Edit

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/components/companies-command-bar/CompaniesCommandBar.tsx[0m
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mCompany[0m"
     [33m→[0m __typename: '[1m[31mCompany[0m',
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/components/companies-command-bar/CompaniesDelete.tsx[0m
  [31m[Line 17][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${companyIds.length} selected companies?`,
  [31m[Line 17][0m [[36mTemplate Literal String[0m] Found: "[1mselected companies?[0m"
     [33m→[0m message: `Are you sure you want to delete the ${companyIds.length} [1m[31mselected companies?[0m`,
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mCompanies deleted successfully[0m"
     [33m→[0m description: '[1m[31mCompanies deleted successfully[0m',
  [31m[Line 42][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/components/companies-command-bar/CompaniesMergeSheet.tsx[0m
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mMerge[0m"
     [33m→[0m <IconArrow[1m[31mMerge[0m />
  [31m[Line 57][0m [[36mJSX Plain Text[0m] Found: "[1mMerge Companies[0m"
     [33m→[0m <Sheet.Title>[1m[31mMerge Companies[0m</Sheet.Title>
  [31m[Line 78][0m [[36mJSX Plain Text[0m] Found: "[1mDiscard[0m"
     [33m→[0m >
  [31m[Line 85][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m >
  [31m[Line 100][0m [[36mJSX Plain Text[0m] Found: "[1mMerge[0m"
     [33m→[0m <IconArrow[1m[31mMerge[0m />

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/components/companies-command-bar/CompaniesMergeTooltip.tsx[0m
  [31m[Line 18][0m [[36mJSX Plain Text[0m] Found: "[1mYou can only merge 2 companies[0m"
     [33m→[0m <span>[1m[31mYou can only merge 2 companies[0m</span>

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/constants/formSchema.ts[0m
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m primaryName: z.string().min(1, '[1m[31mName is required[0m'),
  [31m[Line 5][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid URL[0m"
     [33m→[0m website: z.string().url('[1m[31mInvalid URL[0m').optional().or(z.literal('')),
  [31m[Line 6][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid email[0m"
     [33m→[0m email: z.string().email('[1m[31mInvalid email[0m').optional().or(z.literal('')),

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/companies/hooks/useCompanyDetailWithQuery.tsx[0m
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/components/ContactSidebar.tsx[0m
  [31m[Line 8][0m [[36mJSX Plain Text[0m] Found: "[1mGeneral[0m"
     [33m→[0m <Sidebar.GroupLabel>[1m[31mGeneral[0m</Sidebar.GroupLabel>

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/components/ContactsBreadcrumb.tsx[0m
  [31m[Line 71][0m [[36mJSX Plain Text[0m] Found: "[1mClient Portal Users[0m"
     [33m→[0m <Link to={`${ContactsPath.Index}${ContactsPath.ClientPortalUsers}`}>

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/components/CustomerAddSheet.tsx[0m
  [31m[Line 82][0m [[36mJSX Plain Text[0m] Found: "[1m"Manage the uoms for your product & service"[0m"
     [33m→[0m <Sheet.Description className="sr-only">

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/components/CustomerFormFields.tsx[0m
  [31m[Line 104][0m [[36mJS/TS String Literal[0m] Found: "[1mValid[0m"
     [33m→[0m { label: '[1m[31mValid[0m', value: 'valid' },
  [31m[Line 105][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid[0m"
     [33m→[0m { label: '[1m[31mInvalid[0m', value: 'invalid' },
  [31m[Line 106][0m [[36mJS/TS String Literal[0m] Found: "[1mAccept all unverifiable[0m"
     [33m→[0m { label: '[1m[31mAccept all unverifiable[0m', value: 'accept_all_unverifiable' },
  [31m[Line 107][0m [[36mJS/TS String Literal[0m] Found: "[1mUnknown[0m"
     [33m→[0m { label: '[1m[31mUnknown[0m', value: 'unknown' },
  [31m[Line 108][0m [[36mJS/TS String Literal[0m] Found: "[1mDisposable[0m"
     [33m→[0m { label: '[1m[31mDisposable[0m', value: 'disposable' },
  [31m[Line 109][0m [[36mJS/TS String Literal[0m] Found: "[1mCatch all[0m"
     [33m→[0m { label: '[1m[31mCatch all[0m', value: 'catchall' },
  [31m[Line 110][0m [[36mJS/TS String Literal[0m] Found: "[1mBad syntax[0m"
     [33m→[0m { label: '[1m[31mBad syntax[0m', value: 'bad_syntax' },
  [31m[Line 111][0m [[36mJS/TS String Literal[0m] Found: "[1mNot checked[0m"
     [33m→[0m { label: '[1m[31mNot checked[0m', value: 'not_checked' },
  [31m[Line 132][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose[0m"
     [33m→[0m <Select.Value placeholder={'[1m[31mChoose[0m'}>
  [31m[Line 201][0m [[36mJS/TS String Literal[0m] Found: "[1mYes[0m"
     [33m→[0m field.onChange(checked ? '[1m[31mYes[0m' : 'No')
  [31m[Line 201][0m [[36mJS/TS String Literal[0m] Found: "[1mNo[0m"
     [33m→[0m field.onChange(checked ? 'Yes' : '[1m[31mNo[0m')
  [31m[Line 265][0m [[36mJS/TS String Literal[0m] Found: "[1mValid[0m"
     [33m→[0m { label: '[1m[31mValid[0m', value: 'valid' },
  [31m[Line 266][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid[0m"
     [33m→[0m { label: '[1m[31mInvalid[0m', value: 'invalid' },
  [31m[Line 267][0m [[36mJS/TS String Literal[0m] Found: "[1mUnknown[0m"
     [33m→[0m { label: '[1m[31mUnknown[0m', value: 'unknown' },
  [31m[Line 268][0m [[36mJS/TS String Literal[0m] Found: "[1mUnverifiable[0m"
     [33m→[0m { label: '[1m[31mUnverifiable[0m', value: 'unverifiable' },
  [31m[Line 269][0m [[36mJS/TS String Literal[0m] Found: "[1mMobile phone[0m"
     [33m→[0m { label: '[1m[31mMobile phone[0m', value: 'mobile_phone' },
  [31m[Line 288][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose[0m"
     [33m→[0m <Select.Value placeholder={'[1m[31mChoose[0m'}>
  [31m[Line 365][0m [[36mJS/TS String Literal[0m] Found: "[1mLead[0m"
     [33m→[0m { label: '[1m[31mLead[0m', value: 'lead' },
  [31m[Line 366][0m [[36mJS/TS String Literal[0m] Found: "[1mCustomer[0m"
     [33m→[0m { label: '[1m[31mCustomer[0m', value: 'customer' },
  [31m[Line 380][0m [[36mJSX Plain Text[0m] Found: "[1mLifecycle State[0m"
     [33m→[0m <Form.Label>[1m[31mLifecycle State[0m</Form.Label>
  [31m[Line 384][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose state[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mChoose state[0m">
  [31m[Line 387][0m [[36mJS/TS String Literal[0m] Found: "[1mUnknown[0m"
     [33m→[0m ?.label ?? '[1m[31mUnknown[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/components/CustomerMoreColumn.tsx[0m
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m /> Edit

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/components/CustomersColumns.tsx[0m
  [31m[Line 99][0m [[36mJS/TS String Literal[0m] Found: "[1mName[0m"
     [33m→[0m scope={clsx(ContactsHotKeyScope.CustomersPage, _id, '[1m[31mName[0m')}
  [31m[Line 179][0m [[36mJS/TS String Literal[0m] Found: "[1mCustomer[0m"
     [33m→[0m __typename: '[1m[31mCustomer[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/components/customers-command-bar/CustomersChangeState.tsx[0m
  [31m[Line 9][0m [[36mJS/TS String Literal[0m] Found: "[1mLead[0m"
     [33m→[0m { label: '[1m[31mLead[0m', value: 'lead' },
  [31m[Line 10][0m [[36mJS/TS String Literal[0m] Found: "[1mCustomer[0m"
     [33m→[0m { label: '[1m[31mCustomer[0m', value: 'customer' },
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 46][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 48][0m [[36mTemplate Literal String[0m] Found: "[1mState changed to "[0m"
     [33m→[0m description: `[1m[31mState changed to "[0m${label}" successfully`,
  [31m[Line 48][0m [[36mTemplate Literal String[0m] Found: "[1m" successfully[0m"
     [33m→[0m description: `State changed to "${label}[1m[31m" successfully[0m`,
  [31m[Line 58][0m [[36mJSX Plain Text[0m] Found: "[1mChange State[0m"
     [33m→[0m <IconUserCheck />

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/components/customers-command-bar/CustomersCommandBar.tsx[0m
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mCustomer[0m"
     [33m→[0m __typename: '[1m[31mCustomer[0m',
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/components/customers-command-bar/CustomersVerificationStatus.tsx[0m
  [31m[Line 9][0m [[36mJS/TS String Literal[0m] Found: "[1mValid[0m"
     [33m→[0m { label: '[1m[31mValid[0m', value: 'valid' },
  [31m[Line 10][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid[0m"
     [33m→[0m { label: '[1m[31mInvalid[0m', value: 'invalid' },
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mAccept all unverifiable[0m"
     [33m→[0m { label: '[1m[31mAccept all unverifiable[0m', value: 'accept_all_unverifiable' },
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mUnknown[0m"
     [33m→[0m { label: '[1m[31mUnknown[0m', value: 'unknown' },
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mDisposable[0m"
     [33m→[0m { label: '[1m[31mDisposable[0m', value: 'disposable' },
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mCatch all[0m"
     [33m→[0m { label: '[1m[31mCatch all[0m', value: 'catchall' },
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mBad syntax[0m"
     [33m→[0m { label: '[1m[31mBad syntax[0m', value: 'bad_syntax' },
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mNot checked[0m"
     [33m→[0m { label: '[1m[31mNot checked[0m', value: 'not_checked' },
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 46][0m [[36mJS/TS String Literal[0m] Found: "[1mVerification status updated successfully[0m"
     [33m→[0m description: '[1m[31mVerification status updated successfully[0m',
  [31m[Line 56][0m [[36mJSX Plain Text[0m] Found: "[1mVerify[0m"
     [33m→[0m <IconShieldCheck />

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/components/customers-command-bar/delete/CustomersDelete.tsx[0m
  [31m[Line 17][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${customerIds.length} selected customers?`,
  [31m[Line 17][0m [[36mTemplate Literal String[0m] Found: "[1mselected customers?[0m"
     [33m→[0m message: `Are you sure you want to delete the ${customerIds.length} [1m[31mselected customers?[0m`,
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mCustomers deleted successfully[0m"
     [33m→[0m description: '[1m[31mCustomers deleted successfully[0m',
  [31m[Line 39][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/components/customers-command-bar/merge/CustomersMerge.tsx[0m
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 53][0m [[36mJS/TS String Literal[0m] Found: "[1mCustomers merged successfully[0m"
     [33m→[0m description: '[1m[31mCustomers merged successfully[0m',
  [31m[Line 346][0m [[36mJSX Plain Text[0m] Found: "[1mMerge[0m"
     [33m→[0m <span className="text-sm font-semibold text-primary mb-1">[1m[31mMerge[0m</span>

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/components/customers-command-bar/merge/MergeMap.ts[0m
  [31m[Line 3][0m [[36mJS/TS String Literal[0m] Found: "[1mArray[0m"
     [33m→[0m | '[1m[31mArray[0m'
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mAvatar[0m"
     [33m→[0m { avatar: { displayName: '[1m[31mAvatar[0m', type: 'avatar' } },
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mFirst Name[0m"
     [33m→[0m { firstName: { displayName: '[1m[31mFirst Name[0m', type: 'string' } },
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mMiddle Name[0m"
     [33m→[0m { middleName: { displayName: '[1m[31mMiddle Name[0m', type: 'string' } },
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mLast Name[0m"
     [33m→[0m { lastName: { displayName: '[1m[31mLast Name[0m', type: 'string' } },
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mPrimary Email[0m"
     [33m→[0m { primaryEmail: { displayName: '[1m[31mPrimary Email[0m', type: 'string' } },
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail Validation Status[0m"
     [33m→[0m displayName: '[1m[31mEmail Validation Status[0m',
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mEmails[0m"
     [33m→[0m { emails: { displayName: '[1m[31mEmails[0m', type: 'Array' } },
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mArray[0m"
     [33m→[0m { emails: { displayName: 'Emails', type: '[1m[31mArray[0m' } },
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mPrimary Phone[0m"
     [33m→[0m { primaryPhone: { displayName: '[1m[31mPrimary Phone[0m', type: 'string' } },
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mPhone Validation Status[0m"
     [33m→[0m displayName: '[1m[31mPhone Validation Status[0m',
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mSex[0m"
     [33m→[0m { sex: { displayName: '[1m[31mSex[0m', type: 'sex' } },
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mPhones[0m"
     [33m→[0m { phones: { displayName: '[1m[31mPhones[0m', type: 'Array' } },
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mArray[0m"
     [33m→[0m { phones: { displayName: 'Phones', type: '[1m[31mArray[0m' } },
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mIs Subscribed[0m"
     [33m→[0m { isSubscribed: { displayName: '[1m[31mIs Subscribed[0m', type: 'string' } },
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mOwner[0m"
     [33m→[0m { owner: { displayName: '[1m[31mOwner[0m', type: 'owner' } },
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mWebsite[0m"
     [33m→[0m { website: { displayName: '[1m[31mWebsite[0m', type: 'link' } },
  [31m[Line 59][0m [[36mJS/TS String Literal[0m] Found: "[1mFacebook[0m"
     [33m→[0m { facebook: { displayName: '[1m[31mFacebook[0m', type: 'link' } },
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mInstagram[0m"
     [33m→[0m { instagram: { displayName: '[1m[31mInstagram[0m', type: 'link' } },
  [31m[Line 61][0m [[36mJS/TS String Literal[0m] Found: "[1mTwitter[0m"
     [33m→[0m { twitter: { displayName: '[1m[31mTwitter[0m', type: 'link' } },
  [31m[Line 62][0m [[36mJS/TS String Literal[0m] Found: "[1mLinkedIn[0m"
     [33m→[0m { linkedIn: { displayName: '[1m[31mLinkedIn[0m', type: 'link' } },
  [31m[Line 63][0m [[36mJS/TS String Literal[0m] Found: "[1mGithub[0m"
     [33m→[0m { github: { displayName: '[1m[31mGithub[0m', type: 'link' } },

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/components/customers-command-bar/merge/MergeSheet.tsx[0m
  [31m[Line 33][0m [[36mJSX Plain Text[0m] Found: "[1mMerge[0m"
     [33m→[0m <IconArrow[1m[31mMerge[0m />
  [31m[Line 58][0m [[36mJSX Plain Text[0m] Found: "[1mMerge Customers[0m"
     [33m→[0m <Sheet.Title>[1m[31mMerge Customers[0m</Sheet.Title>
  [31m[Line 76][0m [[36mJSX Plain Text[0m] Found: "[1mDiscard[0m"
     [33m→[0m >
  [31m[Line 83][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/components/customers-command-bar/merge/MergeTooltip.tsx[0m
  [31m[Line 18][0m [[36mJSX Plain Text[0m] Found: "[1mYou can only merge 2 contacts[0m"
     [33m→[0m <span>[1m[31mYou can only merge 2 contacts[0m</span>

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/constants/formSchema.ts[0m
  [31m[Line 6][0m [[36mJS/TS String Literal[0m] Found: "[1mFirst name is required[0m"
     [33m→[0m firstName: z.string().min(1, "[1m[31mFirst name is required[0m"),
  [31m[Line 10][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid email format[0m"
     [33m→[0m primaryEmail: z.string().email("[1m[31mInvalid email format[0m"),
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mYes[0m"
     [33m→[0m isSubscribed: z.string().default('[1m[31mYes[0m'),

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/constants/genderCode.ts[0m
  [31m[Line 5][0m [[36mJS/TS String Literal[0m] Found: "[1mnot applicable[0m"
     [33m→[0m 9: '[1m[31mnot applicable[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/customer-detail/components/CustomerDetail.tsx[0m
  [31m[Line 122][0m [[36mJSX Plain Text[0m] Found: "[1mCustomer not found[0m"
     [33m→[0m <Empty.Title>[1m[31mCustomer not found[0m</Empty.Title>
  [31m[Line 123][0m [[36mJSX Plain Text[0m] Found: "[1mThere seems to be no customer with this ID.[0m"
     [33m→[0m <Empty.Description>
  [31m[Line 141][0m [[36mJSX Plain Text[0m] Found: "[1mError[0m"
     [33m→[0m <Empty.Title>[1m[31mError[0m</Empty.Title>

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/customer-detail/components/CustomerDetailFields.tsx[0m
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mYes[0m"
     [33m→[0m isSubscribed: customerDetail?.isSubscribed || '[1m[31mYes[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/customer-detail/components/CustomerDetailSelectTag.tsx[0m
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mCustomer[0m"
     [33m→[0m __typename: '[1m[31mCustomer[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/customers/hooks/useCustomerDetailWithQuery.tsx[0m
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/settings/components/ContactsBreadcrumb.tsx[0m
  [31m[Line 8][0m [[36mJSX Plain Text[0m] Found: "[1mContacts[0m"
     [33m→[0m <IconBookmarksFilled className="w-4 h-4 text-accent-foreground" />

[1m[33m📄 File: frontend/core-ui/src/modules/contacts/settings/components/ContactsSettingsSidebar.tsx[0m
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1mCustomers[0m"
     [33m→[0m <Link to="/settings/contacts">[1m[31mCustomers[0m</Link>
  [31m[Line 24][0m [[36mJSX Plain Text[0m] Found: "[1mCompanies[0m"
     [33m→[0m <Link to="/settings/contacts/companies">[1m[31mCompanies[0m</Link>

[1m[33m📄 File: frontend/core-ui/src/modules/documents/components/DocumentEditor.tsx[0m
  [31m[Line 66][0m [[36mJS/TS String Literal[0m] Found: "[1mContent is required[0m"
     [33m→[0m rules={{ required: '[1m[31mContent is required[0m' }}
  [31m[Line 126][0m [[36mJS/TS String Literal[0m] Found: "[1mUntitled[0m"
     [33m→[0m placeholder="[1m[31mUntitled[0m"
  [31m[Line 151][0m [[36mJSX Plain Text[0m] Found: "[1mNo document found[0m"
     [33m→[0m <div className="text-gray-500">[1m[31mNo document found[0m</div>
  [31m[Line 162][0m [[36mJS/TS String Literal[0m] Found: "[1mTitle is required[0m"
     [33m→[0m rules={{ required: '[1m[31mTitle is required[0m' }}

[1m[33m📄 File: frontend/core-ui/src/modules/documents/components/DocumentSheet.tsx[0m
  [31m[Line 39][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Document[0m"
     [33m→[0m >
  [31m[Line 46][0m [[36mJSX Plain Text[0m] Found: "[1mSave Document[0m"
     [33m→[0m <Button onClick={handleSubmit(submitHandler)} disabled={!hasChanges}>

[1m[33m📄 File: frontend/core-ui/src/modules/documents/components/DocumentSort.tsx[0m
  [31m[Line 15][0m [[36mJSX Plain Text[0m] Found: "[1mNewest First[0m"
     [33m→[0m <DropdownMenu.Item>[1m[31mNewest First[0m</DropdownMenu.Item>
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1mOldest First[0m"
     [33m→[0m <DropdownMenu.Item>[1m[31mOldest First[0m</DropdownMenu.Item>

[1m[33m📄 File: frontend/core-ui/src/modules/documents/components/DocumentsFilter.tsx[0m
  [31m[Line 85][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated By[0m"
     [33m→[0m {createdBy && <SelectMember.FilterBar queryKey="createdBy" label="[1m[31mCreated By[0m" />}
  [31m[Line 99][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m placeholder="[1m[31mFilter[0m"
  [31m[Line 109][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated By[0m"
     [33m→[0m <SelectMember.FilterItem value="createdBy" label="[1m[31mCreated By[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/documents/components/DocumentsGrid.tsx[0m
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mDocuments[0m"
     [33m→[0m refetchQueries: ['[1m[31mDocuments[0m'],
  [31m[Line 60][0m [[36mJSX Plain Text[0m] Found: "[1mAction[0m"
     [33m→[0m >
  [31m[Line 75][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <p className="text-sm font-medium leading-[100%] text-black font-inter">
  [31m[Line 101][0m [[36mJS/TS String Literal[0m] Found: "[1mN/A[0m"
     [33m→[0m '[1m[31mN/A[0m'
  [31m[Line 119][0m [[36mJSX Plain Text[0m] Found: "[1mDelete Document[0m"
     [33m→[0m <AlertDialog.Title>[1m[31mDelete Document[0m</AlertDialog.Title>
  [31m[Line 120][0m [[36mJSX Plain Text[0m] Found: "[1mAre you sure you want to remove the document? This action cannot
              be undone.[0m"
     [33m→[0m <AlertDialog.Description>
  [31m[Line 126][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <AlertDialog.[1m[31mCancel[0m>Cancel</AlertDialog.Cancel>
  [31m[Line 131][0m [[36mJSX Plain Text[0m] Found: "[1mYes, delete document[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/modules/documents/components/DocumentsHeader.tsx[0m
  [31m[Line 17][0m [[36mJSX Plain Text[0m] Found: "[1mDocuments[0m"
     [33m→[0m <IconCube />

[1m[33m📄 File: frontend/core-ui/src/modules/documents/components/DocumentsList.tsx[0m
  [31m[Line 18][0m [[36mJSX Plain Text[0m] Found: "[1mDocuments[0m"
     [33m→[0m <IconArrowLeft />

[1m[33m📄 File: frontend/core-ui/src/modules/documents/components/DocumentsTypes.tsx[0m
  [31m[Line 15][0m [[36mJSX Plain Text[0m] Found: "[1mDocument types[0m"
     [33m→[0m <Sidebar.GroupLabel className="py-5">[1m[31mDocument types[0m</Sidebar.GroupLabel>

[1m[33m📄 File: frontend/core-ui/src/modules/documents/constants.ts[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mCustomer[0m"
     [33m→[0m label: '[1m[31mCustomer[0m',
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mCompany[0m"
     [33m→[0m label: '[1m[31mCompany[0m',
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mProduct[0m"
     [33m→[0m label: '[1m[31mProduct[0m',
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mTeam Member[0m"
     [33m→[0m label: '[1m[31mTeam Member[0m',
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mBroadcast[0m"
     [33m→[0m label: '[1m[31mBroadcast[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/documents/hooks/useDocument.tsx[0m
  [31m[Line 81][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccessfully saved document[0m"
     [33m→[0m toast({ title: '[1m[31mSuccessfully saved document[0m', variant: 'success' });
  [31m[Line 86][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/documents/hooks/useDocumentForm.tsx[0m
  [31m[Line 6][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m name: z.string().min(1, '[1m[31mName is required[0m'),
  [31m[Line 7][0m [[36mJS/TS String Literal[0m] Found: "[1mContent is required[0m"
     [33m→[0m content: z.string().min(1, '[1m[31mContent is required[0m'),
  [31m[Line 8][0m [[36mJS/TS String Literal[0m] Found: "[1mContent type is required[0m"
     [33m→[0m contentType: z.string().min(1, '[1m[31mContent type is required[0m'),

[1m[33m📄 File: frontend/core-ui/src/modules/documents/hooks/useDocumentRemove.tsx[0m
  [31m[Line 8][0m [[36mJS/TS String Literal[0m] Found: "[1mDocument removed successfully[0m"
     [33m→[0m toast({ title: '[1m[31mDocument removed successfully[0m', variant: 'success' });
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/error-handler/components/ClientConfigError.tsx[0m
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mUnable to reach backend[0m"
     [33m→[0m title="[1m[31mUnable to reach backend[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/error-handler/components/GenericErrorFallback.tsx[0m
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mSorry, something went wrong[0m"
     [33m→[0m title = '[1m[31mSorry, something went wrong[0m',
  [31m[Line 34][0m [[36mJSX Plain Text[0m] Found: "[1mTry Again[0m"
     [33m→[0m <Button onClick={resetErrorBoundary}>[1m[31mTry Again[0m</Button>

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/export/components/ExportHistoriesContext.tsx[0m
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1museExportHistoriesRecordTable must be used within ExportHistoriesRecordTableProvider[0m"
     [33m→[0m '[1m[31museExportHistoriesRecordTable must be used within ExportHistoriesRecordTableProvider[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/export/components/ExportHistoriesEmptyState.tsx[0m
  [31m[Line 12][0m [[36mTemplate Literal String[0m] Found: "[1mNo[0m"
     [33m→[0m title: (label: string | null) => `[1m[31mNo[0m ${label} exports yet`,
  [31m[Line 12][0m [[36mTemplate Literal String[0m] Found: "[1mexports yet[0m"
     [33m→[0m title: (label: string | null) => `No ${label} [1m[31mexports yet[0m`,
  [31m[Line 14][0m [[36mTemplate Literal String[0m] Found: "[1mexports will appear here after someone downloads records in that section. Completed files can be downloaded again from this page.[0m"
     [33m→[0m `${label} [1m[31mexports will appear here after someone downloads records in that section. Completed files can be downloaded again from this page.[0m`,
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mAll types[0m"
     [33m→[0m label: '[1m[31mAll types[0m',
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mNo exports yet[0m"
     [33m→[0m title: '[1m[31mNo exports yet[0m',
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mCSV exports will appear here after someone downloads records from a module. Completed files can be downloaded again from this page.[0m"
     [33m→[0m '[1m[31mCSV exports will appear here after someone downloads records from a module. Completed files can be downloaded again from this page.[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/export/components/ExportHistoriesErrorState.tsx[0m
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1mExport history couldn't be loaded[0m"
     [33m→[0m <Empty.Title>Export history couldn&apos;t be loaded</Empty.Title>
  [31m[Line 17][0m [[36mJSX Plain Text[0m] Found: "[1mTry refreshing this page again in a moment.[0m"
     [33m→[0m <Empty.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/export/components/ExportHistoriesRecordTableHeader.tsx[0m
  [31m[Line 26][0m [[36mJSX Plain Text[0m] Found: "[1mExport history[0m"
     [33m→[0m <h3 className="text-base font-semibold">[1m[31mExport history[0m</h3>
  [31m[Line 28][0m [[36mJSX Plain Text[0m] Found: "[1mReview generated CSV files, track progress, and download completed
            exports again whenever you need them.[0m"
     [33m→[0m <p className="text-sm text-muted-foreground">
  [31m[Line 36][0m [[36mJSX Plain Text[0m] Found: "[1msupported records[0m"
     [33m→[0m {contentTypes.length.toLocaleString()} [1m[31msupported records[0m
  [31m[Line 56][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter by type[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mFilter by type[0m" />
  [31m[Line 59][0m [[36mJSX Plain Text[0m] Found: "[1mAll types[0m"
     [33m→[0m <Select.Item value="all">[1m[31mAll types[0m</Select.Item>
  [31m[Line 69][0m [[36mJSX Plain Text[0m] Found: "[1mType filters are temporarily unavailable.[0m"
     [33m→[0m <p className="text-xs text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/export/components/ExportHistoryActionsCell.tsx[0m
  [31m[Line 43][0m [[36mJSX Plain Text[0m] Found: "[1mDownload file[0m"
     [33m→[0m <IconDownload /> [1m[31mDownload file[0m

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/export/components/ExportHistoryColumns.tsx[0m
  [31m[Line 53][0m [[36mJS/TS String Literal[0m] Found: "[1mstroke-dashoffset 0.3s ease[0m"
     [33m→[0m transition: '[1m[31mstroke-dashoffset 0.3s ease[0m',
  [31m[Line 67][0m [[36mJS/TS String Literal[0m] Found: "[1mPending[0m"
     [33m→[0m pending: { label: '[1m[31mPending[0m', variant: 'secondary' },
  [31m[Line 68][0m [[36mJS/TS String Literal[0m] Found: "[1mValidating[0m"
     [33m→[0m validating: { label: '[1m[31mValidating[0m', variant: 'warning' },
  [31m[Line 69][0m [[36mJS/TS String Literal[0m] Found: "[1mProcessing[0m"
     [33m→[0m processing: { label: '[1m[31mProcessing[0m', variant: 'info' },
  [31m[Line 70][0m [[36mJS/TS String Literal[0m] Found: "[1mCompleted[0m"
     [33m→[0m completed: { label: '[1m[31mCompleted[0m', variant: 'success' },
  [31m[Line 71][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed[0m"
     [33m→[0m failed: { label: '[1m[31mFailed[0m', variant: 'destructive' },
  [31m[Line 72][0m [[36mJS/TS String Literal[0m] Found: "[1mCancelled[0m"
     [33m→[0m cancelled: { label: '[1m[31mCancelled[0m', variant: 'secondary' },
  [31m[Line 89][0m [[36mJS/TS String Literal[0m] Found: "[1mFile[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mFile[0m" />,
  [31m[Line 102][0m [[36mJS/TS String Literal[0m] Found: "[1mType[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mType[0m" />,
  [31m[Line 119][0m [[36mJS/TS String Literal[0m] Found: "[1mStatus[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mStatus[0m" />,
  [31m[Line 149][0m [[36mJSX Plain Text[0m] Found: "[1mExport failed[0m"
     [33m→[0m <p className="font-medium text-destructive mb-1">
  [31m[Line 167][0m [[36mJS/TS String Literal[0m] Found: "[1mRecords[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mRecords[0m" />,
  [31m[Line 183][0m [[36mJS/TS String Literal[0m] Found: "[1mProgress[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mProgress[0m" />,
  [31m[Line 208][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mCreated[0m" />,
  [31m[Line 224][0m [[36mJS/TS String Literal[0m] Found: "[1mCompleted[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mCompleted[0m" />,
  [31m[Line 243][0m [[36mJS/TS String Literal[0m] Found: "[1mDuration[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mDuration[0m" />,

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/export/hooks/useExportHistoriesRecordTableHeader.ts[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1m1 export job[0m"
     [33m→[0m ? '[1m[31m1 export job[0m'
  [31m[Line 19][0m [[36mTemplate Literal String[0m] Found: "[1mexport jobs[0m"
     [33m→[0m : `${totalCount.toLocaleString()} [1m[31mexport jobs[0m`;
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mAll types[0m"
     [33m→[0m ? '[1m[31mAll types[0m'

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/import/components/ImportHistoriesContext.tsx[0m
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1museImportHistoriesRecordTable must be used within ImportHistoriesRecordTableProvider[0m"
     [33m→[0m '[1m[31museImportHistoriesRecordTable must be used within ImportHistoriesRecordTableProvider[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/import/components/ImportHistoriesEmptyState.tsx[0m
  [31m[Line 12][0m [[36mTemplate Literal String[0m] Found: "[1mNo[0m"
     [33m→[0m title: (label: string | null) => `[1m[31mNo[0m ${label} imports yet`,
  [31m[Line 12][0m [[36mTemplate Literal String[0m] Found: "[1mimports yet[0m"
     [33m→[0m title: (label: string | null) => `No ${label} [1m[31mimports yet[0m`,
  [31m[Line 14][0m [[36mTemplate Literal String[0m] Found: "[1mimports will appear here after someone uploads a CSV file. Error files will also be available here whenever a job needs attention.[0m"
     [33m→[0m `${label} [1m[31mimports will appear here after someone uploads a CSV file. Error files will also be available here whenever a job needs attention.[0m`,
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mAll types[0m"
     [33m→[0m label: '[1m[31mAll types[0m',
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mNo imports yet[0m"
     [33m→[0m title: '[1m[31mNo imports yet[0m',
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mCSV imports started from your modules will appear here with their status, processed rows, and any error files you may need to review.[0m"
     [33m→[0m '[1m[31mCSV imports started from your modules will appear here with their status, processed rows, and any error files you may need to review.[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/import/components/ImportHistoriesErrorStatet.tsx[0m
  [31m[Line 15][0m [[36mJSX Plain Text[0m] Found: "[1mImport history couldn't be loaded[0m"
     [33m→[0m <Empty.Title>Import history couldn&apos;t be loaded</Empty.Title>
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1mTry refreshing this page again in a moment.[0m"
     [33m→[0m <Empty.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/import/components/ImportHistoriesRecordTableHeader.tsx[0m
  [31m[Line 26][0m [[36mJSX Plain Text[0m] Found: "[1mImport history[0m"
     [33m→[0m <h3 className="text-base font-semibold">[1m[31mImport history[0m</h3>
  [31m[Line 28][0m [[36mJSX Plain Text[0m] Found: "[1mReview completed and failed CSV imports, then open error files when
            a job needs attention.[0m"
     [33m→[0m <p className="text-sm text-muted-foreground">
  [31m[Line 36][0m [[36mJSX Plain Text[0m] Found: "[1msupported records[0m"
     [33m→[0m {contentTypes.length.toLocaleString()} [1m[31msupported records[0m
  [31m[Line 56][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter by type[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mFilter by type[0m" />
  [31m[Line 59][0m [[36mJSX Plain Text[0m] Found: "[1mAll types[0m"
     [33m→[0m <Select.Item value="all">[1m[31mAll types[0m</Select.Item>
  [31m[Line 69][0m [[36mJSX Plain Text[0m] Found: "[1mType filters are temporarily unavailable.[0m"
     [33m→[0m <p className="text-xs text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/import/components/ImportHistoryActionsCell.tsx[0m
  [31m[Line 51][0m [[36mJSX Plain Text[0m] Found: "[1mDownload imported file[0m"
     [33m→[0m <IconDownload /> [1m[31mDownload imported file[0m
  [31m[Line 58][0m [[36mJSX Plain Text[0m] Found: "[1mDownload error file[0m"
     [33m→[0m <IconDownload /> [1m[31mDownload error file[0m
  [31m[Line 68][0m [[36mJSX Plain Text[0m] Found: "[1mCancel import[0m"
     [33m→[0m <IconX /> [1m[31mCancel import[0m
  [31m[Line 74][0m [[36mJSX Plain Text[0m] Found: "[1mRestart import[0m"
     [33m→[0m <IconRefresh /> [1m[31mRestart import[0m
  [31m[Line 80][0m [[36mJSX Plain Text[0m] Found: "[1mResume import[0m"
     [33m→[0m <IconPlayerPlay /> [1m[31mResume import[0m

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/import/components/ImportHistoryColumns.tsx[0m
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mPending[0m"
     [33m→[0m pending: { label: '[1m[31mPending[0m', variant: 'secondary' },
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mValidating[0m"
     [33m→[0m validating: { label: '[1m[31mValidating[0m', variant: 'warning' },
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mProcessing[0m"
     [33m→[0m processing: { label: '[1m[31mProcessing[0m', variant: 'info' },
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mCompleted[0m"
     [33m→[0m completed: { label: '[1m[31mCompleted[0m', variant: 'success' },
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed[0m"
     [33m→[0m failed: { label: '[1m[31mFailed[0m', variant: 'destructive' },
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mCancelled[0m"
     [33m→[0m cancelled: { label: '[1m[31mCancelled[0m', variant: 'secondary' },
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mFile[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mFile[0m" />,
  [31m[Line 62][0m [[36mJS/TS String Literal[0m] Found: "[1mType[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mType[0m" />,
  [31m[Line 79][0m [[36mJS/TS String Literal[0m] Found: "[1mStatus[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mStatus[0m" />,
  [31m[Line 106][0m [[36mJS/TS String Literal[0m] Found: "[1mRecords[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mRecords[0m" />,
  [31m[Line 121][0m [[36mJS/TS String Literal[0m] Found: "[1mSucceeded[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mSucceeded[0m" />,
  [31m[Line 136][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mFailed[0m" />,
  [31m[Line 151][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mCreated[0m" />,
  [31m[Line 166][0m [[36mJS/TS String Literal[0m] Found: "[1mCompleted[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mCompleted[0m" />,
  [31m[Line 184][0m [[36mJS/TS String Literal[0m] Found: "[1mDuration[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mDuration[0m" />,

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/import/hooks/useImportHistoriesRecordTableHeader.ts[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1m1 import job[0m"
     [33m→[0m ? '[1m[31m1 import job[0m'
  [31m[Line 18][0m [[36mTemplate Literal String[0m] Found: "[1mimport jobs[0m"
     [33m→[0m : `${totalCount.toLocaleString()} [1m[31mimport jobs[0m`;
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mAll types[0m"
     [33m→[0m ? '[1m[31mAll types[0m'

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/settings/components/ImportExportSettingsBreadcrumb.tsx[0m
  [31m[Line 8][0m [[36mJSX Plain Text[0m] Found: "[1mImport & Export[0m"
     [33m→[0m <IconFileImport className="w-4 h-4 text-accent-foreground" />

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/settings/components/ImportExportSettingsSidebar.tsx[0m
  [31m[Line 11][0m [[36mJSX Plain Text[0m] Found: "[1mImport[0m"
     [33m→[0m <[1m[31mImport[0mExportSidebarItem to={ImportExportSettingsPath.Import}>
  [31m[Line 14][0m [[36mJSX Plain Text[0m] Found: "[1mExport[0m"
     [33m→[0m <Import[1m[31mExport[0mSidebarItem to={ImportExportSettingsPath.Export}>

[1m[33m📄 File: frontend/core-ui/src/modules/import-export/shared/formatEntityTypeLabel.ts[0m
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mAll types[0m"
     [33m→[0m return '[1m[31mAll types[0m';

[1m[33m📄 File: frontend/core-ui/src/modules/internal-notes/components/AddInternalNotes.tsx[0m
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mInternal note added successfully[0m"
     [33m→[0m title: '[1m[31mInternal note added successfully[0m',
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 70][0m [[36mJSX Plain Text[0m] Found: "[1mPost[0m"
     [33m→[0m {loading ? <Spinner size="sm" /> : <IconArrowUp className="w-4 h-4" />}

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/AuthLogDetailContent.tsx[0m
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mUnknown[0m"
     [33m→[0m const browser = `${ua.browser.name || '[1m[31mUnknown[0m'} ${
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mUnknown[0m"
     [33m→[0m const os = `${ua.os.name || '[1m[31mUnknown[0m'} ${ua.os.version || ''}`.trim();
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mDesktop[0m"
     [33m→[0m const device = ua.device.type || '[1m[31mDesktop[0m';
  [31m[Line 61][0m [[36mJS/TS String Literal[0m] Found: "[1mSession Details[0m"
     [33m→[0m title="[1m[31mSession Details[0m"
  [31m[Line 62][0m [[36mJS/TS String Literal[0m] Found: "[1mDevice, network, and authentication context captured for this session.[0m"
     [33m→[0m description="[1m[31mDevice, network, and authentication context captured for this session.[0m"
  [31m[Line 67][0m [[36mJS/TS String Literal[0m] Found: "[1mIP Address[0m"
     [33m→[0m title="[1m[31mIP Address[0m"
  [31m[Line 72][0m [[36mJS/TS String Literal[0m] Found: "[1mDevice[0m"
     [33m→[0m title="[1m[31mDevice[0m"
  [31m[Line 77][0m [[36mJS/TS String Literal[0m] Found: "[1mOperating System[0m"
     [33m→[0m title="[1m[31mOperating System[0m"
  [31m[Line 82][0m [[36mJS/TS String Literal[0m] Found: "[1mBrowser[0m"
     [33m→[0m title="[1m[31mBrowser[0m"
  [31m[Line 87][0m [[36mJS/TS String Literal[0m] Found: "[1mAuth Method[0m"
     [33m→[0m title="[1m[31mAuth Method[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/GraphqlLogDetailContent.tsx[0m
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mOperation Payload[0m"
     [33m→[0m title="[1m[31mOperation Payload[0m"
  [31m[Line 16][0m [[36mTemplate Literal String[0m] Found: "[1mCaptured arguments and response for[0m"
     [33m→[0m ? `[1m[31mCaptured arguments and response for[0m ${mutationName}.`
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mCaptured arguments and response for this GraphQL operation.[0m"
     [33m→[0m : '[1m[31mCaptured arguments and response for this GraphQL operation.[0m'
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mArguments[0m"
     [33m→[0m title="[1m[31mArguments[0m"
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mVariables and input values sent with this request.[0m"
     [33m→[0m description="[1m[31mVariables and input values sent with this request.[0m"
  [31m[Line 26][0m [[36mJS/TS String Literal[0m] Found: "[1mNo arguments were captured for this request.[0m"
     [33m→[0m emptyMessage="[1m[31mNo arguments were captured for this request.[0m"
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title={error ? '[1m[31mError[0m' : 'Result'}
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mResult[0m"
     [33m→[0m title={error ? 'Error' : '[1m[31mResult[0m'}
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mThe resolver returned an error payload.[0m"
     [33m→[0m ? '[1m[31mThe resolver returned an error payload.[0m'
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mResolved response returned by the API.[0m"
     [33m→[0m : '[1m[31mResolved response returned by the API.[0m'
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mNo result payload was captured for this request.[0m"
     [33m→[0m emptyMessage="[1m[31mNo result payload was captured for this request.[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/LogColumns.tsx[0m
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mStatus[0m"
     [33m→[0m <RecordTable.InlineHead icon={IconInfoCircle} label="[1m[31mStatus[0m" />
  [31m[Line 71][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated At[0m"
     [33m→[0m <RecordTable.InlineHead icon={IconCalendarTime} label="[1m[31mCreated At[0m" />
  [31m[Line 85][0m [[36mJS/TS String Literal[0m] Found: "[1mSource[0m"
     [33m→[0m <RecordTable.InlineHead icon={Icon[1m[31mSource[0mCode} label="Source" />
  [31m[Line 94][0m [[36mJS/TS String Literal[0m] Found: "[1mAction[0m"
     [33m→[0m header: () => <RecordTable.InlineHead icon={IconSettings} label="[1m[31mAction[0m" />,
  [31m[Line 102][0m [[36mJS/TS String Literal[0m] Found: "[1mUser[0m"
     [33m→[0m header: () => <RecordTable.InlineHead icon={Icon[1m[31mUser[0m} label="User" />,
  [31m[Line 107][0m [[36mJSX Plain Text[0m] Found: "[1mNo User[0m"
     [33m→[0m <RecordTableInlineCell className="text-border">

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/LogDetailPrimitives.tsx[0m
  [31m[Line 98][0m [[36mJS/TS String Literal[0m] Found: "[1mNo data captured for this section.[0m"
     [33m→[0m emptyMessage = '[1m[31mNo data captured for this section.[0m',
  [31m[Line 152][0m [[36mJS/TS String Literal[0m] Found: "[1mUnknown[0m"
     [33m→[0m {value || '[1m[31mUnknown[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/LogDetailProvider.tsx[0m
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mLoading log details...[0m"
     [33m→[0m return <LogLoading message="[1m[31mLoading log details...[0m" />;
  [31m[Line 33][0m [[36mJSX Plain Text[0m] Found: "[1mNo log detail found[0m"
     [33m→[0m <div className="text-lg font-medium mt-5 text-foreground">
  [31m[Line 36][0m [[36mJSX Plain Text[0m] Found: "[1mThe log detail you're looking for doesn't exist or may have been
          removed.[0m"
     [33m→[0m <div className="text-muted-foreground mt-2 text-sm text-center max-w-sm">
  [31m[Line 55][0m [[36mJS/TS String Literal[0m] Found: "[1museLogDetailContext must be used within LogDetailProvider[0m"
     [33m→[0m '[1m[31museLogDetailContext must be used within LogDetailProvider[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/LogDetailSheet.tsx[0m
  [31m[Line 11][0m [[36mJSX Plain Text[0m] Found: "[1mLog Details[0m"
     [33m→[0m <Sheet.Title>[1m[31mLog Details[0m</Sheet.Title>

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/LogDetailView.tsx[0m
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mWebhook Payload[0m"
     [33m→[0m title="[1m[31mWebhook Payload[0m"
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mCaptured request or response body for this webhook event.[0m"
     [33m→[0m description="[1m[31mCaptured request or response body for this webhook event.[0m"
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mPayload[0m"
     [33m→[0m title="[1m[31mPayload[0m"
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mNo webhook payload was captured.[0m"
     [33m→[0m emptyMessage="[1m[31mNo webhook payload was captured.[0m"
  [31m[Line 119][0m [[36mJS/TS String Literal[0m] Found: "[1mSomething went wrong[0m"
     [33m→[0m return error?.message || '[1m[31mSomething went wrong[0m';
  [31m[Line 141][0m [[36mJSX Plain Text[0m] Found: "[1mLog Details[0m"
     [33m→[0m <h2 className="text-xl font-semibold text-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/LogLoading.tsx[0m
  [31m[Line 7][0m [[36mJS/TS String Literal[0m] Found: "[1mLoading...[0m"
     [33m→[0m export function LogLoading({ message = '[1m[31mLoading...[0m' }: LogLoadingProps) {

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/LogUser.tsx[0m
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mUnknown user[0m"
     [33m→[0m const fullName = details?.fullName || user?.email || '[1m[31mUnknown user[0m';
  [31m[Line 61][0m [[36mJS/TS String Literal[0m] Found: "[1mUnknown user[0m"
     [33m→[0m if (!user) return email || '[1m[31mUnknown user[0m';
  [31m[Line 67][0m [[36mJS/TS String Literal[0m] Found: "[1mUnknown user[0m"
     [33m→[0m return user.email || email || '[1m[31mUnknown user[0m';

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/LogsRecordTable.tsx[0m
  [31m[Line 38][0m [[36mJSX Plain Text[0m] Found: "[1mSystem Logs[0m"
     [33m→[0m <IconChartPie className="w-5 h-5" />
  [31m[Line 51][0m [[36mTemplate Literal String[0m] Found: "[1mrecords found[0m"
     [33m→[0m ? `${totalCount} [1m[31mrecords found[0m`
  [31m[Line 79][0m [[36mJSX Plain Text[0m] Found: "[1mNo results[0m"
     [33m→[0m <Label>[1m[31mNo results[0m</Label>

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/MongoLogDetailContent.tsx[0m
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mChange Set[0m"
     [33m→[0m title="[1m[31mChange Set[0m"
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdated fields, removed fields, and array truncations.[0m"
     [33m→[0m description="[1m[31mUpdated fields, removed fields, and array truncations.[0m"
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mNo field-level diff was captured for this update.[0m"
     [33m→[0m emptyMessage="[1m[31mNo field-level diff was captured for this update.[0m"
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mChanges[0m"
     [33m→[0m title={action === 'update' ? '[1m[31mChanges[0m' : 'Document Snapshot'}
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mDocument Snapshot[0m"
     [33m→[0m title={action === 'update' ? 'Changes' : '[1m[31mDocument Snapshot[0m'}
  [31m[Line 55][0m [[36mTemplate Literal String[0m] Found: "[1mevent captured for[0m"
     [33m→[0m ? `${actionLabel} [1m[31mevent captured for[0m ${collectionLabel}.`
  [31m[Line 56][0m [[36mJS/TS String Literal[0m] Found: "[1mMongo document change captured by the log service.[0m"
     [33m→[0m : '[1m[31mMongo document change captured by the log service.[0m'
  [31m[Line 78][0m [[36mJS/TS String Literal[0m] Found: "[1mRemoved Document[0m"
     [33m→[0m title={action === 'delete' ? '[1m[31mRemoved Document[0m' : 'Document'}
  [31m[Line 78][0m [[36mJS/TS String Literal[0m] Found: "[1mDocument[0m"
     [33m→[0m title={action === 'delete' ? 'Removed [1m[31mDocument[0m' : 'Document'}
  [31m[Line 79][0m [[36mJS/TS String Literal[0m] Found: "[1mSnapshot stored with this Mongo change event.[0m"
     [33m→[0m description="[1m[31mSnapshot stored with this Mongo change event.[0m"
  [31m[Line 81][0m [[36mJS/TS String Literal[0m] Found: "[1mNo document snapshot was captured for this event.[0m"
     [33m→[0m emptyMessage="[1m[31mNo document snapshot was captured for this event.[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/filters/LogDocIdFilter.tsx[0m
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mPaste document ID[0m"
     [33m→[0m placeholder="[1m[31mPaste document ID[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/filters/LogRecordTableFilterBarOperator.tsx[0m
  [31m[Line 35][0m [[36mTemplate Literal String[0m] Found: "[1mOperator[0m"
     [33m→[0m `${fieldName}[1m[31mOperator[0m`,
  [31m[Line 38][0m [[36mTemplate Literal String[0m] Found: "[1mOperator[0m"
     [33m→[0m const operator = searchParams.get(`${fieldName}[1m[31mOperator[0m`) || undefined;
  [31m[Line 65][0m [[36mTemplate Literal String[0m] Found: "[1mOperator[0m"
     [33m→[0m [`${fieldName}[1m[31mOperator[0m`]: value === operator ? '' : value,

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/filters/LogRecordTableFilterBars.tsx[0m
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mOperator[0m"
     [33m→[0m .filter((field) => !field.includes('[1m[31mOperator[0m'))
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mSet value[0m"
     [33m→[0m return '[1m[31mSet value[0m';
  [31m[Line 78][0m [[36mJSX Plain Text[0m] Found: "[1mStatus[0m"
     [33m→[0m <IconProgressCheck />
  [31m[Line 93][0m [[36mJSX Plain Text[0m] Found: "[1mSource[0m"
     [33m→[0m <Icon[1m[31mSource[0mCode />
  [31m[Line 109][0m [[36mJSX Plain Text[0m] Found: "[1mCreated At[0m"
     [33m→[0m <IconCalendarPlus />
  [31m[Line 117][0m [[36mJSX Plain Text[0m] Found: "[1mAction[0m"
     [33m→[0m <IconProgressCheck />
  [31m[Line 135][0m [[36mJSX Plain Text[0m] Found: "[1mContent Type[0m"
     [33m→[0m <IconTag />
  [31m[Line 152][0m [[36mJSX Plain Text[0m] Found: "[1mDocument ID[0m"
     [33m→[0m <IconHash />
  [31m[Line 177][0m [[36mJS/TS String Literal[0m] Found: "[1mType a filter name [0m"
     [33m→[0m placeholder="[1m[31mType a filter name [0m"
  [31m[Line 201][0m [[36mJS/TS String Literal[0m] Found: "[1mType a filter value [0m"
     [33m→[0m placeholder="[1m[31mType a filter value [0m"

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/filters/LogRecordTableFilterMenu.tsx[0m
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m placeholder="[1m[31mFilter[0m"
  [31m[Line 29][0m [[36mJSX Plain Text[0m] Found: "[1mStatus[0m"
     [33m→[0m <IconProgressCheck />
  [31m[Line 33][0m [[36mJSX Plain Text[0m] Found: "[1mSource[0m"
     [33m→[0m <Icon[1m[31mSource[0mCode />
  [31m[Line 38][0m [[36mJSX Plain Text[0m] Found: "[1mAction[0m"
     [33m→[0m <IconSettings />
  [31m[Line 43][0m [[36mJSX Plain Text[0m] Found: "[1mUser[0m"
     [33m→[0m <Icon[1m[31mUser[0m />
  [31m[Line 47][0m [[36mJSX Plain Text[0m] Found: "[1mContent Type[0m"
     [33m→[0m <IconTag />
  [31m[Line 51][0m [[36mJSX Plain Text[0m] Found: "[1mDocument ID[0m"
     [33m→[0m <IconHash />
  [31m[Line 56][0m [[36mJSX Plain Text[0m] Found: "[1mCreated At[0m"
     [33m→[0m <IconCalendarPlus />
  [31m[Line 62][0m [[36mJS/TS String Literal[0m] Found: "[1mType a custom field name[0m"
     [33m→[0m placeholder="[1m[31mType a custom field name[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/filters/LogSourceFilter.tsx[0m
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mMongoDb[0m"
     [33m→[0m label: '[1m[31mMongoDb[0m',
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mGraphql[0m"
     [33m→[0m label: '[1m[31mGraphql[0m',
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mAuthentication[0m"
     [33m→[0m label: '[1m[31mAuthentication[0m',
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mApi Request[0m"
     [33m→[0m label: '[1m[31mApi Request[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/logs/components/filters/LogStatusFilter.tsx[0m
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mbg-success/10 data-[selected=true]:bg-success/20 text-success border-success/10[0m"
     [33m→[0m '[1m[31mbg-success/10 data-[selected=true]:bg-success/20 text-success border-success/10[0m',
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m label: '[1m[31mSuccess[0m',
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mmt-2 bg-destructive/10 data-[selected=true]:bg-destructive/20 text-destructive border-destructive/10[0m"
     [33m→[0m '[1m[31mmt-2 bg-destructive/10 data-[selected=true]:bg-destructive/20 text-destructive border-destructive/10[0m',
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed[0m"
     [33m→[0m label: '[1m[31mFailed[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/logs/constants/logFilter.ts[0m
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated[0m"
     [33m→[0m label: '[1m[31mCreated[0m',
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdated[0m"
     [33m→[0m label: '[1m[31mUpdated[0m',
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mRemoved[0m"
     [33m→[0m label: '[1m[31mRemoved[0m',
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mMutations[0m"
     [33m→[0m label: '[1m[31mMutations[0m',
  [31m[Line 70][0m [[36mJS/TS String Literal[0m] Found: "[1mLogin[0m"
     [33m→[0m label: '[1m[31mLogin[0m',
  [31m[Line 75][0m [[36mJS/TS String Literal[0m] Found: "[1mLogout[0m"
     [33m→[0m label: '[1m[31mLogout[0m',
  [31m[Line 84][0m [[36mJS/TS String Literal[0m] Found: "[1mEquals to[0m"
     [33m→[0m { value: 'eq', label: '[1m[31mEquals to[0m' },
  [31m[Line 85][0m [[36mJS/TS String Literal[0m] Found: "[1mNot Equals[0m"
     [33m→[0m { value: 'ne', label: '[1m[31mNot Equals[0m' },

[1m[33m📄 File: frontend/core-ui/src/modules/logs/hooks/useLogs.tsx[0m
  [31m[Line 57][0m [[36mTemplate Literal String[0m] Found: "[1mOperator[0m"
     [33m→[0m if (!customFilter?.includes(`[1m[31mOperator[0m`)) {
  [31m[Line 59][0m [[36mTemplate Literal String[0m] Found: "[1mOperator[0m"
     [33m→[0m const operator = (queryParams as any)[`${customFilter}[1m[31mOperator[0m`];

[1m[33m📄 File: frontend/core-ui/src/modules/navigation/components/NavigationPlugins.tsx[0m
  [31m[Line 19][0m [[36mJSX Plain Text[0m] Found: "[1mExit[0m"
     [33m→[0m <span className="font-sans font-semibold text-accent-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/notification/components/NoNotificationSelected.tsx[0m
  [31m[Line 12][0m [[36mJSX Plain Text[0m] Found: "[1mNo notification selected[0m"
     [33m→[0m <div className="text-lg font-medium mt-5 text-muted-foreground">
  [31m[Line 15][0m [[36mJSX Plain Text[0m] Found: "[1mPlease select a notification to view its details.[0m"
     [33m→[0m <div className="text-accent-foreground mt-2 text-sm">

[1m[33m📄 File: frontend/core-ui/src/modules/notification/components/NotificationItem.tsx[0m
  [31m[Line 85][0m [[36mJSX Plain Text[0m] Found: "[1mmark as read[0m"
     [33m→[0m <IconBackspace className="size-4 mr-1" />

[1m[33m📄 File: frontend/core-ui/src/modules/notification/components/NotificationSort.tsx[0m
  [31m[Line 29][0m [[36mJSX Plain Text[0m] Found: "[1mNewest[0m"
     [33m→[0m <Select.Item value="new">[1m[31mNewest[0m</Select.Item>
  [31m[Line 30][0m [[36mJSX Plain Text[0m] Found: "[1mOldest[0m"
     [33m→[0m <Select.Item value="old">[1m[31mOldest[0m</Select.Item>
  [31m[Line 31][0m [[36mJSX Plain Text[0m] Found: "[1mPriority[0m"
     [33m→[0m <Select.Item value="priority">[1m[31mPriority[0m</Select.Item>
  [31m[Line 33][0m [[36mJSX Plain Text[0m] Found: "[1mRead at[0m"
     [33m→[0m <Select.Item value="readAt">[1m[31mRead at[0m</Select.Item>

[1m[33m📄 File: frontend/core-ui/src/modules/notification/components/Notifications.tsx[0m
  [31m[Line 38][0m [[36mJSX Plain Text[0m] Found: "[1mNo notifications to display at the moment.[0m"
     [33m→[0m <span className="text-sm">
  [31m[Line 69][0m [[36mJS/TS String Literal[0m] Found: "[1minline-flex flex-none[0m"
     [33m→[0m <Spinner containerClassName="[1m[31minline-flex flex-none[0m" />
  [31m[Line 69][0m [[36mJSX Plain Text[0m] Found: "[1mloading more...[0m"
     [33m→[0m <Spinner containerClassName="inline-flex flex-none" />

[1m[33m📄 File: frontend/core-ui/src/modules/notification/components/contents/import-export/export/components/ExportNotificationContent.tsx[0m
  [31m[Line 47][0m [[36mJSX Plain Text[0m] Found: "[1mRows[0m"
     [33m→[0m <span>[1m[31mRows[0m</span>
  [31m[Line 54][0m [[36mJSX Plain Text[0m] Found: "[1mExported[0m"
     [33m→[0m <span>[1m[31mExported[0m</span>
  [31m[Line 61][0m [[36mJSX Plain Text[0m] Found: "[1mErrors[0m"
     [33m→[0m <span>[1m[31mErrors[0m</span>
  [31m[Line 67][0m [[36mJS/TS String Literal[0m] Found: "[1mAn error occurred during export.[0m"
     [33m→[0m {errorMessage || '[1m[31mAn error occurred during export.[0m'}
  [31m[Line 74][0m [[36mJSX Plain Text[0m] Found: "[1mDownload File[0m"
     [33m→[0m <IconDownload className="size-4" />
  [31m[Line 89][0m [[36mJS/TS String Literal[0m] Found: "[1mCompleted[0m"
     [33m→[0m label: '[1m[31mCompleted[0m',
  [31m[Line 91][0m [[36mJS/TS String Literal[0m] Found: "[1mbg-success/10 text-success[0m"
     [33m→[0m badgeClass: '[1m[31mbg-success/10 text-success[0m',
  [31m[Line 94][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed[0m"
     [33m→[0m label: '[1m[31mFailed[0m',
  [31m[Line 96][0m [[36mJS/TS String Literal[0m] Found: "[1mbg-destructive/10 text-destructive[0m"
     [33m→[0m badgeClass: '[1m[31mbg-destructive/10 text-destructive[0m',
  [31m[Line 103][0m [[36mJS/TS String Literal[0m] Found: "[1mProcessing[0m"
     [33m→[0m label: '[1m[31mProcessing[0m',
  [31m[Line 105][0m [[36mJS/TS String Literal[0m] Found: "[1mbg-info/10 text-info[0m"
     [33m→[0m badgeClass: '[1m[31mbg-info/10 text-info[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/notification/components/contents/import-export/export/hooks/useExportNotificationData.ts[0m
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mExport[0m"
     [33m→[0m fileName = '[1m[31mExport[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/notification/components/contents/import-export/import/components/ImportNotificationContent.tsx[0m
  [31m[Line 47][0m [[36mJSX Plain Text[0m] Found: "[1mRows[0m"
     [33m→[0m <span>[1m[31mRows[0m</span>
  [31m[Line 54][0m [[36mJSX Plain Text[0m] Found: "[1mImported[0m"
     [33m→[0m <span>[1m[31mImported[0m</span>
  [31m[Line 61][0m [[36mJSX Plain Text[0m] Found: "[1mErrors[0m"
     [33m→[0m <span>[1m[31mErrors[0m</span>
  [31m[Line 67][0m [[36mJS/TS String Literal[0m] Found: "[1mAn error occurred during import.[0m"
     [33m→[0m {errorMessage || '[1m[31mAn error occurred during import.[0m'}
  [31m[Line 78][0m [[36mJSX Plain Text[0m] Found: "[1mDownload Error File[0m"
     [33m→[0m <IconDownload className="size-4" />
  [31m[Line 93][0m [[36mJS/TS String Literal[0m] Found: "[1mCompleted[0m"
     [33m→[0m label: '[1m[31mCompleted[0m',
  [31m[Line 95][0m [[36mJS/TS String Literal[0m] Found: "[1mbg-success/10 text-success[0m"
     [33m→[0m badgeClass: '[1m[31mbg-success/10 text-success[0m',
  [31m[Line 98][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed[0m"
     [33m→[0m label: '[1m[31mFailed[0m',
  [31m[Line 100][0m [[36mJS/TS String Literal[0m] Found: "[1mbg-destructive/10 text-destructive[0m"
     [33m→[0m badgeClass: '[1m[31mbg-destructive/10 text-destructive[0m',
  [31m[Line 107][0m [[36mJS/TS String Literal[0m] Found: "[1mProcessing[0m"
     [33m→[0m label: '[1m[31mProcessing[0m',
  [31m[Line 109][0m [[36mJS/TS String Literal[0m] Found: "[1mbg-info/10 text-info[0m"
     [33m→[0m badgeClass: '[1m[31mbg-info/10 text-info[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/notification/components/contents/import-export/import/hooks/useImportNotificationData.ts[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mImport[0m"
     [33m→[0m fileName = '[1m[31mImport[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/notification/components/contents/system/UnknownSystemNotificationContent.tsx[0m
  [31m[Line 13][0m [[36mJSX Plain Text[0m] Found: "[1mUnknown notification template[0m"
     [33m→[0m <div className="text-lg font-semibold mt-5 text-muted-foreground">
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1mThe notification type "unknown_template" is not recognized. This may be
        due to a missing template or an outdated notification format.[0m"
     [33m→[0m <div className=" text-accent-foreground mt-2 max-w-sm text-center">

[1m[33m📄 File: frontend/core-ui/src/modules/notification/components/contents/system/WelcomeMessage.tsx[0m
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mContacts[0m"
     [33m→[0m title: '[1m[31mContacts[0m',
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mKeep all customer and lead information in one hub.[0m"
     [33m→[0m description: '[1m[31mKeep all customer and lead information in one hub.[0m',
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mTry it out now[0m"
     [33m→[0m label: '[1m[31mTry it out now[0m',
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mProducts[0m"
     [33m→[0m title: '[1m[31mProducts[0m',
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mManage and showcase all your products or services in one place.[0m"
     [33m→[0m '[1m[31mManage and showcase all your products or services in one place.[0m',
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mTry it out now[0m"
     [33m→[0m label: '[1m[31mTry it out now[0m',
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mSegments[0m"
     [33m→[0m title: '[1m[31mSegments[0m',
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mGroup customers by behavior, source, or data for targeted engagement.[0m"
     [33m→[0m '[1m[31mGroup customers by behavior, source, or data for targeted engagement.[0m',
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mTry it out now[0m"
     [33m→[0m label: '[1m[31mTry it out now[0m',
  [31m[Line 46][0m [[36mJS/TS String Literal[0m] Found: "[1mAutomation[0m"
     [33m→[0m title: '[1m[31mAutomation[0m',
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mAutomate repetitive tasks and save time.[0m"
     [33m→[0m description: '[1m[31mAutomate repetitive tasks and save time.[0m',
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mTry it out now[0m"
     [33m→[0m label: '[1m[31mTry it out now[0m',
  [31m[Line 56][0m [[36mJS/TS String Literal[0m] Found: "[1mDocumentation[0m"
     [33m→[0m title: '[1m[31mDocumentation[0m',
  [31m[Line 59][0m [[36mJS/TS String Literal[0m] Found: "[1mStore and organize your docs, link them to tickets, conversations and tasks.[0m"
     [33m→[0m '[1m[31mStore and organize your docs, link them to tickets, conversations and tasks.[0m',
  [31m[Line 61][0m [[36mJS/TS String Literal[0m] Found: "[1mTry it out now[0m"
     [33m→[0m label: '[1m[31mTry it out now[0m',
  [31m[Line 70][0m [[36mJS/TS String Literal[0m] Found: "[1mWelcome to erxes[0m"
     [33m→[0m title="[1m[31mWelcome to erxes[0m"
  [31m[Line 71][0m [[36mJS/TS String Literal[0m] Found: "[1mA New Experience Begins![0m"
     [33m→[0m description="[1m[31mA New Experience Begins![0m"

[1m[33m📄 File: frontend/core-ui/src/modules/notification/components/filter/NotificationFilterBar.tsx[0m
  [31m[Line 40][0m [[36mJSX Plain Text[0m] Found: "[1mNotification Type[0m"
     [33m→[0m <IconNotification />
  [31m[Line 56][0m [[36mJSX Plain Text[0m] Found: "[1mPriority[0m"
     [33m→[0m <IconEyeUp />
  [31m[Line 75][0m [[36mJSX Plain Text[0m] Found: "[1mCreated at[0m"
     [33m→[0m <IconCalendarPlus />

[1m[33m📄 File: frontend/core-ui/src/modules/notification/components/filter/NotificationFilterMenu.tsx[0m
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m placeholder="[1m[31mFilter[0m"
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mToggle unread[0m"
     [33m→[0m aria-label="[1m[31mToggle unread[0m"
  [31m[Line 31][0m [[36mJSX Plain Text[0m] Found: "[1mUnread[0m"
     [33m→[0m >
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mToggle all[0m"
     [33m→[0m aria-label="[1m[31mToggle all[0m"
  [31m[Line 38][0m [[36mJSX Plain Text[0m] Found: "[1mAll[0m"
     [33m→[0m >
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mToggle Read[0m"
     [33m→[0m aria-label="[1m[31mToggle Read[0m"
  [31m[Line 45][0m [[36mJSX Plain Text[0m] Found: "[1mRead[0m"
     [33m→[0m >
  [31m[Line 53][0m [[36mJSX Plain Text[0m] Found: "[1mNotification Type[0m"
     [33m→[0m <IconNotification />
  [31m[Line 57][0m [[36mJSX Plain Text[0m] Found: "[1mPriority[0m"
     [33m→[0m <IconEyeUp />
  [31m[Line 62][0m [[36mJSX Plain Text[0m] Found: "[1mFilter by date[0m"
     [33m→[0m <IconCalendar />
  [31m[Line 67][0m [[36mJSX Plain Text[0m] Found: "[1mFilter by sender[0m"
     [33m→[0m <IconUserUp />

[1m[33m📄 File: frontend/core-ui/src/modules/notification/components/filter/NotificationPriorityCommandBar.tsx[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mSearch[0m"
     [33m→[0m <Command.Input placeholder="[1m[31mSearch[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/notification/components/filter/NotificationTypeCommandBar.tsx[0m
  [31m[Line 9][0m [[36mJS/TS String Literal[0m] Found: "[1mSearch[0m"
     [33m→[0m <Command.Input placeholder="[1m[31mSearch[0m" focusOnMount />

[1m[33m📄 File: frontend/core-ui/src/modules/notification/hooks/useMarkAsReadNotification.ts[0m
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mNotification[0m"
     [33m→[0m id: cache.identify({ __typename: '[1m[31mNotification[0m', _id: id }),

[1m[33m📄 File: frontend/core-ui/src/modules/notification/settings/components/NotificationSettings.tsx[0m
  [31m[Line 25][0m [[36mJSX Plain Text[0m] Found: "[1mReceive notifications from this plugin[0m"
     [33m→[0m <p className="mb-3 text-muted-foreground text-xs">

[1m[33m📄 File: frontend/core-ui/src/modules/notification/settings/components/NotificationSettingsChannelChip.tsx[0m
  [31m[Line 8][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail[0m"
     [33m→[0m label: '[1m[31mEmail[0m',
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mMobile[0m"
     [33m→[0m label: '[1m[31mMobile[0m',
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mOther[0m"
     [33m→[0m label: '[1m[31mOther[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/notification/settings/components/NotificationSettingsModule.tsx[0m
  [31m[Line 27][0m [[36mJSX Plain Text[0m] Found: "[1mevents active[0m"
     [33m→[0m {activeEvents} of {events.length} [1m[31mevents active[0m

[1m[33m📄 File: frontend/core-ui/src/modules/notification/settings/context/NotificationSettingsProvider.tsx[0m
  [31m[Line 134][0m [[36mJS/TS String Literal[0m] Found: "[1museNotificationSettings must be used within NotificationSettingsProvider[0m"
     [33m→[0m '[1m[31museNotificationSettings must be used within NotificationSettingsProvider[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/onboarding/components/FinalSection.tsx[0m
  [31m[Line 42][0m [[36mJSX Plain Text[0m] Found: "[1mYou're all set![0m"
     [33m→[0m <h2 className="text-xl md:text-2xl font-semibold text-foreground text-center">
  [31m[Line 45][0m [[36mJSX Plain Text[0m] Found: "[1mYour workspace is ready. Start exploring and make the most of your
          experience operating system.[0m"
     [33m→[0m <p className="text-xs md:text-sm text-muted-foreground text-center px-4 max-w-md">
  [31m[Line 65][0m [[36mJSX Plain Text[0m] Found: "[1mStart exploring[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/modules/onboarding/components/InviteTeamMemberSection.tsx[0m
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease enter a valid email address[0m"
     [33m→[0m setError('[1m[31mPlease enter a valid email address[0m');
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mThis email has already been added[0m"
     [33m→[0m setError('[1m[31mThis email has already been added[0m');
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease add at least one email address[0m"
     [33m→[0m setError('[1m[31mPlease add at least one email address[0m');
  [31m[Line 56][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease enter a valid email address[0m"
     [33m→[0m setError('[1m[31mPlease enter a valid email address[0m');
  [31m[Line 61][0m [[36mJS/TS String Literal[0m] Found: "[1mThis email has already been added[0m"
     [33m→[0m setError('[1m[31mThis email has already been added[0m');
  [31m[Line 108][0m [[36mJSX Plain Text[0m] Found: "[1mInvite team members[0m"
     [33m→[0m <h2 className="text-2xl font-semibold text-foreground">
  [31m[Line 111][0m [[36mJSX Plain Text[0m] Found: "[1mAdd multiple email addresses to invite your team[0m"
     [33m→[0m <p className="text-sm text-muted-foreground">
  [31m[Line 125][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter email addresses[0m"
     [33m→[0m placeholder="[1m[31mEnter email addresses[0m"
  [31m[Line 137][0m [[36mJSX Plain Text[0m] Found: "[1mSeparate emails with comma, space, or enter[0m"
     [33m→[0m <p className="text-sm text-muted-foreground mt-1.5">
  [31m[Line 162][0m [[36mJSX Plain Text[0m] Found: "[1mContinue[0m"
     [33m→[0m <Button onClick={onClick} className="w-full cursor-pointer" size="lg">
  [31m[Line 170][0m [[36mJSX Plain Text[0m] Found: "[1mI'll do this later[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/modules/onboarding/components/OnboardingStepper.tsx[0m
  [31m[Line 28][0m [[36mTemplate Literal String[0m] Found: "[1mGo to step[0m"
     [33m→[0m aria-label={`[1m[31mGo to step[0m ${index + 1}`}

[1m[33m📄 File: frontend/core-ui/src/modules/onboarding/components/ThemeSection.tsx[0m
  [31m[Line 31][0m [[36mJSX Plain Text[0m] Found: "[1mChoose your theme[0m"
     [33m→[0m <h2 className="text-xl md:text-2xl font-semibold text-foreground text-center">
  [31m[Line 34][0m [[36mJSX Plain Text[0m] Found: "[1mSelect the appearance that suits your preference[0m"
     [33m→[0m <p className="text-xs md:text-sm text-muted-foreground text-center px-4">
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mLight Theme[0m"
     [33m→[0m alt="[1m[31mLight Theme[0m"
  [31m[Line 67][0m [[36mJSX Plain Text[0m] Found: "[1mLight[0m"
     [33m→[0m >
  [31m[Line 77][0m [[36mJS/TS String Literal[0m] Found: "[1mDark Theme[0m"
     [33m→[0m alt="[1m[31mDark Theme[0m"
  [31m[Line 95][0m [[36mJSX Plain Text[0m] Found: "[1mDark[0m"
     [33m→[0m >
  [31m[Line 105][0m [[36mJS/TS String Literal[0m] Found: "[1mSystem Theme[0m"
     [33m→[0m alt="[1m[31mSystem Theme[0m"
  [31m[Line 123][0m [[36mJSX Plain Text[0m] Found: "[1mSystem[0m"
     [33m→[0m >
  [31m[Line 142][0m [[36mJSX Plain Text[0m] Found: "[1mContinue[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/modules/onboarding/components/UserCredentialSection.tsx[0m
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least 8 characters long[0m"
     [33m→[0m .min(8, '[1m[31mAt least 8 characters long[0m')
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least one number[0m"
     [33m→[0m .regex(/\d/, '[1m[31mAt least one number[0m')
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least one lowercase letter[0m"
     [33m→[0m .regex(/[a-z]/, '[1m[31mAt least one lowercase letter[0m')
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least one uppercase letter[0m"
     [33m→[0m .regex(/[A-Z]/, '[1m[31mAt least one uppercase letter[0m'),
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mUsername is required[0m"
     [33m→[0m username: z.string().min(1, '[1m[31mUsername is required[0m'),
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mPasswords don't match[0m"
     [33m→[0m message: "[1m[31mPasswords don't match[0m",
  [31m[Line 76][0m [[36mJSX Plain Text[0m] Found: "[1mSet up your account[0m"
     [33m→[0m <h2 className="text-2xl font-semibold text-foreground">
  [31m[Line 79][0m [[36mJSX Plain Text[0m] Found: "[1mCreate your username and password to get started[0m"
     [33m→[0m <p className="text-sm text-muted-foreground">
  [31m[Line 101][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter username[0m"
     [33m→[0m placeholder="[1m[31mEnter username[0m"
  [31m[Line 120][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter password[0m"
     [33m→[0m placeholder="[1m[31mEnter password[0m"
  [31m[Line 153][0m [[36mJS/TS String Literal[0m] Found: "[1mConfirm password[0m"
     [33m→[0m placeholder="[1m[31mConfirm password[0m"
  [31m[Line 179][0m [[36mJSX Plain Text[0m] Found: "[1mContinue[0m"
     [33m→[0m <Button type="submit" className="w-full cursor-pointer" size="lg">

[1m[33m📄 File: frontend/core-ui/src/modules/onboarding/components/UserMoreInfoSection.tsx[0m
  [31m[Line 10][0m [[36mJS/TS String Literal[0m] Found: "[1mFirst name is required[0m"
     [33m→[0m firstName: z.string().min(1, '[1m[31mFirst name is required[0m'),
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mLast name is required[0m"
     [33m→[0m lastName: z.string().min(1, '[1m[31mLast name is required[0m'),
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mError updating user[0m"
     [33m→[0m title: '[1m[31mError updating user[0m',
  [31m[Line 73][0m [[36mJSX Plain Text[0m] Found: "[1mComplete your profile[0m"
     [33m→[0m <h2 className="text-2xl font-semibold text-foreground">
  [31m[Line 76][0m [[36mJSX Plain Text[0m] Found: "[1mAdd your details to personalize your experience[0m"
     [33m→[0m <p className="text-sm text-muted-foreground">
  [31m[Line 114][0m [[36mJSX Plain Text[0m] Found: "[1mUpload a profile picture to help identify you.[0m"
     [33m→[0m <Form.Description className="text-xs">
  [31m[Line 132][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter first name[0m"
     [33m→[0m placeholder="[1m[31mEnter first name[0m"
  [31m[Line 150][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter last name[0m"
     [33m→[0m placeholder="[1m[31mEnter last name[0m"
  [31m[Line 159][0m [[36mJSX Plain Text[0m] Found: "[1mContinue[0m"
     [33m→[0m <Button type="submit" className="w-full" size="lg">

[1m[33m📄 File: frontend/core-ui/src/modules/onboarding/components/WelcomeSection.tsx[0m
  [31m[Line 50][0m [[36mJSX Plain Text[0m] Found: "[1mWelcome to[0m"
     [33m→[0m <h1 className=" font-semibold text-foreground text-[2.3rem]">
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mAn open-source experience operating system (XOS)[0m"
     [33m→[0m '[1m[31mAn open-source experience operating system (XOS)[0m'}
  [31m[Line 75][0m [[36mJSX Plain Text[0m] Found: "[1mGet started[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/modules/organization/owner/components/CreateOwner.tsx[0m
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter email[0m"
     [33m→[0m <Input type="email" placeholder="[1m[31mEnter email[0m" {...field} />
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter first name[0m"
     [33m→[0m <Input type="text" placeholder="[1m[31mEnter first name[0m" {...field} />
  [31m[Line 61][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter last name[0m"
     [33m→[0m <Input type="text" placeholder="[1m[31mEnter last name[0m" {...field} />
  [31m[Line 75][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter password[0m"
     [33m→[0m placeholder="[1m[31mEnter password[0m"
  [31m[Line 92][0m [[36mJS/TS String Literal[0m] Found: "[1mConfirm password[0m"
     [33m→[0m placeholder="[1m[31mConfirm password[0m"
  [31m[Line 115][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect purpose[0m"
     [33m→[0m {field.value || '[1m[31mSelect purpose[0m'}
  [31m[Line 143][0m [[36mJSX Plain Text[0m] Found: "[1mSubscribe to email updates[0m"
     [33m→[0m <Form.Label>[1m[31mSubscribe to email updates[0m</Form.Label>
  [31m[Line 149][0m [[36mJSX Plain Text[0m] Found: "[1mCreate Owner[0m"
     [33m→[0m <Button type="submit">[1m[31mCreate Owner[0m</Button>

[1m[33m📄 File: frontend/core-ui/src/modules/organization/owner/hooks/useCreateOwner.ts[0m
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mOwner has been created successfully[0m"
     [33m→[0m description: '[1m[31mOwner has been created successfully[0m',
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mUh oh! Something went wrong.[0m"
     [33m→[0m title: '[1m[31mUh oh! Something went wrong.[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/organization/owner/hooks/useCreateOwnerForm.ts[0m
  [31m[Line 10][0m [[36mJS/TS String Literal[0m] Found: "[1mmanage a personal project[0m"
     [33m→[0m value: '[1m[31mmanage a personal project[0m',
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mManage a personal project[0m"
     [33m→[0m label: '[1m[31mManage a personal project[0m',
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mmanage an internal company use case[0m"
     [33m→[0m value: '[1m[31mmanage an internal company use case[0m',
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mManage an internal company use case[0m"
     [33m→[0m label: '[1m[31mManage an internal company use case[0m',
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mattract new businesses[0m"
     [33m→[0m value: '[1m[31mattract new businesses[0m',
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mAttract new businesses[0m"
     [33m→[0m label: '[1m[31mAttract new businesses[0m',
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail must be a valid email[0m"
     [33m→[0m email: z.string().trim().email('[1m[31mEmail must be a valid email[0m'),
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mMust contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters[0m"
     [33m→[0m '[1m[31mMust contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters[0m',
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mMust contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters[0m"
     [33m→[0m '[1m[31mMust contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters[0m',
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mPasswords don't match[0m"
     [33m→[0m message: "[1m[31mPasswords don't match[0m",

[1m[33m📄 File: frontend/core-ui/src/modules/organization/providers/OrganizationProvider.tsx[0m
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mlink[rel='shortcut icon'][0m"
     [33m→[0m document.querySelector<HTMLLinkElement>("[1m[31mlink[rel='shortcut icon'][0m");

[1m[33m📄 File: frontend/core-ui/src/modules/plugins/providers/PluginConfigsProvidersEffect.tsx[0m
  [31m[Line 35][0m [[36mTemplate Literal String[0m] Found: "[1mFailed to load config from[0m"
     [33m→[0m console.error(`[1m[31mFailed to load config from[0m ${remote.name}:`, error);

[1m[33m📄 File: frontend/core-ui/src/modules/products/components/ProductColumns.tsx[0m
  [31m[Line 140][0m [[36mJS/TS String Literal[0m] Found: "[1mAttached[0m"
     [33m→[0m const value = hasAttachment ? '[1m[31mAttached[0m' : 'None';
  [31m[Line 140][0m [[36mJS/TS String Literal[0m] Found: "[1mNone[0m"
     [33m→[0m const value = hasAttachment ? 'Attached' : '[1m[31mNone[0m';
  [31m[Line 179][0m [[36mJS/TS String Literal[0m] Found: "[1mProduct[0m"
     [33m→[0m __typename: '[1m[31mProduct[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/products/components/ProductCreateSidebar.tsx[0m
  [31m[Line 8][0m [[36mJSX Plain Text[0m] Found: "[1mGeneral[0m"
     [33m→[0m <Sidebar.GroupLabel>[1m[31mGeneral[0m</Sidebar.GroupLabel>

[1m[33m📄 File: frontend/core-ui/src/modules/products/components/ProductMoreCell.tsx[0m
  [31m[Line 38][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m className="w-4 h-4" />
  [31m[Line 49][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash className="w-4 h-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/products/components/ProductSidebar.tsx[0m
  [31m[Line 11][0m [[36mJSX Plain Text[0m] Found: "[1mProducts types[0m"
     [33m→[0m <Sidebar.GroupLabel>[1m[31mProducts types[0m</Sidebar.GroupLabel>

[1m[33m📄 File: frontend/core-ui/src/modules/products/components/ProductsBreadcrumb.tsx[0m
  [31m[Line 23][0m [[36mJSX Plain Text[0m] Found: "[1mProduct[0m"
     [33m→[0m <IconCube />

[1m[33m📄 File: frontend/core-ui/src/modules/products/components/ProductsFilter.tsx[0m
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mProduct[0m"
     [33m→[0m { label: '[1m[31mProduct[0m', value: 'product' },
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mService[0m"
     [33m→[0m { label: '[1m[31mService[0m', value: 'service' },
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mSubscription[0m"
     [33m→[0m { label: '[1m[31mSubscription[0m', value: 'subscription' },
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mUnique[0m"
     [33m→[0m { label: '[1m[31mUnique[0m', value: 'unique' },
  [31m[Line 30][0m [[36mJSX Plain Text[0m] Found: "[1mType[0m"
     [33m→[0m <IconBriefcase />
  [31m[Line 74][0m [[36mJSX Plain Text[0m] Found: "[1mType[0m"
     [33m→[0m <IconBriefcase />
  [31m[Line 82][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect type[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect type[0m" />
  [31m[Line 107][0m [[36mJS/TS String Literal[0m] Found: "[1mVendor[0m"
     [33m→[0m label="[1m[31mVendor[0m"
  [31m[Line 123][0m [[36mJS/TS String Literal[0m] Found: "[1mBrands[0m"
     [33m→[0m label="[1m[31mBrands[0m"
  [31m[Line 139][0m [[36mJS/TS String Literal[0m] Found: "[1mTags[0m"
     [33m→[0m label="[1m[31mTags[0m"
  [31m[Line 158][0m [[36mJS/TS String Literal[0m] Found: "[1mCategory[0m"
     [33m→[0m label="[1m[31mCategory[0m"
  [31m[Line 179][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m <[1m[31mFilter[0m.CommandInput placeholder="Filter" variant="secondary" />
  [31m[Line 185][0m [[36mJS/TS String Literal[0m] Found: "[1mCategory[0m"
     [33m→[0m label="[1m[31mCategory[0m"
  [31m[Line 188][0m [[36mJS/TS String Literal[0m] Found: "[1mVendor[0m"
     [33m→[0m <SelectCompany.FilterItem value="vendorId" label="[1m[31mVendor[0m" />
  [31m[Line 189][0m [[36mJS/TS String Literal[0m] Found: "[1mBrands[0m"
     [33m→[0m <Select[1m[31mBrands[0m.FilterItem value="brandIds" label="Brands" />
  [31m[Line 190][0m [[36mJS/TS String Literal[0m] Found: "[1mTags[0m"
     [33m→[0m <Select[1m[31mTags[0m.FilterItem value="tags" label="Tags" />

[1m[33m📄 File: frontend/core-ui/src/modules/products/components/ProductsRecordTable.tsx[0m
  [31m[Line 59][0m [[36mJSX Plain Text[0m] Found: "[1mNo product yet[0m"
     [33m→[0m <h2 className="text-lg font-semibold text-muted-foreground">
  [31m[Line 62][0m [[36mJSX Plain Text[0m] Found: "[1mGet started by creating your first product.[0m"
     [33m→[0m <p className="mb-4 text-md text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/products/components/product-command-bar/ProductCommandBar.tsx[0m
  [31m[Line 35][0m [[36mJSX Plain Text[0m] Found: "[1mCreate[0m"
     [33m→[0m <IconPlus />

[1m[33m📄 File: frontend/core-ui/src/modules/products/components/product-command-bar/delete/productDelete.tsx[0m
  [31m[Line 30][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${
  [31m[Line 30][0m [[36mTemplate Literal String[0m] Found: "[1mselected product[0m"
     [33m→[0m message: `Are you sure you want to delete the ${
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mProducts deleted successfully[0m"
     [33m→[0m title: '[1m[31mProducts deleted successfully[0m',
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 72][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/products/constants/ProductConstants.ts[0m
  [31m[Line 2][0m [[36mJS/TS String Literal[0m] Found: "[1mProduct[0m"
     [33m→[0m { label: '[1m[31mProduct[0m', value: 'product' },
  [31m[Line 3][0m [[36mJS/TS String Literal[0m] Found: "[1mService[0m"
     [33m→[0m { label: '[1m[31mService[0m', value: 'service' },
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mSubscription[0m"
     [33m→[0m { label: '[1m[31mSubscription[0m', value: 'subscription' },
  [31m[Line 5][0m [[36mJS/TS String Literal[0m] Found: "[1mUnique[0m"
     [33m→[0m { label: '[1m[31mUnique[0m', value: 'unique' },

[1m[33m📄 File: frontend/core-ui/src/modules/products/constants/ProductFormSchema.ts[0m
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mProduct name is required[0m"
     [33m→[0m name: z.string().min(1, { message: '[1m[31mProduct name is required[0m' }),
  [31m[Line 5][0m [[36mJS/TS String Literal[0m] Found: "[1mProduct code is required[0m"
     [33m→[0m code: z.string().min(1, { message: '[1m[31mProduct code is required[0m' }),
  [31m[Line 7][0m [[36mJS/TS String Literal[0m] Found: "[1mCategory is required[0m"
     [33m→[0m categoryId: z.string().min(1, { message: '[1m[31mCategory is required[0m' }),
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mUnit price must be greater than or equal to 0[0m"
     [33m→[0m message: '[1m[31mUnit price must be greater than or equal to 0[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/products/packages/components/PackageAddSheet.tsx[0m
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m name: z.string().trim().min(1, '[1m[31mName is required[0m'),
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least one product is required[0m"
     [33m→[0m .min(1, '[1m[31mAt least one product is required[0m'),
  [31m[Line 77][0m [[36mJS/TS String Literal[0m] Found: "[1mPackage created[0m"
     [33m→[0m toast({ variant: 'success', title: '[1m[31mPackage created[0m' });
  [31m[Line 82][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to create package[0m"
     [33m→[0m title: '[1m[31mFailed to create package[0m',
  [31m[Line 92][0m [[36mJSX Plain Text[0m] Found: "[1mNew package[0m"
     [33m→[0m <IconPlus />
  [31m[Line 104][0m [[36mJSX Plain Text[0m] Found: "[1mNew package[0m"
     [33m→[0m <Sheet.Title>[1m[31mNew package[0m</Sheet.Title>
  [31m[Line 111][0m [[36mJS/TS String Literal[0m] Found: "[1mBasic information[0m"
     [33m→[0m <InfoCard title="[1m[31mBasic information[0m">
  [31m[Line 119][0m [[36mJSX Plain Text[0m] Found: "[1mName[0m"
     [33m→[0m <Form.Label>[1m[31mName[0m</Form.Label>
  [31m[Line 132][0m [[36mJSX Plain Text[0m] Found: "[1mStatus[0m"
     [33m→[0m <Form.Label>[1m[31mStatus[0m</Form.Label>
  [31m[Line 156][0m [[36mJSX Plain Text[0m] Found: "[1mDescription[0m"
     [33m→[0m <Form.Label>[1m[31mDescription[0m</Form.Label>
  [31m[Line 168][0m [[36mJS/TS String Literal[0m] Found: "[1mCover image[0m"
     [33m→[0m <InfoCard title="[1m[31mCover image[0m">
  [31m[Line 192][0m [[36mJS/TS String Literal[0m] Found: "[1mPricing[0m"
     [33m→[0m <InfoCard title="[1m[31mPricing[0m">
  [31m[Line 197][0m [[36mJSX Plain Text[0m] Found: "[1mPrice[0m"
     [33m→[0m <span className="text-sm font-medium">[1m[31mPrice[0m</span>
  [31m[Line 213][0m [[36mJSX Plain Text[0m] Found: "[1mPercent[0m"
     [33m→[0m <span className="text-sm font-medium">[1m[31mPercent[0m</span>
  [31m[Line 253][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button type="button" variant="outline" onClick={handleClose} disabled={saving}>
  [31m[Line 257][0m [[36mJSX Plain Text[0m] Found: "[1mCreate[0m"
     [33m→[0m {saving && <Spinner containerClassName="flex-none" />}

[1m[33m📄 File: frontend/core-ui/src/modules/products/packages/components/PackageCommandBar.tsx[0m
  [31m[Line 31][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${selectedIds.length} selected package${selectedIds.length === 1 ? '' : 's'}?`,
  [31m[Line 31][0m [[36mTemplate Literal String[0m] Found: "[1mselected package[0m"
     [33m→[0m message: `Are you sure you want to delete the ${selectedIds.length} [1m[31mselected package[0m${selectedIds.length === 1 ? '' : 's'}?`,
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mPackages deleted[0m"
     [33m→[0m toast({ variant: 'success', title: '[1m[31mPackages deleted[0m' });
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to delete packages[0m"
     [33m→[0m title: '[1m[31mFailed to delete packages[0m',
  [31m[Line 52][0m [[36mTemplate Literal String[0m] Found: "[1mPackages set to[0m"
     [33m→[0m toast({ variant: 'success', title: `[1m[31mPackages set to[0m ${status}` });
  [31m[Line 57][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to update status[0m"
     [33m→[0m title: '[1m[31mFailed to update status[0m',
  [31m[Line 73][0m [[36mJSX Plain Text[0m] Found: "[1mStatus[0m"
     [33m→[0m <IconChevronUp />
  [31m[Line 85][0m [[36mJSX Plain Text[0m] Found: "[1mSet Active[0m"
     [33m→[0m <Command.Item onSelect={() => handleChangeStatus('active')}>
  [31m[Line 88][0m [[36mJSX Plain Text[0m] Found: "[1mSet Draft[0m"
     [33m→[0m <Command.Item onSelect={() => handleChangeStatus('draft')}>
  [31m[Line 102][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/products/packages/components/PackageDetailSheet.tsx[0m
  [31m[Line 67][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m toast({ variant: 'destructive', title: '[1m[31mName is required[0m' });
  [31m[Line 71][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least one product is required[0m"
     [33m→[0m toast({ variant: 'destructive', title: '[1m[31mAt least one product is required[0m' });
  [31m[Line 77][0m [[36mJS/TS String Literal[0m] Found: "[1mPrice must be a non-negative number[0m"
     [33m→[0m toast({ variant: 'destructive', title: '[1m[31mPrice must be a non-negative number[0m' });
  [31m[Line 97][0m [[36mJS/TS String Literal[0m] Found: "[1mPackage updated[0m"
     [33m→[0m toast({ variant: 'success', title: '[1m[31mPackage updated[0m' });
  [31m[Line 101][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to update package[0m"
     [33m→[0m title: '[1m[31mFailed to update package[0m',
  [31m[Line 112][0m [[36mJS/TS String Literal[0m] Found: "[1mBasic information[0m"
     [33m→[0m <InfoCard title="[1m[31mBasic information[0m">
  [31m[Line 116][0m [[36mJSX Plain Text[0m] Found: "[1mName[0m"
     [33m→[0m <Label>[1m[31mName[0m</Label>
  [31m[Line 120][0m [[36mJSX Plain Text[0m] Found: "[1mStatus[0m"
     [33m→[0m <Label>[1m[31mStatus[0m</Label>
  [31m[Line 135][0m [[36mJSX Plain Text[0m] Found: "[1mDescription[0m"
     [33m→[0m <Label>[1m[31mDescription[0m</Label>
  [31m[Line 148][0m [[36mJS/TS String Literal[0m] Found: "[1mCover image[0m"
     [33m→[0m <InfoCard title="[1m[31mCover image[0m">
  [31m[Line 157][0m [[36mJS/TS String Literal[0m] Found: "[1mPricing[0m"
     [33m→[0m <InfoCard title="[1m[31mPricing[0m">
  [31m[Line 162][0m [[36mJSX Plain Text[0m] Found: "[1mPrice[0m"
     [33m→[0m <Label>[1m[31mPrice[0m</Label>
  [31m[Line 179][0m [[36mJSX Plain Text[0m] Found: "[1mPercent[0m"
     [33m→[0m <Label>[1m[31mPercent[0m</Label>
  [31m[Line 208][0m [[36mJSX Plain Text[0m] Found: "[1mUnsaved changes[0m"
     [33m→[0m {dirty && <Badge variant="default">[1m[31mUnsaved changes[0m</Badge>}
  [31m[Line 210][0m [[36mJSX Plain Text[0m] Found: "[1mClose[0m"
     [33m→[0m <Button type="button" variant="outline" onClick={on[1m[31mClose[0m}>
  [31m[Line 214][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m <IconCheck className="size-4" />
  [31m[Line 238][0m [[36mJS/TS String Literal[0m] Found: "[1mPackage detail[0m"
     [33m→[0m <Sheet.Title>{pkg?.name || '[1m[31mPackage detail[0m'}</Sheet.Title>
  [31m[Line 248][0m [[36mJSX Plain Text[0m] Found: "[1mClose[0m"
     [33m→[0m <Button type="button" variant="outline" onClick={handle[1m[31mClose[0m}>
  [31m[Line 257][0m [[36mJSX Plain Text[0m] Found: "[1mPackage not found[0m"
     [33m→[0m <div className="flex flex-auto justify-center items-center p-6 text-muted-foreground text-sm">
  [31m[Line 261][0m [[36mJSX Plain Text[0m] Found: "[1mClose[0m"
     [33m→[0m <Button type="button" variant="outline" onClick={handle[1m[31mClose[0m}>

[1m[33m📄 File: frontend/core-ui/src/modules/products/packages/components/PackageProductPicker.tsx[0m
  [31m[Line 201][0m [[36mTemplate Literal String[0m] Found: "[1mProducts ([0m"
     [33m→[0m title={`[1m[31mProducts ([0m${value.length})`}
  [31m[Line 207][0m [[36mJSX Plain Text[0m] Found: "[1mLoading products…[0m"
     [33m→[0m <Spinner /> [1m[31mLoading products…[0m
  [31m[Line 212][0m [[36mJSX Plain Text[0m] Found: "[1mNo products found.[0m"
     [33m→[0m <span>[1m[31mNo products found.[0m</span>

[1m[33m📄 File: frontend/core-ui/src/modules/products/packages/components/PackagesFilter.tsx[0m
  [31m[Line 53][0m [[36mJSX Plain Text[0m] Found: "[1mStatus[0m"
     [33m→[0m <IconTag />
  [31m[Line 61][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect status[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect status[0m" />
  [31m[Line 100][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m <[1m[31mFilter[0m.CommandInput placeholder="Filter" variant="secondary" />
  [31m[Line 104][0m [[36mJSX Plain Text[0m] Found: "[1mStatus[0m"
     [33m→[0m <IconTag />

[1m[33m📄 File: frontend/core-ui/src/modules/products/packages/components/PackagesRecordTable.tsx[0m
  [31m[Line 25][0m [[36mJSX Plain Text[0m] Found: "[1mNo packages yet[0m"
     [33m→[0m <h3 className="mb-2 text-xl font-semibold">[1m[31mNo packages yet[0m</h3>
  [31m[Line 26][0m [[36mJSX Plain Text[0m] Found: "[1mGet started by creating your first package.[0m"
     [33m→[0m <p className="max-w-md mb-6 text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/products/packages/components/packageColumns.tsx[0m
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mStatus updated[0m"
     [33m→[0m toast({ variant: 'success', title: '[1m[31mStatus updated[0m' });
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to update status[0m"
     [33m→[0m title: '[1m[31mFailed to update status[0m',
  [31m[Line 85][0m [[36mJS/TS String Literal[0m] Found: "[1mName[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mName[0m" />,
  [31m[Line 98][0m [[36mJS/TS String Literal[0m] Found: "[1mUnnamed[0m"
     [33m→[0m {row.original.name || '[1m[31mUnnamed[0m'}
  [31m[Line 106][0m [[36mJS/TS String Literal[0m] Found: "[1mProducts[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mProducts[0m" />,
  [31m[Line 116][0m [[36mJS/TS String Literal[0m] Found: "[1mPrice[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mPrice[0m" />,
  [31m[Line 126][0m [[36mJS/TS String Literal[0m] Found: "[1mTotal Price[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mTotal Price[0m" />,
  [31m[Line 136][0m [[36mJS/TS String Literal[0m] Found: "[1mStatus[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mStatus[0m" />,
  [31m[Line 143][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mCreated[0m" />,

[1m[33m📄 File: frontend/core-ui/src/modules/products/packages/graphql/packageMutations.ts[0m
  [31m[Line 4][0m [[36mTemplate Literal String[0m] Found: "[1m$products: [PackageProductInput!][0m"
     [33m→[0m const PRODUCT_INPUT = `[1m[31m$products: [PackageProductInput!][0m`;

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-category/add-category/components/AddProductCategory.tsx[0m
  [31m[Line 69][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 76][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 77][0m [[36mJS/TS String Literal[0m] Found: "[1mCategory added successfully[0m"
     [33m→[0m description: '[1m[31mCategory added successfully[0m',
  [31m[Line 120][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m >
  [31m[Line 128][0m [[36mJS/TS String Literal[0m] Found: "[1mSaving...[0m"
     [33m→[0m {editLoading ? '[1m[31mSaving...[0m' : 'Save'}
  [31m[Line 128][0m [[36mJS/TS String Literal[0m] Found: "[1mSave[0m"
     [33m→[0m {editLoading ? 'Saving...' : '[1m[31mSave[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-category/add-category/components/CategoryAddCoreFields.tsx[0m
  [31m[Line 59][0m [[36mJSX Plain Text[0m] Found: "[1mParent Category[0m"
     [33m→[0m <Form.Label>[1m[31mParent Category[0m</Form.Label>
  [31m[Line 76][0m [[36mJSX Plain Text[0m] Found: "[1mMask Type[0m"
     [33m→[0m <Form.Label>[1m[31mMask Type[0m</Form.Label>
  [31m[Line 80][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose mask type[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mChoose mask type[0m">

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-category/add-category/components/CategoryAddMoreFields.tsx[0m
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mAny[0m"
     [33m→[0m { label: '[1m[31mAny[0m', value: 'any' },
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mSoft[0m"
     [33m→[0m { label: '[1m[31mSoft[0m', value: 'soft' },
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mHard[0m"
     [33m→[0m { label: '[1m[31mHard[0m', value: 'hard' },
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mAll[0m"
     [33m→[0m { label: '[1m[31mAll[0m', value: 'all' },
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mActive[0m"
     [33m→[0m { label: '[1m[31mActive[0m', value: 'active' },
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mDisabled[0m"
     [33m→[0m { label: '[1m[31mDisabled[0m', value: 'disabled' },
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mArchived[0m"
     [33m→[0m { label: '[1m[31mArchived[0m', value: 'archived' },
  [31m[Line 83][0m [[36mJSX Plain Text[0m] Found: "[1mMore Info[0m"
     [33m→[0m <Form.Label className="mx-2">[1m[31mMore Info[0m</Form.Label>
  [31m[Line 149][0m [[36mJSX Plain Text[0m] Found: "[1mHas similarities group[0m"
     [33m→[0m <Label htmlFor="isSimilarity" className="cursor-pointer">
  [31m[Line 164][0m [[36mJSX Plain Text[0m] Found: "[1mTitle[0m"
     [33m→[0m <Label>[1m[31mTitle[0m</Label>
  [31m[Line 170][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter title[0m"
     [33m→[0m placeholder="[1m[31mEnter title[0m"
  [31m[Line 175][0m [[36mJSX Plain Text[0m] Found: "[1mField group[0m"
     [33m→[0m <Label>[1m[31mField group[0m</Label>
  [31m[Line 184][0m [[36mJS/TS String Literal[0m] Found: "[1mField group[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mField group[0m" />
  [31m[Line 198][0m [[36mJSX Plain Text[0m] Found: "[1mField[0m"
     [33m→[0m <Label>[1m[31mField[0m</Label>
  [31m[Line 208][0m [[36mJS/TS String Literal[0m] Found: "[1mField[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mField[0m" />
  [31m[Line 253][0m [[36mJSX Plain Text[0m] Found: "[1mState[0m"
     [33m→[0m <Form.Label>[1m[31mState[0m</Form.Label>
  [31m[Line 257][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose type[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mChoose type[0m">

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-category/add-category/components/formSchema.ts[0m
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m name: z.string().min(1, '[1m[31mName is required[0m'),
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mCode is required[0m"
     [33m→[0m code: z.string().min(1, '[1m[31mCode is required[0m'),

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-category/components/AddProductCategoryForm.tsx[0m
  [31m[Line 61][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Category[0m"
     [33m→[0m <IconPlus />
  [31m[Line 82][0m [[36mJSX Plain Text[0m] Found: "[1mCreate Category[0m"
     [33m→[0m <Sheet.Title>[1m[31mCreate Category[0m</Sheet.Title> <Sheet.Close />

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-category/components/CategoryFilter.tsx[0m
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mActive[0m"
     [33m→[0m { label: '[1m[31mActive[0m', value: 'active' },
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mDisabled[0m"
     [33m→[0m { label: '[1m[31mDisabled[0m', value: 'disabled' },
  [31m[Line 26][0m [[36mJS/TS String Literal[0m] Found: "[1mArchived[0m"
     [33m→[0m { label: '[1m[31mArchived[0m', value: 'archived' },
  [31m[Line 103][0m [[36mJSX Plain Text[0m] Found: "[1mParent[0m"
     [33m→[0m <IconFolders />
  [31m[Line 110][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect parent[0m"
     [33m→[0m {!selected && <Combobox.Value placeholder="[1m[31mSelect parent[0m" />}
  [31m[Line 115][0m [[36mJS/TS String Literal[0m] Found: "[1mSearch categories[0m"
     [33m→[0m <Command.Input placeholder="[1m[31mSearch categories[0m" />
  [31m[Line 170][0m [[36mJSX Plain Text[0m] Found: "[1mNo categories found[0m"
     [33m→[0m <div className="flex flex-col gap-2 justify-center items-center text-sm text-center text-muted-foreground">
  [31m[Line 180][0m [[36mJS/TS String Literal[0m] Found: "[1mSearch categories[0m"
     [33m→[0m <Command.Input placeholder="[1m[31mSearch categories[0m" />
  [31m[Line 200][0m [[36mJSX Plain Text[0m] Found: "[1mStatus[0m"
     [33m→[0m <IconCircleDot />
  [31m[Line 244][0m [[36mJSX Plain Text[0m] Found: "[1mStatus[0m"
     [33m→[0m <IconCircleDot />
  [31m[Line 252][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect status[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect status[0m" />
  [31m[Line 288][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m <[1m[31mFilter[0m.CommandInput placeholder="Filter" variant="secondary" />
  [31m[Line 292][0m [[36mJSX Plain Text[0m] Found: "[1mSearch[0m"
     [33m→[0m <Icon[1m[31mSearch[0m />
  [31m[Line 296][0m [[36mJSX Plain Text[0m] Found: "[1mParent[0m"
     [33m→[0m <IconFolders />

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-category/components/ProductCategoriesRecordTable.tsx[0m
  [31m[Line 125][0m [[36mJS/TS String Literal[0m] Found: "[1mName[0m"
     [33m→[0m <RecordTable.InlineHead icon={IconLabelFilled} label="[1m[31mName[0m" />
  [31m[Line 133][0m [[36mJS/TS String Literal[0m] Found: "[1mCode[0m"
     [33m→[0m header: () => <RecordTable.InlineHead icon={IconHash} label="[1m[31mCode[0m" />,
  [31m[Line 147][0m [[36mJS/TS String Literal[0m] Found: "[1mProduct Count[0m"
     [33m→[0m <RecordTable.InlineHead icon={IconPackage} label="[1m[31mProduct Count[0m" />
  [31m[Line 160][0m [[36mJS/TS String Literal[0m] Found: "[1mParent[0m"
     [33m→[0m header: () => <RecordTable.InlineHead icon={IconPackage} label="[1m[31mParent[0m" />,

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-category/components/ProductCategoryMoreColumn.tsx[0m
  [31m[Line 40][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m className="w-4 h-4" />
  [31m[Line 50][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash className="w-4 h-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-category/components/SelectCategory.tsx[0m
  [31m[Line 150][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect category[0m"
     [33m→[0m {!selectedCategory && <Combobox.Value placeholder="[1m[31mSelect category[0m" />}

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-category/components/product-command-bar/CategoryCommandBar.tsx[0m
  [31m[Line 36][0m [[36mJSX Plain Text[0m] Found: "[1mCreate[0m"
     [33m→[0m <IconPlus />

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-category/components/product-command-bar/delete/CategoryDelete.tsx[0m
  [31m[Line 37][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${categoryCount} selected categories?`,
  [31m[Line 37][0m [[36mTemplate Literal String[0m] Found: "[1mselected categories?[0m"
     [33m→[0m message: `Are you sure you want to delete the ${categoryCount} [1m[31mselected categories?[0m`,
  [31m[Line 46][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to delete categories[0m"
     [33m→[0m : '[1m[31mFailed to delete categories[0m';
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 55][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 56][0m [[36mTemplate Literal String[0m] Found: "[1mdeleted successfully.[0m"
     [33m→[0m description: `${categoryCount} ${
  [31m[Line 96][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-category/detail/components/CategoryDetailSheet.tsx[0m
  [31m[Line 95][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 102][0m [[36mJS/TS String Literal[0m] Found: "[1mCategory updated successfully[0m"
     [33m→[0m title: '[1m[31mCategory updated successfully[0m',
  [31m[Line 156][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to load category.[0m"
     [33m→[0m {error?.message || '[1m[31mFailed to load category.[0m'}
  [31m[Line 185][0m [[36mJSX Plain Text[0m] Found: "[1mEdit Category[0m"
     [33m→[0m <Sheet.Title>[1m[31mEdit Category[0m</Sheet.Title>
  [31m[Line 187][0m [[36mJSX Plain Text[0m] Found: "[1mEdit Category Details[0m"
     [33m→[0m <Sheet.Description className="sr-only">
  [31m[Line 214][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m >
  [31m[Line 218][0m [[36mJS/TS String Literal[0m] Found: "[1mSaving...[0m"
     [33m→[0m {editLoading ? '[1m[31mSaving...[0m' : 'Save'}
  [31m[Line 218][0m [[36mJS/TS String Literal[0m] Found: "[1mSave[0m"
     [33m→[0m {editLoading ? 'Saving...' : '[1m[31mSave[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-category/detail/components/CategoryUpdateCoreFields.tsx[0m
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter name[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mEnter name[0m" />
  [31m[Line 63][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter code[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mEnter code[0m" />
  [31m[Line 77][0m [[36mJSX Plain Text[0m] Found: "[1mParent Category[0m"
     [33m→[0m <Form.Label>[1m[31mParent Category[0m</Form.Label>
  [31m[Line 94][0m [[36mJSX Plain Text[0m] Found: "[1mMask Type[0m"
     [33m→[0m <Form.Label>[1m[31mMask Type[0m</Form.Label>
  [31m[Line 98][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose type[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mChoose type[0m">

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-category/detail/components/CategoryUpdateMoreFields.tsx[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mAny[0m"
     [33m→[0m { label: '[1m[31mAny[0m', value: 'any' },
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mSoft[0m"
     [33m→[0m { label: '[1m[31mSoft[0m', value: 'soft' },
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mHard[0m"
     [33m→[0m { label: '[1m[31mHard[0m', value: 'hard' },
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mAll[0m"
     [33m→[0m { label: '[1m[31mAll[0m', value: 'all' },
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mActive[0m"
     [33m→[0m { label: '[1m[31mActive[0m', value: 'active' },
  [31m[Line 26][0m [[36mJS/TS String Literal[0m] Found: "[1mDisabled[0m"
     [33m→[0m { label: '[1m[31mDisabled[0m', value: 'disabled' },
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mArchived[0m"
     [33m→[0m { label: '[1m[31mArchived[0m', value: 'archived' },
  [31m[Line 107][0m [[36mJSX Plain Text[0m] Found: "[1mMore Info[0m"
     [33m→[0m <Form.Label className="mx-2">[1m[31mMore Info[0m</Form.Label>
  [31m[Line 174][0m [[36mJSX Plain Text[0m] Found: "[1mHas similarities group[0m"
     [33m→[0m <Label htmlFor="isSimilarity" className="cursor-pointer">
  [31m[Line 189][0m [[36mJSX Plain Text[0m] Found: "[1mTitle[0m"
     [33m→[0m <Label>[1m[31mTitle[0m</Label>
  [31m[Line 195][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter title[0m"
     [33m→[0m placeholder="[1m[31mEnter title[0m"
  [31m[Line 200][0m [[36mJSX Plain Text[0m] Found: "[1mField group[0m"
     [33m→[0m <Label>[1m[31mField group[0m</Label>
  [31m[Line 209][0m [[36mJS/TS String Literal[0m] Found: "[1mField group[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mField group[0m" />
  [31m[Line 223][0m [[36mJSX Plain Text[0m] Found: "[1mField[0m"
     [33m→[0m <Label>[1m[31mField[0m</Label>
  [31m[Line 233][0m [[36mJS/TS String Literal[0m] Found: "[1mField[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mField[0m" />
  [31m[Line 277][0m [[36mJSX Plain Text[0m] Found: "[1mState[0m"
     [33m→[0m <Form.Label>[1m[31mState[0m</Form.Label>
  [31m[Line 281][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose type[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mChoose type[0m">

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-category/hooks/useRemoveCategories.tsx[0m
  [31m[Line 91][0m [[36mJS/TS String Literal[0m] Found: "[1mUnknown error[0m"
     [33m→[0m : '[1m[31mUnknown error[0m';

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-detail/components/DescriptionInput.tsx[0m
  [31m[Line 73][0m [[36mJSX Plain Text[0m] Found: "[1mSend[0m"
     [33m→[0m <IconArrowUp />

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-detail/components/FileUploadSection.tsx[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mborder-indigo-300 text-indigo-600 hover:bg-indigo-50[0m"
     [33m→[0m ? "[1m[31mborder-indigo-300 text-indigo-600 hover:bg-indigo-50[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-detail/components/ProductActivityRows.tsx[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1madded tag[0m"
     [33m→[0m {isAdded ? '[1m[31madded tag[0m' : 'removed tag'}
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mremoved tag[0m"
     [33m→[0m {isAdded ? 'added tag' : '[1m[31mremoved tag[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-detail/components/ProductDetailBarcode.tsx[0m
  [31m[Line 112][0m [[36mJS/TS String Literal[0m] Found: "[1mThis barcode already exists.[0m"
     [33m→[0m const message = t('duplicate-barcode') || '[1m[31mThis barcode already exists.[0m';
  [31m[Line 181][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd barcode[0m"
     [33m→[0m {t('add-barcode') || '[1m[31mAdd barcode[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-detail/components/ProductDetailFooter.tsx[0m
  [31m[Line 40][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant="outline" onClick={handle[1m[31mCancel[0m} type="button">
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mSaving...[0m"
     [33m→[0m {editLoading ? '[1m[31mSaving...[0m' : 'Save Details'}
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mSave Details[0m"
     [33m→[0m {editLoading ? 'Saving...' : '[1m[31mSave Details[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-detail/components/ProductDetailSheet.tsx[0m
  [31m[Line 165][0m [[36mJS/TS String Literal[0m] Found: "[1mh-full min-h-[200px][0m"
     [33m→[0m viewportClassName="[1m[31mh-full min-h-[200px][0m"

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-detail/components/ProductDetailSidebar.tsx[0m
  [31m[Line 8][0m [[36mJSX Plain Text[0m] Found: "[1mGeneral[0m"
     [33m→[0m <Sidebar.GroupLabel>[1m[31mGeneral[0m</Sidebar.GroupLabel>

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-detail/components/ProductProperties.tsx[0m
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mM9 6L15 12L9 18[0m"
     [33m→[0m d="[1m[31mM9 6L15 12L9 18[0m"
  [31m[Line 39][0m [[36mJSX Plain Text[0m] Found: "[1mHotels[0m"
     [33m→[0m <span className="text-gray-600 font-medium">[1m[31mHotels[0m</span>
  [31m[Line 52][0m [[36mJSX Plain Text[0m] Found: "[1mHotel details go here...[0m"
     [33m→[0m <p>[1m[31mHotel details go here...[0m</p>
  [31m[Line 80][0m [[36mJS/TS String Literal[0m] Found: "[1mM9 6L15 12L9 18[0m"
     [33m→[0m d="[1m[31mM9 6L15 12L9 18[0m"
  [31m[Line 87][0m [[36mJSX Plain Text[0m] Found: "[1mTags[0m"
     [33m→[0m <span className="text-gray-600 font-medium">[1m[31mTags[0m</span>

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-detail/components/tagsManager.tsx[0m
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mTags[0m"
     [33m→[0m include: ['[1m[31mTags[0m'],
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mError refreshing data[0m"
     [33m→[0m title: '[1m[31mError refreshing data[0m',
  [31m[Line 62][0m [[36mJS/TS String Literal[0m] Found: "[1mTag removed[0m"
     [33m→[0m title: '[1m[31mTag removed[0m',
  [31m[Line 63][0m [[36mTemplate Literal String[0m] Found: "[1mSuccessfully removed tag:[0m"
     [33m→[0m description: `[1m[31mSuccessfully removed tag:[0m ${tagToDelete.name}`,
  [31m[Line 70][0m [[36mJS/TS String Literal[0m] Found: "[1mError removing tag[0m"
     [33m→[0m title: '[1m[31mError removing tag[0m',
  [31m[Line 71][0m [[36mJS/TS String Literal[0m] Found: "[1mThere was a problem removing the tag. Please try again.[0m"
     [33m→[0m description: '[1m[31mThere was a problem removing the tag. Please try again.[0m',
  [31m[Line 93][0m [[36mJS/TS String Literal[0m] Found: "[1mTags updated[0m"
     [33m→[0m title: '[1m[31mTags updated[0m',
  [31m[Line 94][0m [[36mJS/TS String Literal[0m] Found: "[1mProduct tags have been successfully updated.[0m"
     [33m→[0m description: '[1m[31mProduct tags have been successfully updated.[0m',
  [31m[Line 102][0m [[36mJS/TS String Literal[0m] Found: "[1mError updating tags[0m"
     [33m→[0m title: '[1m[31mError updating tags[0m',
  [31m[Line 103][0m [[36mJS/TS String Literal[0m] Found: "[1mThere was a problem updating the tags. Please try again.[0m"
     [33m→[0m description: '[1m[31mThere was a problem updating the tags. Please try again.[0m',
  [31m[Line 117][0m [[36mJS/TS String Literal[0m] Found: "[1mTag created[0m"
     [33m→[0m title: '[1m[31mTag created[0m',
  [31m[Line 118][0m [[36mTemplate Literal String[0m] Found: "[1mNew tag "[0m"
     [33m→[0m description: `[1m[31mNew tag "[0m${newTag.name}" has been created and added to the product.`,
  [31m[Line 118][0m [[36mTemplate Literal String[0m] Found: "[1m" has been created and added to the product.[0m"
     [33m→[0m description: `New tag "${newTag.name}[1m[31m" has been created and added to the product.[0m`,
  [31m[Line 132][0m [[36mJSX Plain Text[0m] Found: "[1mAdd tag[0m"
     [33m→[0m <span>[1m[31mAdd tag[0m</span>
  [31m[Line 158][0m [[36mJS/TS String Literal[0m] Found: "[1mRemove tag[0m"
     [33m→[0m title="[1m[31mRemove tag[0m"
  [31m[Line 159][0m [[36mTemplate Literal String[0m] Found: "[1mRemove tag[0m"
     [33m→[0m aria-label={`[1m[31mRemove tag[0m ${tagName}`}
  [31m[Line 164][0m [[36mJSX Plain Text[0m] Found: "[1mRemove[0m"
     [33m→[0m <span className="sr-only">[1m[31mRemove[0m {tagName}</span>
  [31m[Line 176][0m [[36mJSX Plain Text[0m] Found: "[1mDelete Tag[0m"
     [33m→[0m <AlertDialog.Title>[1m[31mDelete Tag[0m</AlertDialog.Title>
  [31m[Line 177][0m [[36mJSX Plain Text[0m] Found: "[1mAre you sure you want to remove the tag "[0m"
     [33m→[0m <AlertDialog.Description>
  [31m[Line 178][0m [[36mJSX Plain Text[0m] Found: "[1m"?
              This action cannot be undone.[0m"
     [33m→[0m Are you sure you want to remove the tag "{tagToDelete?.name}"?
  [31m[Line 183][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <AlertDialog.[1m[31mCancel[0m>Cancel</AlertDialog.Cancel>
  [31m[Line 184][0m [[36mJSX Plain Text[0m] Found: "[1mYes, delete tag[0m"
     [33m→[0m <AlertDialog.Action onClick={handleRemoveTag}>

[1m[33m📄 File: frontend/core-ui/src/modules/products/product-detail/hooks/useProductDetailWithQuery.tsx[0m
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/products/products-filter/components/ProductTypeFilter.tsx[0m
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mProduct[0m"
     [33m→[0m { label: '[1m[31mProduct[0m', value: 'product' },
  [31m[Line 5][0m [[36mJS/TS String Literal[0m] Found: "[1mService[0m"
     [33m→[0m { label: '[1m[31mService[0m', value: 'service' },
  [31m[Line 6][0m [[36mJS/TS String Literal[0m] Found: "[1mSubscription[0m"
     [33m→[0m { label: '[1m[31mSubscription[0m', value: 'subscription' },
  [31m[Line 7][0m [[36mJS/TS String Literal[0m] Found: "[1mUnique[0m"
     [33m→[0m { label: '[1m[31mUnique[0m', value: 'unique' },
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect type[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect type[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/ProductSettingsSidebar.tsx[0m
  [31m[Line 15][0m [[36mJSX Plain Text[0m] Found: "[1mGeneral[0m"
     [33m→[0m <Link to="/settings/products">[1m[31mGeneral[0m</Link>
  [31m[Line 23][0m [[36mJSX Plain Text[0m] Found: "[1mUom[0m"
     [33m→[0m <Link to="/settings/products/uom">[1m[31mUom[0m</Link>
  [31m[Line 31][0m [[36mJSX Plain Text[0m] Found: "[1mSimilarity configs[0m"
     [33m→[0m <Link to="/settings/products/similarity-configs">

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/bundleCondition/BundleConditionCommandBar.tsx[0m
  [31m[Line 24][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${
  [31m[Line 24][0m [[36mTemplate Literal String[0m] Found: "[1mselected bundle condition[0m"
     [33m→[0m message: `Are you sure you want to delete the ${
  [31m[Line 51][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/bundleCondition/BundleConditionForm.tsx[0m
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m name: z.string().min(1, '[1m[31mName is required[0m'),
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mCode is required[0m"
     [33m→[0m code: z.string().min(1, '[1m[31mCode is required[0m'),
  [31m[Line 65][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 80][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 88][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/bundleCondition/BundleConditionMoreColumn.tsx[0m
  [31m[Line 34][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete "[0m${bundleCondition.name}"?`,
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 62][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m className="w-4 h-4" />
  [31m[Line 70][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash className="w-4 h-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/bundleCondition/BundleConditionRecordTable.tsx[0m
  [31m[Line 42][0m [[36mJSX Plain Text[0m] Found: "[1mNo bundle conditions yet[0m"
     [33m→[0m <h2 className="text-lg font-semibold text-muted-foreground">
  [31m[Line 45][0m [[36mJSX Plain Text[0m] Found: "[1mGet started by creating your first bundle condition.[0m"
     [33m→[0m <p className="mb-4 text-md text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/bundleCondition/bundleConditionColumns.tsx[0m
  [31m[Line 22][0m [[36mTemplate Literal String[0m] Found: "[1mThis action will make the BundleCondition "[0m"
     [33m→[0m message: `[1m[31mThis action will make the BundleCondition "[0m${bundleCondition.name}" default. Are you sure?`,
  [31m[Line 22][0m [[36mTemplate Literal String[0m] Found: "[1m" default. Are you sure?[0m"
     [33m→[0m message: `This action will make the BundleCondition "${bundleCondition.name}[1m[31m" default. Are you sure?[0m`,
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mDefault[0m"
     [33m→[0m title={bundleCondition.is[1m[31mDefault[0m ? 'Default' : 'Make it default'}
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mMake it default[0m"
     [33m→[0m title={bundleCondition.isDefault ? 'Default' : '[1m[31mMake it default[0m'}
  [31m[Line 56][0m [[36mJS/TS String Literal[0m] Found: "[1mCode[0m"
     [33m→[0m header: () => <RecordTable.InlineHead icon={IconHash} label="[1m[31mCode[0m" />,
  [31m[Line 66][0m [[36mJS/TS String Literal[0m] Found: "[1mDefault[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mDefault[0m" />,

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/bundleCondition/bundleConditionFilter.tsx[0m
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m <[1m[31mFilter[0m.CommandInput placeholder="Filter" variant="secondary" />
  [31m[Line 31][0m [[36mJSX Plain Text[0m] Found: "[1mSearch[0m"
     [33m→[0m <Icon[1m[31mSearch[0m />

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/bundleRule/BundleRuleCommandBar.tsx[0m
  [31m[Line 24][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${
  [31m[Line 24][0m [[36mTemplate Literal String[0m] Found: "[1mselected bundle rule[0m"
     [33m→[0m message: `Are you sure you want to delete the ${
  [31m[Line 51][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/bundleRule/BundleRuleForm.tsx[0m
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m name: z.string().min(1, '[1m[31mName is required[0m'),
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mCode is required[0m"
     [33m→[0m code: z.string().min(1, '[1m[31mCode is required[0m'),
  [31m[Line 106][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 126][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 208][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Row[0m"
     [33m→[0m <IconPlus />
  [31m[Line 217][0m [[36mJSX Plain Text[0m] Found: "[1mCode[0m"
     [33m→[0m <th className="px-4 py-2 text-left">[1m[31mCode[0m</th>
  [31m[Line 218][0m [[36mJSX Plain Text[0m] Found: "[1mActions[0m"
     [33m→[0m <th className="px-4 py-2 text-right">[1m[31mActions[0m</th>

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/bundleRule/BundleRuleItemForm.tsx[0m
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mCode is required[0m"
     [33m→[0m code: z.string().min(1, '[1m[31mCode is required[0m'),
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least one product is required[0m"
     [33m→[0m productIds: z.array(z.string()).min(1, '[1m[31mAt least one product is required[0m'),
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mPrice type is required[0m"
     [33m→[0m priceType: z.string().min(1, '[1m[31mPrice type is required[0m'),
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mPrice adjust type is required[0m"
     [33m→[0m priceAdjustType: z.string().min(1, '[1m[31mPrice adjust type is required[0m'),
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mPrice adjust factor is required[0m"
     [33m→[0m priceAdjustFactor: z.string().min(1, '[1m[31mPrice adjust factor is required[0m'),
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mQuantity is required[0m"
     [33m→[0m quantity: z.number().min(1, '[1m[31mQuantity is required[0m'),
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mPercent is required[0m"
     [33m→[0m percent: z.number().min(1, '[1m[31mPercent is required[0m'),
  [31m[Line 101][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose Product & service[0m"
     [33m→[0m return '[1m[31mChoose Product & service[0m';
  [31m[Line 110][0m [[36mJS/TS String Literal[0m] Found: "[1m1 product[0m"
     [33m→[0m return count === 1 ? '[1m[31m1 product[0m' : `${count} products`;
  [31m[Line 125][0m [[36mJS/TS String Literal[0m] Found: "[1mNone[0m"
     [33m→[0m { value: 'none', label: '[1m[31mNone[0m' },
  [31m[Line 126][0m [[36mJS/TS String Literal[0m] Found: "[1mDefault[0m"
     [33m→[0m { value: 'default', label: '[1m[31mDefault[0m' },
  [31m[Line 127][0m [[36mJS/TS String Literal[0m] Found: "[1mRound[0m"
     [33m→[0m { value: 'round', label: '[1m[31mRound[0m' },
  [31m[Line 128][0m [[36mJS/TS String Literal[0m] Found: "[1mFloor[0m"
     [33m→[0m { value: 'floor', label: '[1m[31mFloor[0m' },
  [31m[Line 129][0m [[36mJS/TS String Literal[0m] Found: "[1mCeil[0m"
     [33m→[0m { value: 'ceil', label: '[1m[31mCeil[0m' },
  [31m[Line 130][0m [[36mJS/TS String Literal[0m] Found: "[1mEnds With 9[0m"
     [33m→[0m { value: 'endsWith9', label: '[1m[31mEnds With 9[0m' },
  [31m[Line 139][0m [[36mJS/TS String Literal[0m] Found: "[1mEdit Bundle Rule Item[0m"
     [33m→[0m ? '[1m[31mEdit Bundle Rule Item[0m'
  [31m[Line 140][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd Bundle Rule Item[0m"
     [33m→[0m : '[1m[31mAdd Bundle Rule Item[0m'}
  [31m[Line 152][0m [[36mJSX Plain Text[0m] Found: "[1mCode[0m"
     [33m→[0m <Form.Label>
  [31m[Line 161][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect Bundle Condition[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect Bundle Condition[0m" />
  [31m[Line 185][0m [[36mJSX Plain Text[0m] Found: "[1mProducts[0m"
     [33m→[0m <Form.Label>
  [31m[Line 210][0m [[36mJSX Plain Text[0m] Found: "[1mPrice Type[0m"
     [33m→[0m <Form.Label>
  [31m[Line 219][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect Price Type[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect Price Type[0m" />
  [31m[Line 243][0m [[36mJSX Plain Text[0m] Found: "[1mPrice Adjust Type[0m"
     [33m→[0m <Form.Label>
  [31m[Line 253][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect Price Adjust Type[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect Price Adjust Type[0m" />
  [31m[Line 277][0m [[36mJSX Plain Text[0m] Found: "[1mPrice Adjust Factor[0m"
     [33m→[0m <Form.Label>
  [31m[Line 284][0m [[36mJS/TS String Literal[0m] Found: "[1mPrice Adjust Factor[0m"
     [33m→[0m placeholder="[1m[31mPrice Adjust Factor[0m"
  [31m[Line 301][0m [[36mJSX Plain Text[0m] Found: "[1mQuantity[0m"
     [33m→[0m <Form.Label>
  [31m[Line 307][0m [[36mJS/TS String Literal[0m] Found: "[1mQuantity[0m"
     [33m→[0m placeholder="[1m[31mQuantity[0m"
  [31m[Line 327][0m [[36mJSX Plain Text[0m] Found: "[1mPercent[0m"
     [33m→[0m <Form.Label>
  [31m[Line 333][0m [[36mJS/TS String Literal[0m] Found: "[1mPercent[0m"
     [33m→[0m placeholder="[1m[31mPercent[0m"
  [31m[Line 360][0m [[36mJSX Plain Text[0m] Found: "[1mAllow Skip[0m"
     [33m→[0m <Form.Label className="mb-0">[1m[31mAllow Skip[0m</Form.Label>
  [31m[Line 367][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button type="button" variant="outline" onClick={handleClose}>
  [31m[Line 372][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdate[0m"
     [33m→[0m ? '[1m[31mUpdate[0m'
  [31m[Line 373][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd[0m"
     [33m→[0m : '[1m[31mAdd[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/bundleRule/BundleRuleMoreColumn.tsx[0m
  [31m[Line 34][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete "[0m${bundleRule.name}"?`,
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 62][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m className="w-4 h-4" />
  [31m[Line 70][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash className="w-4 h-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/bundleRule/BundleRuleRecordTable.tsx[0m
  [31m[Line 40][0m [[36mJSX Plain Text[0m] Found: "[1mNo bundle rules yet[0m"
     [33m→[0m <h2 className="text-lg font-semibold text-muted-foreground">
  [31m[Line 43][0m [[36mJSX Plain Text[0m] Found: "[1mGet started by creating your first bundle rule.[0m"
     [33m→[0m <p className="mb-4 text-md text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/bundleRule/bundleRuleColumns.tsx[0m
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mCode[0m"
     [33m→[0m header: () => <RecordTable.InlineHead icon={IconHash} label="[1m[31mCode[0m" />,
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mDescription[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mDescription[0m" />,

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/productRule/ProductRuleCommandBar.tsx[0m
  [31m[Line 26][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${
  [31m[Line 26][0m [[36mTemplate Literal String[0m] Found: "[1mselected product rule[0m"
     [33m→[0m message: `Are you sure you want to delete the ${
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 60][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/productRule/ProductRuleForm.tsx[0m
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m name: z.string().min(1, '[1m[31mName is required[0m'),
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mUnit price must be greater than or equal to 0[0m"
     [33m→[0m .min(0, '[1m[31mUnit price must be greater than or equal to 0[0m'),
  [31m[Line 103][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 104][0m [[36mJS/TS String Literal[0m] Found: "[1mProduct rule updated successfully[0m"
     [33m→[0m description: '[1m[31mProduct rule updated successfully[0m',
  [31m[Line 110][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 146][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 147][0m [[36mJS/TS String Literal[0m] Found: "[1mProduct rule created successfully[0m"
     [33m→[0m description: '[1m[31mProduct rule created successfully[0m',
  [31m[Line 154][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/productRule/ProductRuleMoreColumn.tsx[0m
  [31m[Line 34][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete "[0m${productRule.name}"?`,
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 62][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m className="w-4 h-4" />
  [31m[Line 70][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash className="w-4 h-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/productRule/ProductRuleRecordTable.tsx[0m
  [31m[Line 44][0m [[36mJSX Plain Text[0m] Found: "[1mNo product rules yet[0m"
     [33m→[0m <h2 className="text-lg font-semibold text-muted-foreground">
  [31m[Line 47][0m [[36mJSX Plain Text[0m] Found: "[1mGet started by creating your first product rule.[0m"
     [33m→[0m <p className="mb-4 text-md text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/productRule/productRuleColumns.tsx[0m
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mUnit Price[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mUnit Price[0m" />,
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mCategories[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mCategories[0m" />,
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mExclude Categories[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mExclude Categories[0m" />,
  [31m[Line 68][0m [[36mJS/TS String Literal[0m] Found: "[1mProducts[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mProducts[0m" />,
  [31m[Line 86][0m [[36mJS/TS String Literal[0m] Found: "[1mExclude Products[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mExclude Products[0m" />,
  [31m[Line 104][0m [[36mJS/TS String Literal[0m] Found: "[1mTags[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mTags[0m" />,
  [31m[Line 122][0m [[36mJS/TS String Literal[0m] Found: "[1mExclude Tags[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mExclude Tags[0m" />,

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/similarityConfig/FilterFieldSelect.tsx[0m
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect field[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect field[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/similarityConfig/RuleFieldSelect.tsx[0m
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect field[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect field[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/similarityConfig/RuleGroupSelect.tsx[0m
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect group[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect group[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/similarityConfig/SimilarityGroupItem.tsx[0m
  [31m[Line 77][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 78][0m [[36mJS/TS String Literal[0m] Found: "[1mTitle is required[0m"
     [33m→[0m description: '[1m[31mTitle is required[0m',
  [31m[Line 96][0m [[36mJS/TS String Literal[0m] Found: "[1mSave failed[0m"
     [33m→[0m title: '[1m[31mSave failed[0m',
  [31m[Line 97][0m [[36mJS/TS String Literal[0m] Found: "[1mUnknown error[0m"
     [33m→[0m description: msg || '[1m[31mUnknown error[0m',
  [31m[Line 121][0m [[36mJS/TS String Literal[0m] Found: "[1mDelete failed[0m"
     [33m→[0m title: '[1m[31mDelete failed[0m',
  [31m[Line 122][0m [[36mJS/TS String Literal[0m] Found: "[1mUnknown error[0m"
     [33m→[0m description: msg || '[1m[31mUnknown error[0m',
  [31m[Line 135][0m [[36mJS/TS String Literal[0m] Found: "[1mNew similarity group[0m"
     [33m→[0m {title || '[1m[31mNew similarity group[0m'}
  [31m[Line 148][0m [[36mJSX Plain Text[0m] Found: "[1mTitle[0m"
     [33m→[0m <Label>[1m[31mTitle[0m</Label>
  [31m[Line 152][0m [[36mJS/TS String Literal[0m] Found: "[1mNew similarity group[0m"
     [33m→[0m placeholder="[1m[31mNew similarity group[0m"
  [31m[Line 156][0m [[36mJSX Plain Text[0m] Found: "[1mFilter Field[0m"
     [33m→[0m <Label>[1m[31mFilter Field[0m</Label>
  [31m[Line 163][0m [[36mJSX Plain Text[0m] Found: "[1mCode Mask[0m"
     [33m→[0m <Label>[1m[31mCode Mask[0m</Label>
  [31m[Line 170][0m [[36mJSX Plain Text[0m] Found: "[1mDefault Product[0m"
     [33m→[0m <Label>[1m[31mDefault Product[0m</Label>
  [31m[Line 188][0m [[36mJSX Plain Text[0m] Found: "[1mTitle[0m"
     [33m→[0m <Label>[1m[31mTitle[0m</Label>
  [31m[Line 194][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter title[0m"
     [33m→[0m placeholder="[1m[31mEnter title[0m"
  [31m[Line 199][0m [[36mJSX Plain Text[0m] Found: "[1mField Group[0m"
     [33m→[0m <Label>[1m[31mField Group[0m</Label>
  [31m[Line 209][0m [[36mJSX Plain Text[0m] Found: "[1mField[0m"
     [33m→[0m <Label>[1m[31mField[0m</Label>
  [31m[Line 235][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Rule[0m"
     [33m→[0m <IconPlus size={16} />
  [31m[Line 249][0m [[36mJS/TS String Literal[0m] Found: "[1mDeleting...[0m"
     [33m→[0m {isDeleting ? '[1m[31mDeleting...[0m' : 'Delete'}
  [31m[Line 249][0m [[36mJS/TS String Literal[0m] Found: "[1mDelete[0m"
     [33m→[0m {isDeleting ? 'Deleting...' : '[1m[31mDelete[0m'}
  [31m[Line 261][0m [[36mJS/TS String Literal[0m] Found: "[1mSaving...[0m"
     [33m→[0m {isSaving ? '[1m[31mSaving...[0m' : 'Save'}
  [31m[Line 261][0m [[36mJS/TS String Literal[0m] Found: "[1mSave[0m"
     [33m→[0m {isSaving ? 'Saving...' : '[1m[31mSave[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/similarityConfig/SimilarityGroupList.tsx[0m
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mSimilarity Groups[0m"
     [33m→[0m <InfoCard title="[1m[31mSimilarity Groups[0m" className="h-full">
  [31m[Line 53][0m [[36mJS/TS String Literal[0m] Found: "[1mSimilarity Groups[0m"
     [33m→[0m <InfoCard title="[1m[31mSimilarity Groups[0m" className="h-full">
  [31m[Line 81][0m [[36mJSX Plain Text[0m] Found: "[1mNo similarity groups yet[0m"
     [33m→[0m <h2 className="text-lg font-semibold text-muted-foreground">
  [31m[Line 84][0m [[36mJSX Plain Text[0m] Found: "[1mGet started by creating your first similarity group config.[0m"
     [33m→[0m <p className="mb-4 text-md text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/productsConfig/similarityConfig/useSimilarityGroups.ts[0m
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mNew similarity group[0m"
     [33m→[0m title: '[1m[31mNew similarity group[0m',
  [31m[Line 67][0m [[36mJS/TS String Literal[0m] Found: "[1mSimilarity group saved successfully[0m"
     [33m→[0m toast({ title: '[1m[31mSimilarity group saved successfully[0m' });
  [31m[Line 70][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 71][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to save similarity group[0m"
     [33m→[0m description: '[1m[31mFailed to save similarity group[0m',
  [31m[Line 93][0m [[36mJS/TS String Literal[0m] Found: "[1mSimilarity group deleted successfully[0m"
     [33m→[0m toast({ title: '[1m[31mSimilarity group deleted successfully[0m' });
  [31m[Line 96][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 97][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to delete similarity group[0m"
     [33m→[0m description: '[1m[31mFailed to delete similarity group[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/uoms/UomForm.tsx[0m
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mWeekly[0m"
     [33m→[0m { label: '[1m[31mWeekly[0m', value: 'weekly' },
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mMonthly[0m"
     [33m→[0m { label: '[1m[31mMonthly[0m', value: 'monthly' },
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mDaily[0m"
     [33m→[0m { label: '[1m[31mDaily[0m', value: 'daily' },
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mWeekly[0m"
     [33m→[0m { label: '[1m[31mWeekly[0m', value: 'weekly' },
  [31m[Line 26][0m [[36mJS/TS String Literal[0m] Found: "[1mMonthly[0m"
     [33m→[0m { label: '[1m[31mMonthly[0m', value: 'monthly' },
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mSeasonally[0m"
     [33m→[0m { label: '[1m[31mSeasonally[0m', value: 'seasonally' },
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mStart From Paid Date[0m"
     [33m→[0m { label: '[1m[31mStart From Paid Date[0m', value: 'startPaidDate' },
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mStart from Expired Date[0m"
     [33m→[0m { label: '[1m[31mStart from Expired Date[0m', value: 'startExpiredDate' },
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mStart from Specific Date[0m"
     [33m→[0m { label: '[1m[31mStart from Specific Date[0m', value: 'startSpecificDate' },
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m name: z.string().min(1, '[1m[31mName is required[0m'),
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mCode is required[0m"
     [33m→[0m code: z.string().min(1, '[1m[31mCode is required[0m'),
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mSubscription period is required[0m"
     [33m→[0m message: '[1m[31mSubscription period is required[0m',
  [31m[Line 61][0m [[36mJS/TS String Literal[0m] Found: "[1mSubscription rule is required[0m"
     [33m→[0m message: '[1m[31mSubscription rule is required[0m',
  [31m[Line 72][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease select a day[0m"
     [33m→[0m message: '[1m[31mPlease select a day[0m',
  [31m[Line 81][0m [[36mJS/TS String Literal[0m] Found: "[1mTimely period is required[0m"
     [33m→[0m message: '[1m[31mTimely period is required[0m',
  [31m[Line 170][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 185][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 265][0m [[36mJS/TS String Literal[0m] Found: "[1mUOM for subscription[0m"
     [33m→[0m defaultValue: '[1m[31mUOM for subscription[0m',
  [31m[Line 282][0m [[36mJS/TS String Literal[0m] Found: "[1mSubscription Period[0m"
     [33m→[0m defaultValue: '[1m[31mSubscription Period[0m',
  [31m[Line 294][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose period[0m"
     [33m→[0m defaultValue: '[1m[31mChoose period[0m',
  [31m[Line 327][0m [[36mJS/TS String Literal[0m] Found: "[1mSubscription Rule[0m"
     [33m→[0m defaultValue: '[1m[31mSubscription Rule[0m',
  [31m[Line 339][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect subscription rule[0m"
     [33m→[0m defaultValue: '[1m[31mSelect subscription rule[0m',
  [31m[Line 380][0m [[36mJS/TS String Literal[0m] Found: "[1mIs able subscription renew before close[0m"
     [33m→[0m '[1m[31mIs able subscription renew before close[0m',
  [31m[Line 392][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect a day[0m"
     [33m→[0m ? t('select-day', { defaultValue: '[1m[31mSelect a day[0m' })
  [31m[Line 394][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect date[0m"
     [33m→[0m defaultValue: '[1m[31mSelect date[0m',
  [31m[Line 412][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect a day[0m"
     [33m→[0m defaultValue: '[1m[31mSelect a day[0m',
  [31m[Line 447][0m [[36mJS/TS String Literal[0m] Found: "[1mIf you select the 31st day, months with 28, 29 or 30 days will use the last day of that month.[0m"
     [33m→[0m '[1m[31mIf you select the 31st day, months with 28, 29 or 30 days will use the last day of that month.[0m',
  [31m[Line 458][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect a day[0m"
     [33m→[0m defaultValue: '[1m[31mSelect a day[0m',
  [31m[Line 503][0m [[36mJS/TS String Literal[0m] Found: "[1mUOM for timely[0m"
     [33m→[0m defaultValue: '[1m[31mUOM for timely[0m',
  [31m[Line 518][0m [[36mJS/TS String Literal[0m] Found: "[1mTimely period[0m"
     [33m→[0m {t('timely-period', { defaultValue: '[1m[31mTimely period[0m' })}{' '}
  [31m[Line 529][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose period[0m"
     [33m→[0m defaultValue: '[1m[31mChoose period[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/uoms/UomMoreColumn.tsx[0m
  [31m[Line 30][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete "[0m${uom.name}"?`,
  [31m[Line 51][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m className="w-4 h-4" />
  [31m[Line 59][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash className="w-4 h-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/uoms/UomsColumns.tsx[0m
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mCode[0m"
     [33m→[0m header: () => <RecordTable.InlineHead icon={IconHash} label="[1m[31mCode[0m" />,
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mProduct Count[0m"
     [33m→[0m <RecordTable.InlineHead icon={IconLabel} label="[1m[31mProduct Count[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/uoms/UomsCommandBar.tsx[0m
  [31m[Line 24][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${
  [31m[Line 24][0m [[36mTemplate Literal String[0m] Found: "[1mselected UOM[0m"
     [33m→[0m message: `Are you sure you want to delete the ${
  [31m[Line 51][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/components/uoms/UomsRecordTable.tsx[0m
  [31m[Line 31][0m [[36mJSX Plain Text[0m] Found: "[1mNo UOMs yet[0m"
     [33m→[0m <h3 className="mb-2 text-xl font-semibold">[1m[31mNo UOMs yet[0m</h3>
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mGet started by creating your first UOM.[0m"
     [33m→[0m <p className="max-w-md text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/hooks/useBundleConditionAdd.tsx[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mBundleCondition[0m"
     [33m→[0m __typename: '[1m[31mBundleCondition[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/hooks/useBundleConditionDefault.tsx[0m
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mBundle condition set as default successfully[0m"
     [33m→[0m description: '[1m[31mBundle condition set as default successfully[0m',
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mBundleConditions[0m"
     [33m→[0m refetchQueries: ['[1m[31mBundleConditions[0m'],

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/hooks/useBundleConditionEdit.tsx[0m
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mBundle condition updated successfully[0m"
     [33m→[0m title: '[1m[31mBundle condition updated successfully[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/hooks/useBundleConditionRemove.tsx[0m
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mBundle condition removed successfully[0m"
     [33m→[0m description: '[1m[31mBundle condition removed successfully[0m',
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mBundleConditions[0m"
     [33m→[0m refetchQueries: ['[1m[31mBundleConditions[0m'],

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/hooks/useBundleRulesAdd.tsx[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mBundleRule[0m"
     [33m→[0m __typename: '[1m[31mBundleRule[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/hooks/useBundleRulesEdit.tsx[0m
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mBundle rule updated successfully[0m"
     [33m→[0m title: '[1m[31mBundle rule updated successfully[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/hooks/useBundleRulesRemove.tsx[0m
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mBundle rule removed successfully[0m"
     [33m→[0m description: '[1m[31mBundle rule removed successfully[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/hooks/useProductRulesRemove.tsx[0m
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mProduct rule removed successfully[0m"
     [33m→[0m description: '[1m[31mProduct rule removed successfully[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/hooks/useUomsAdd.tsx[0m
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mUom[0m"
     [33m→[0m __typename: '[1m[31mUom[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/hooks/useUomsEdit.tsx[0m
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mUom updated successfully![0m"
     [33m→[0m toast({ title: '[1m[31mUom updated successfully![0m', variant: 'success' });

[1m[33m📄 File: frontend/core-ui/src/modules/products/settings/hooks/useUomsRemove.tsx[0m
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mUom removed successfully[0m"
     [33m→[0m description: '[1m[31mUom removed successfully[0m',
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mUoms[0m"
     [33m→[0m refetchQueries: ['[1m[31mUoms[0m'],

[1m[33m📄 File: frontend/core-ui/src/modules/products/utils/tableUtils.tsx[0m
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1m-4px 0 4px -4px var(--muted-foreground) inset[0m"
     [33m→[0m ? '[1m[31m-4px 0 4px -4px var(--muted-foreground) inset[0m'
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1m4px 0 4px -4px var(--muted-foreground) inset[0m"
     [33m→[0m ? '[1m[31m4px 0 4px -4px var(--muted-foreground) inset[0m'
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1msticky z-1[0m"
     [33m→[0m return cn(isPinned ? '[1m[31msticky z-1[0m' : 'relative');

[1m[33m📄 File: frontend/core-ui/src/modules/properties/components/Properties.tsx[0m
  [31m[Line 51][0m [[36mJSX Plain Text[0m] Found: "[1mNo fields found[0m"
     [33m→[0m >
  [31m[Line 89][0m [[36mJS/TS String Literal[0m] Found: "[1mAre you sure you want to delete this field?[0m"
     [33m→[0m message: '[1m[31mAre you sure you want to delete this field?[0m',
  [31m[Line 148][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m />
  [31m[Line 159][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m {removeFieldLoading ? <Spinner /> : <IconTrash />}

[1m[33m📄 File: frontend/core-ui/src/modules/properties/components/PropertiesHeader.tsx[0m
  [31m[Line 17][0m [[36mJSX Plain Text[0m] Found: "[1mProperties[0m"
     [33m→[0m <IconHierarchy2 />

[1m[33m📄 File: frontend/core-ui/src/modules/properties/components/PropertyAdd.tsx[0m
  [31m[Line 26][0m [[36mJS/TS String Literal[0m] Found: "[1mProperty added[0m"
     [33m→[0m toast({ title: '[1m[31mProperty added[0m', variant: 'success' });
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/properties/components/PropertyFieldsGroupSettings.tsx[0m
  [31m[Line 32][0m [[36mJSX Plain Text[0m] Found: "[1mName[0m"
     [33m→[0m <Table.Head>[1m[31mName[0m</Table.Head>
  [31m[Line 33][0m [[36mJSX Plain Text[0m] Found: "[1mData type[0m"
     [33m→[0m <Table.Head>[1m[31mData type[0m</Table.Head>
  [31m[Line 66][0m [[36mJSX Plain Text[0m] Found: "[1mAdd field[0m"
     [33m→[0m <IconPlus />
  [31m[Line 96][0m [[36mJS/TS String Literal[0m] Found: "[1mAre you sure you want to delete this field group?[0m"
     [33m→[0m message: '[1m[31mAre you sure you want to delete this field group?[0m',
  [31m[Line 115][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m />
  [31m[Line 125][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m {loading ? <Spinner size="sm" /> : <IconTrash />}

[1m[33m📄 File: frontend/core-ui/src/modules/properties/components/PropertyForm.tsx[0m
  [31m[Line 64][0m [[36mJSX Plain Text[0m] Found: "[1mIcon[0m"
     [33m→[0m <Form.Label>[1m[31mIcon[0m</Form.Label>
  [31m[Line 81][0m [[36mJSX Plain Text[0m] Found: "[1mName[0m"
     [33m→[0m <Form.Label>[1m[31mName[0m</Form.Label>
  [31m[Line 94][0m [[36mJSX Plain Text[0m] Found: "[1mCode[0m"
     [33m→[0m <Form.Label>[1m[31mCode[0m</Form.Label>
  [31m[Line 106][0m [[36mJSX Plain Text[0m] Found: "[1mDescription[0m"
     [33m→[0m <Form.Label>[1m[31mDescription[0m</Form.Label>
  [31m[Line 118][0m [[36mJSX Plain Text[0m] Found: "[1mType[0m"
     [33m→[0m <Form.Label>[1m[31mType[0m</Form.Label>
  [31m[Line 130][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect type[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect type[0m" />
  [31m[Line 160][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdate[0m"
     [33m→[0m {isEdit ? '[1m[31mUpdate[0m' : 'Add'} Property
  [31m[Line 160][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd[0m"
     [33m→[0m {isEdit ? 'Update' : '[1m[31mAdd[0m'} Property
  [31m[Line 160][0m [[36mJSX Plain Text[0m] Found: "[1mProperty[0m"
     [33m→[0m {isEdit ? 'Update' : 'Add'} [1m[31mProperty[0m

[1m[33m📄 File: frontend/core-ui/src/modules/properties/components/PropertyFormMultiple.tsx[0m
  [31m[Line 25][0m [[36mJSX Plain Text[0m] Found: "[1mMultiple[0m"
     [33m→[0m <Form.Label variant="peer">[1m[31mMultiple[0m</Form.Label>

[1m[33m📄 File: frontend/core-ui/src/modules/properties/components/PropertyFormSelectFields.tsx[0m
  [31m[Line 26][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect options[0m"
     [33m→[0m <InfoCard title="[1m[31mSelect options[0m">
  [31m[Line 36][0m [[36mJSX Plain Text[0m] Found: "[1mLabel[0m"
     [33m→[0m {index === 0 && <Form.[1m[31mLabel[0m>Label</Form.Label>}
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter label[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mEnter label[0m" disabled={Boolean(id)}/>
  [31m[Line 49][0m [[36mJSX Plain Text[0m] Found: "[1mValue[0m"
     [33m→[0m {index === 0 && <Form.Label>[1m[31mValue[0m</Form.Label>}
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter value[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mEnter value[0m" disabled={Boolean(id)}/>
  [31m[Line 71][0m [[36mJSX Plain Text[0m] Found: "[1mAdd option[0m"
     [33m→[0m <IconPlus /> [1m[31mAdd option[0m

[1m[33m📄 File: frontend/core-ui/src/modules/properties/components/PropertyFormValidations.tsx[0m
  [31m[Line 24][0m [[36mJSX Plain Text[0m] Found: "[1mValidation[0m"
     [33m→[0m <Form.Label>[1m[31mValidation[0m</Form.Label>
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect validation[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect validation[0m" />
  [31m[Line 33][0m [[36mJSX Plain Text[0m] Found: "[1mText[0m"
     [33m→[0m <Select.Item value="text">[1m[31mText[0m</Select.Item>
  [31m[Line 34][0m [[36mJSX Plain Text[0m] Found: "[1mNumber[0m"
     [33m→[0m <Select.Item value="number">[1m[31mNumber[0m</Select.Item>
  [31m[Line 36][0m [[36mJSX Plain Text[0m] Found: "[1mPhone[0m"
     [33m→[0m <Select.Item value="phone">[1m[31mPhone[0m</Select.Item>
  [31m[Line 37][0m [[36mJSX Plain Text[0m] Found: "[1mEmail[0m"
     [33m→[0m <Select.Item value="email">[1m[31mEmail[0m</Select.Item>
  [31m[Line 38][0m [[36mJSX Plain Text[0m] Found: "[1mPassword[0m"
     [33m→[0m <Select.Item value="password">[1m[31mPassword[0m</Select.Item>

[1m[33m📄 File: frontend/core-ui/src/modules/properties/components/PropertyGroupAdd.tsx[0m
  [31m[Line 51][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Group[0m"
     [33m→[0m <Button variant="outline">[1m[31mAdd Group[0m</Button>

[1m[33m📄 File: frontend/core-ui/src/modules/properties/components/PropertyGroupEdit.tsx[0m
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mFieldGroups[0m"
     [33m→[0m refetchQueries: ['[1m[31mFieldGroups[0m'],

[1m[33m📄 File: frontend/core-ui/src/modules/properties/components/PropertyGroupForm.tsx[0m
  [31m[Line 39][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Group[0m"
     [33m→[0m <Sheet.Title className="text-lg text-foreground flex items-center gap-1">
  [31m[Line 42][0m [[36mJSX Plain Text[0m] Found: "[1mAdd a new group for the content type[0m"
     [33m→[0m <Sheet.Description className="sr-only">
  [31m[Line 52][0m [[36mJSX Plain Text[0m] Found: "[1mGroup Name[0m"
     [33m→[0m <Form.Label>[1m[31mGroup Name[0m</Form.Label>
  [31m[Line 57][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter group name[0m"
     [33m→[0m placeholder="[1m[31mEnter group name[0m"
  [31m[Line 70][0m [[36mJSX Plain Text[0m] Found: "[1mCode[0m"
     [33m→[0m <Form.Label>[1m[31mCode[0m</Form.Label>
  [31m[Line 75][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter group code[0m"
     [33m→[0m placeholder="[1m[31mEnter group code[0m"
  [31m[Line 85][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant={'ghost'} onClick={on[1m[31mCancel[0m}>
  [31m[Line 90][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdate[0m"
     [33m→[0m {isEdit ? '[1m[31mUpdate[0m' : 'Create'}
  [31m[Line 90][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate[0m"
     [33m→[0m {isEdit ? 'Update' : '[1m[31mCreate[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/properties/components/PropertySelectRelationType.tsx[0m
  [31m[Line 25][0m [[36mJSX Plain Text[0m] Found: "[1mRelation Type[0m"
     [33m→[0m <Form.Label>[1m[31mRelation Type[0m</Form.Label>
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect relation type[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mSelect relation type[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/properties/constants/coreFieldTypes.ts[0m
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mCustomers[0m"
     [33m→[0m label: '[1m[31mCustomers[0m',
  [31m[Line 8][0m [[36mJS/TS String Literal[0m] Found: "[1mCompanies[0m"
     [33m→[0m label: '[1m[31mCompanies[0m',
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mProducts[0m"
     [33m→[0m label: '[1m[31mProducts[0m',
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mTeam members[0m"
     [33m→[0m label: '[1m[31mTeam members[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/properties/constants/fieldTypes.tsx[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mText[0m"
     [33m→[0m { value: 'text', label: '[1m[31mText[0m', icon: <IconTextSize /> },
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mTextarea[0m"
     [33m→[0m { value: 'textarea', label: '[1m[31mTextarea[0m', icon: <IconTextScan2 /> },
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mNumber[0m"
     [33m→[0m { value: 'number', label: '[1m[31mNumber[0m', icon: <IconNumbers /> },
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mTrue/False[0m"
     [33m→[0m { value: 'boolean', label: '[1m[31mTrue/False[0m', icon: <IconCheck /> },
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mDate[0m"
     [33m→[0m { value: 'date', label: '[1m[31mDate[0m', icon: <IconCalendarEvent /> },
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect[0m"
     [33m→[0m { value: 'select', label: '[1m[31mSelect[0m', icon: <IconChevronDown /> },
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mMultiple Select[0m"
     [33m→[0m label: '[1m[31mMultiple Select[0m',
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mCheckbox[0m"
     [33m→[0m { value: 'check', label: '[1m[31mCheckbox[0m', icon: <IconSquareCheck /> },
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mRadio Button[0m"
     [33m→[0m { value: 'radio', label: '[1m[31mRadio Button[0m', icon: <IconCircleCheck /> },
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mRelation[0m"
     [33m→[0m { value: 'relation', label: '[1m[31mRelation[0m', icon: <IconRelationManyToMany /> },
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mFile[0m"
     [33m→[0m { value: 'file', label: '[1m[31mFile[0m', icon: <IconFile /> },
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mPhone[0m"
     [33m→[0m { value: 'phone', label: '[1m[31mPhone[0m', icon: <IconPhone /> },

[1m[33m📄 File: frontend/core-ui/src/modules/properties/hooks/useAddPropertyGroup.ts[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated a group[0m"
     [33m→[0m toast({ title: '[1m[31mCreated a group[0m', variant: 'success' });
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to create a group[0m"
     [33m→[0m title: '[1m[31mFailed to create a group[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/properties/hooks/useFieldGroupRemove.ts[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mField group removed successfully[0m"
     [33m→[0m title: '[1m[31mField group removed successfully[0m',
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/properties/hooks/useFieldRemove.ts[0m
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mField removed successfully[0m"
     [33m→[0m toast({ title: '[1m[31mField removed successfully[0m', variant: 'success' });
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/properties/propertySchema.ts[0m
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mGroup name is required[0m"
     [33m→[0m name: z.string().min(1, '[1m[31mGroup name is required[0m'),
  [31m[Line 9][0m [[36mJS/TS String Literal[0m] Found: "[1mLabel is required[0m"
     [33m→[0m label: z.string().min(1, '[1m[31mLabel is required[0m'),
  [31m[Line 10][0m [[36mJS/TS String Literal[0m] Found: "[1mValue is required[0m"
     [33m→[0m value: z.string().min(1, '[1m[31mValue is required[0m'),
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mIcon is required[0m"
     [33m→[0m icon: z.string().min(1, '[1m[31mIcon is required[0m'),
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mProperty name is required[0m"
     [33m→[0m name: z.string().min(1, '[1m[31mProperty name is required[0m'),
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mCode is required[0m"
     [33m→[0m code: z.string().min(1, '[1m[31mCode is required[0m'),
  [31m[Line 26][0m [[36mJS/TS String Literal[0m] Found: "[1mType is required[0m"
     [33m→[0m type: z.string().min(1, '[1m[31mType is required[0m'),
  [31m[Line 47][0m [[36mJS/TS String Literal[0m] Found: "[1mValue must be unique[0m"
     [33m→[0m message: '[1m[31mValue must be unique[0m',
  [31m[Line 61][0m [[36mJS/TS String Literal[0m] Found: "[1mRelation type is required[0m"
     [33m→[0m message: '[1m[31mRelation type is required[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/quickActions/components/QuickActions.tsx[0m
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mType a command or search...[0m"
     [33m→[0m <Command.Input placeholder="[1m[31mType a command or search...[0m" />
  [31m[Line 53][0m [[36mJSX Plain Text[0m] Found: "[1mNo results found.[0m"
     [33m→[0m <Command.Empty>[1m[31mNo results found.[0m</Command.Empty>
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mSuggestions[0m"
     [33m→[0m <Command.Group heading="[1m[31mSuggestions[0m">
  [31m[Line 57][0m [[36mJSX Plain Text[0m] Found: "[1mCalendar[0m"
     [33m→[0m <span>[1m[31mCalendar[0m</span>
  [31m[Line 61][0m [[36mJSX Plain Text[0m] Found: "[1mSearch Emoji[0m"
     [33m→[0m <span>[1m[31mSearch Emoji[0m</span>
  [31m[Line 65][0m [[36mJSX Plain Text[0m] Found: "[1mCalculator[0m"
     [33m→[0m <span>[1m[31mCalculator[0m</span>
  [31m[Line 69][0m [[36mJS/TS String Literal[0m] Found: "[1mSettings[0m"
     [33m→[0m <Command.Group heading="[1m[31mSettings[0m">
  [31m[Line 72][0m [[36mJSX Plain Text[0m] Found: "[1mProfile[0m"
     [33m→[0m <span>[1m[31mProfile[0m</span>
  [31m[Line 77][0m [[36mJSX Plain Text[0m] Found: "[1mBilling[0m"
     [33m→[0m <span>[1m[31mBilling[0m</span>
  [31m[Line 82][0m [[36mJSX Plain Text[0m] Found: "[1mSettings[0m"
     [33m→[0m <span>[1m[31mSettings[0m</span>

[1m[33m📄 File: frontend/core-ui/src/modules/segments/components/SegmentsBreadcrumb.tsx[0m
  [31m[Line 8][0m [[36mJSX Plain Text[0m] Found: "[1mSegments[0m"
     [33m→[0m <IconTagsFilled className="size-4 text-accent-foreground" />

[1m[33m📄 File: frontend/core-ui/src/modules/segments/components/SegmentsMoreColumn.tsx[0m
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mSegment ID is missing[0m"
     [33m→[0m description: '[1m[31mSegment ID is missing[0m',
  [31m[Line 40][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete "[0m${name}"?`,
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 47][0m [[36mJS/TS String Literal[0m] Found: "[1mSegment deleted successfully[0m"
     [33m→[0m description: '[1m[31mSegment deleted successfully[0m',
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 70][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m /> Edit
  [31m[Line 73][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash /> [1m[31mDelete[0m

[1m[33m📄 File: frontend/core-ui/src/modules/segments/components/SegmentsRemoveButton.tsx[0m
  [31m[Line 25][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${segmentIds.length} selected segments?`,
  [31m[Line 25][0m [[36mTemplate Literal String[0m] Found: "[1mselected segments?[0m"
     [33m→[0m message: `Are you sure you want to delete the ${segmentIds.length} [1m[31mselected segments?[0m`,
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mSegments deleted successfully[0m"
     [33m→[0m description: '[1m[31mSegments deleted successfully[0m',
  [31m[Line 49][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/apps/components/AppsCommandBar.tsx[0m
  [31m[Line 24][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to remove the selected ([0m"
     [33m→[0m message: `[1m[31mAre you sure you want to remove the selected ([0m${ids.length})?`,
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 58][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/apps/components/AppsForm.tsx[0m
  [31m[Line 14][0m [[36mJSX Plain Text[0m] Found: "[1mApp Name[0m"
     [33m→[0m <Form.Label>[1m[31mApp Name[0m</Form.Label>
  [31m[Line 15][0m [[36mJSX Plain Text[0m] Found: "[1mApp Name[0m"
     [33m→[0m <Form.Description className="sr-only">[1m[31mApp Name[0m</Form.Description>
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mMy App[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mMy App[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/apps/components/AppsHeader.tsx[0m
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1mApps[0m"
     [33m→[0m <IconShieldCog />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/apps/components/CreateApp.tsx[0m
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mApp created successfully[0m"
     [33m→[0m title: '[1m[31mApp created successfully[0m',
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 53][0m [[36mJSX Plain Text[0m] Found: "[1mCreate App[0m"
     [33m→[0m <IconPlus />
  [31m[Line 65][0m [[36mJSX Plain Text[0m] Found: "[1mCreate App[0m"
     [33m→[0m <Sheet.Title>[1m[31mCreate App[0m</Sheet.Title>
  [31m[Line 72][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant={'secondary'} onClick={() => setOpen(false)}>
  [31m[Line 76][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate App[0m"
     [33m→[0m {loading ? <Spinner /> : '[1m[31mCreate App[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/apps/components/EditApp.tsx[0m
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mApp updated successfully[0m"
     [33m→[0m toast({ variant: 'success', title: '[1m[31mApp updated successfully[0m' });
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 68][0m [[36mJSX Plain Text[0m] Found: "[1mEdit App[0m"
     [33m→[0m <Sheet.Title>[1m[31mEdit App[0m</Sheet.Title>
  [31m[Line 75][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant={'secondary'} onClick={onClose}>
  [31m[Line 79][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdate[0m"
     [33m→[0m {loading ? <Spinner /> : '[1m[31mUpdate[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/apps/components/table/AppsMoreColumn.tsx[0m
  [31m[Line 22][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete "[0m${name}"?`,
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 38][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to revoke "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to revoke "[0m${name}"?`,
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mApp revoked successfully[0m"
     [33m→[0m toast({ variant: 'success', title: '[1m[31mApp revoked successfully[0m' });
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 67][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m /> Edit
  [31m[Line 71][0m [[36mJSX Plain Text[0m] Found: "[1mRevoke[0m"
     [33m→[0m <IconLock /> [1m[31mRevoke[0m
  [31m[Line 75][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash /> [1m[31mDelete[0m

[1m[33m📄 File: frontend/core-ui/src/modules/settings/apps/components/table/AppsSettingsColumns.tsx[0m
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mToken copied to clipboard[0m"
     [33m→[0m toast({ variant: 'success', title: '[1m[31mToken copied to clipboard[0m' });
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mCopy token[0m"
     [33m→[0m title="[1m[31mCopy token[0m"
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mApp Name[0m"
     [33m→[0m header: '[1m[31mApp Name[0m',
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mToken[0m"
     [33m→[0m header: '[1m[31mToken[0m',
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mStatus[0m"
     [33m→[0m header: '[1m[31mStatus[0m',
  [31m[Line 73][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated At[0m"
     [33m→[0m header: '[1m[31mCreated At[0m',
  [31m[Line 77][0m [[36mJS/TS String Literal[0m] Found: "[1mYYYY/MM/DD[0m"
     [33m→[0m '[1m[31mYYYY/MM/DD[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/apps/schema.ts[0m
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m name: z.string().min(1, '[1m[31mName is required[0m'),

[1m[33m📄 File: frontend/core-ui/src/modules/settings/brands/components/BrandsCommandBar.tsx[0m
  [31m[Line 27][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to remove the selected([0m"
     [33m→[0m message: `[1m[31mAre you sure you want to remove the selected([0m${ids?.length})?`,
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 59][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/brands/components/BrandsEdit.tsx[0m
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mBrand updated successfully[0m"
     [33m→[0m toast({ title: '[1m[31mBrand updated successfully[0m', variant: 'success' });
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 96][0m [[36mJSX Plain Text[0m] Found: "[1mEdit brand[0m"
     [33m→[0m <Sheet.Title>[1m[31mEdit brand[0m</Sheet.Title>
  [31m[Line 109][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m >
  [31m[Line 113][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdate[0m"
     [33m→[0m {isLoading ? <Spinner /> : '[1m[31mUpdate[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/brands/components/BrandsMoreColumn.tsx[0m
  [31m[Line 24][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete "[0m${name}"?`,
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 56][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m /> Edit
  [31m[Line 61][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash /> [1m[31mDelete[0m

[1m[33m📄 File: frontend/core-ui/src/modules/settings/brands/components/BrandsSubHeader.tsx[0m
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m placeholder="[1m[31mFilter[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/settings/brands/components/BrandsTotalCount.tsx[0m
  [31m[Line 10][0m [[36mTemplate Literal String[0m] Found: "[1mrecords found[0m"
     [33m→[0m ? `${totalCount} [1m[31mrecords found[0m`

[1m[33m📄 File: frontend/core-ui/src/modules/settings/brands/components/CreateBrand.tsx[0m
  [31m[Line 83][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/brands/hooks/useBrandsEdit.tsx[0m
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mBrand updated successfully[0m"
     [33m→[0m title: '[1m[31mBrand updated successfully[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/brands/hooks/useBrandsRemove.tsx[0m
  [31m[Line 9][0m [[36mJS/TS String Literal[0m] Found: "[1mRemoved successfully![0m"
     [33m→[0m toast({ title: '[1m[31mRemoved successfully![0m', variant: 'success' }),
  [31m[Line 10][0m [[36mJS/TS String Literal[0m] Found: "[1mBrands[0m"
     [33m→[0m refetchQueries: ['[1m[31mBrands[0m'],

[1m[33m📄 File: frontend/core-ui/src/modules/settings/brands/schema.ts[0m
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m name: z.string().min(1, '[1m[31mName is required[0m'),

[1m[33m📄 File: frontend/core-ui/src/modules/settings/components/ChooseTheme.tsx[0m
  [31m[Line 9][0m [[36mJS/TS String Literal[0m] Found: "[1mLight[0m"
     [33m→[0m label: '[1m[31mLight[0m',
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mDark[0m"
     [33m→[0m label: '[1m[31mDark[0m',
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mSystem[0m"
     [33m→[0m label: '[1m[31mSystem[0m',
  [31m[Line 31][0m [[36mJSX Plain Text[0m] Found: "[1mAppearance[0m"
     [33m→[0m <legend className="text-sm font-medium leading-none text-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/settings/file-upload/components/FileUpload.tsx[0m
  [31m[Line 155][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdate[0m"
     [33m→[0m '[1m[31mUpdate[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/file-upload/components/FileUploadMainFields.tsx[0m
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect option[0m"
     [33m→[0m placeholder="[1m[31mSelect option[0m"
  [31m[Line 35][0m [[36mJSX Plain Text[0m] Found: "[1mNo results found[0m"
     [33m→[0m <p className="text-center text-sm">[1m[31mNo results found[0m</p>
  [31m[Line 53][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect option[0m"
     [33m→[0m placeholder="[1m[31mSelect option[0m"
  [31m[Line 57][0m [[36mJSX Plain Text[0m] Found: "[1mNo results found[0m"
     [33m→[0m <p className="text-center text-sm">[1m[31mNo results found[0m</p>

[1m[33m📄 File: frontend/core-ui/src/modules/settings/file-upload/constants/serviceData.ts[0m
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mLocal[0m"
     [33m→[0m label: '[1m[31mLocal[0m',
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mAmazon Web Service[0m"
     [33m→[0m label: '[1m[31mAmazon Web Service[0m',
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mGoogle Cloud Service[0m"
     [33m→[0m label: '[1m[31mGoogle Cloud Service[0m',
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mCloudflare[0m"
     [33m→[0m label: '[1m[31mCloudflare[0m',
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mAzure Storage[0m"
     [33m→[0m label: '[1m[31mAzure Storage[0m',
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mGraphics Interchange Format[0m"
     [33m→[0m label: '[1m[31mGraphics Interchange Format[0m',
  [31m[Line 47][0m [[36mJS/TS String Literal[0m] Found: "[1mIcon format[0m"
     [33m→[0m label: '[1m[31mIcon format[0m',
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mTagged Image File Format[0m"
     [33m→[0m label: '[1m[31mTagged Image File Format[0m',
  [31m[Line 57][0m [[36mJS/TS String Literal[0m] Found: "[1mJPEG image[0m"
     [33m→[0m label: '[1m[31mJPEG image[0m',
  [31m[Line 62][0m [[36mJS/TS String Literal[0m] Found: "[1mWindows OS/2 Bitmap Graphics[0m"
     [33m→[0m label: '[1m[31mWindows OS/2 Bitmap Graphics[0m',
  [31m[Line 67][0m [[36mJS/TS String Literal[0m] Found: "[1mPortable Network Graphics[0m"
     [33m→[0m label: '[1m[31mPortable Network Graphics[0m',
  [31m[Line 72][0m [[36mJS/TS String Literal[0m] Found: "[1mScalable Vector Graphics[0m"
     [33m→[0m label: '[1m[31mScalable Vector Graphics[0m',
  [31m[Line 77][0m [[36mJS/TS String Literal[0m] Found: "[1mWEBP image[0m"
     [33m→[0m label: '[1m[31mWEBP image[0m',
  [31m[Line 82][0m [[36mJS/TS String Literal[0m] Found: "[1mHigh Efficiency Image Coding[0m"
     [33m→[0m label: '[1m[31mHigh Efficiency Image Coding[0m',
  [31m[Line 87][0m [[36mJS/TS String Literal[0m] Found: "[1mHigh Efficiency Image Format[0m"
     [33m→[0m label: '[1m[31mHigh Efficiency Image Format[0m',
  [31m[Line 93][0m [[36mJS/TS String Literal[0m] Found: "[1mComma-separated values[0m"
     [33m→[0m label: '[1m[31mComma-separated values[0m',
  [31m[Line 98][0m [[36mJS/TS String Literal[0m] Found: "[1mMicrosoft Word[0m"
     [33m→[0m label: '[1m[31mMicrosoft Word[0m',
  [31m[Line 109][0m [[36mJS/TS String Literal[0m] Found: "[1mMicrosoft Excel[0m"
     [33m→[0m label: '[1m[31mMicrosoft Excel[0m',
  [31m[Line 119][0m [[36mJS/TS String Literal[0m] Found: "[1mMicrosoft PowerPoint[0m"
     [33m→[0m label: '[1m[31mMicrosoft PowerPoint[0m',
  [31m[Line 130][0m [[36mJS/TS String Literal[0m] Found: "[1mOpenDocument presentation document[0m"
     [33m→[0m label: '[1m[31mOpenDocument presentation document[0m',
  [31m[Line 135][0m [[36mJS/TS String Literal[0m] Found: "[1mOpenDocument spreadsheet document[0m"
     [33m→[0m label: '[1m[31mOpenDocument spreadsheet document[0m',
  [31m[Line 140][0m [[36mJS/TS String Literal[0m] Found: "[1mOpenDocument text document[0m"
     [33m→[0m label: '[1m[31mOpenDocument text document[0m',
  [31m[Line 145][0m [[36mJS/TS String Literal[0m] Found: "[1mAdobe Portable Document Format[0m"
     [33m→[0m label: '[1m[31mAdobe Portable Document Format[0m',
  [31m[Line 150][0m [[36mJS/TS String Literal[0m] Found: "[1mRich Text Format[0m"
     [33m→[0m label: '[1m[31mRich Text Format[0m',
  [31m[Line 155][0m [[36mJS/TS String Literal[0m] Found: "[1mPlain text[0m"
     [33m→[0m label: '[1m[31mPlain text[0m',
  [31m[Line 160][0m [[36mJS/TS String Literal[0m] Found: "[1mMarkdown[0m"
     [33m→[0m label: '[1m[31mMarkdown[0m',
  [31m[Line 165][0m [[36mJS/TS String Literal[0m] Found: "[1mMarkdown (legacy)[0m"
     [33m→[0m label: '[1m[31mMarkdown (legacy)[0m',
  [31m[Line 170][0m [[36mJS/TS String Literal[0m] Found: "[1mHanword Document (HWP)[0m"
     [33m→[0m label: '[1m[31mHanword Document (HWP)[0m',
  [31m[Line 175][0m [[36mJS/TS String Literal[0m] Found: "[1mHanword Document (HWPX)[0m"
     [33m→[0m label: '[1m[31mHanword Document (HWPX)[0m',
  [31m[Line 181][0m [[36mJS/TS String Literal[0m] Found: "[1mAAC audio[0m"
     [33m→[0m label: '[1m[31mAAC audio[0m',
  [31m[Line 186][0m [[36mJS/TS String Literal[0m] Found: "[1mMP3 audio[0m"
     [33m→[0m label: '[1m[31mMP3 audio[0m',
  [31m[Line 191][0m [[36mJS/TS String Literal[0m] Found: "[1mOGG audio[0m"
     [33m→[0m label: '[1m[31mOGG audio[0m',
  [31m[Line 196][0m [[36mJS/TS String Literal[0m] Found: "[1m3GPP audio/video container[0m"
     [33m→[0m label: '[1m[31m3GPP audio/video container[0m',
  [31m[Line 201][0m [[36mJS/TS String Literal[0m] Found: "[1m3GPP audio/video container[0m"
     [33m→[0m label: '[1m[31m3GPP audio/video container[0m',
  [31m[Line 206][0m [[36mJS/TS String Literal[0m] Found: "[1mMPEG video[0m"
     [33m→[0m label: '[1m[31mMPEG video[0m',
  [31m[Line 211][0m [[36mJS/TS String Literal[0m] Found: "[1mOGG video[0m"
     [33m→[0m label: '[1m[31mOGG video[0m',
  [31m[Line 216][0m [[36mJS/TS String Literal[0m] Found: "[1mMP4 video[0m"
     [33m→[0m label: '[1m[31mMP4 video[0m',
  [31m[Line 221][0m [[36mJS/TS String Literal[0m] Found: "[1mWebM video[0m"
     [33m→[0m label: '[1m[31mWebM video[0m',
  [31m[Line 226][0m [[36mJS/TS String Literal[0m] Found: "[1mWAV audio[0m"
     [33m→[0m label: '[1m[31mWAV audio[0m',
  [31m[Line 231][0m [[36mJS/TS String Literal[0m] Found: "[1mWAV vnd audio[0m"
     [33m→[0m label: '[1m[31mWAV vnd audio[0m',
  [31m[Line 236][0m [[36mJS/TS String Literal[0m] Found: "[1mMPEG-4 Audio[0m"
     [33m→[0m label: '[1m[31mMPEG-4 Audio[0m',
  [31m[Line 242][0m [[36mJS/TS String Literal[0m] Found: "[1mRAR archive[0m"
     [33m→[0m label: '[1m[31mRAR archive[0m',
  [31m[Line 247][0m [[36mJS/TS String Literal[0m] Found: "[1mTape archive[0m"
     [33m→[0m label: '[1m[31mTape archive[0m',
  [31m[Line 252][0m [[36mJS/TS String Literal[0m] Found: "[1m7-zip archive[0m"
     [33m→[0m label: '[1m[31m7-zip archive[0m',
  [31m[Line 257][0m [[36mJS/TS String Literal[0m] Found: "[1mGZip Compressed Archive[0m"
     [33m→[0m label: '[1m[31mGZip Compressed Archive[0m',
  [31m[Line 263][0m [[36mJS/TS String Literal[0m] Found: "[1mPublic[0m"
     [33m→[0m { label: '[1m[31mPublic[0m', value: 'true' },
  [31m[Line 264][0m [[36mJS/TS String Literal[0m] Found: "[1mPrivate[0m"
     [33m→[0m { label: '[1m[31mPrivate[0m', value: 'false' },

[1m[33m📄 File: frontend/core-ui/src/modules/settings/file-upload/constants/uploadServiceFields.ts[0m
  [31m[Line 9][0m [[36mJS/TS String Literal[0m] Found: "[1mAWS Access Key Id[0m"
     [33m→[0m { label: '[1m[31mAWS Access Key Id[0m', name: 'AWS_ACCESS_KEY_ID', type: 'text' },
  [31m[Line 10][0m [[36mJS/TS String Literal[0m] Found: "[1mAWS Secret Access Key[0m"
     [33m→[0m { label: '[1m[31mAWS Secret Access Key[0m', name: 'AWS_SECRET_ACCESS_KEY', type: 'text' },
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mAWS Bucket[0m"
     [33m→[0m { label: '[1m[31mAWS Bucket[0m', name: 'AWS_BUCKET', type: 'text' },
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mAWS Prefix[0m"
     [33m→[0m { label: '[1m[31mAWS Prefix[0m', name: 'AWS_PREFIX', type: 'text' },
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mAWS Compatible Service Endpoint[0m"
     [33m→[0m { label: '[1m[31mAWS Compatible Service Endpoint[0m', name: 'AWS_COMPATIBLE_SERVICE_ENDPOINT', type: 'text' },
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mAWS Force Path Style[0m"
     [33m→[0m { label: '[1m[31mAWS Force Path Style[0m', name: 'AWS_FORCE_PATH_STYLE', type: 'text' },
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mGoogle Bucket Name[0m"
     [33m→[0m { label: '[1m[31mGoogle Bucket Name[0m', name: 'GCS_BUCKET', type: 'text' },
  [31m[Line 26][0m [[36mJS/TS String Literal[0m] Found: "[1mCloudflare Account id[0m"
     [33m→[0m { label: '[1m[31mCloudflare Account id[0m', name: 'CLOUDFLARE_ACCOUNT_ID', type: 'text' },
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mCloudflare API Token[0m"
     [33m→[0m { label: '[1m[31mCloudflare API Token[0m', name: 'CLOUDFLARE_API_TOKEN', type: 'text' },
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mCloudflare Access Key id[0m"
     [33m→[0m { label: '[1m[31mCloudflare Access Key id[0m', name: 'CLOUDFLARE_ACCESS_KEY_ID', type: 'text' },
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mCloudflare Secret Access Key[0m"
     [33m→[0m { label: '[1m[31mCloudflare Secret Access Key[0m', name: 'CLOUDFLARE_SECRET_ACCESS_KEY', type: 'text' },
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mCloudflare R2 Bucket Name[0m"
     [33m→[0m { label: '[1m[31mCloudflare R2 Bucket Name[0m', name: 'CLOUDFLARE_BUCKET_NAME', type: 'text' },
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mCloudflare Account Hash[0m"
     [33m→[0m { label: '[1m[31mCloudflare Account Hash[0m', name: 'CLOUDFLARE_ACCOUNT_HASH', type: 'text' },
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mUse Cloudflare Images and Stream[0m"
     [33m→[0m { label: '[1m[31mUse Cloudflare Images and Stream[0m', name: 'CLOUDFLARE_USE_CDN', type: 'checkbox' },
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mContainer Name[0m"
     [33m→[0m { label: '[1m[31mContainer Name[0m', name: 'ABS_CONTAINER_NAME', type: 'text' },
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mConnection String[0m"
     [33m→[0m { label: '[1m[31mConnection String[0m', name: 'AB_CONNECTION_STRING', type: 'text' },

[1m[33m📄 File: frontend/core-ui/src/modules/settings/file-upload/hook/useConfigs.tsx[0m
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mConfigs updated successfully[0m"
     [33m→[0m description: '[1m[31mConfigs updated successfully[0m',
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mConfigs[0m"
     [33m→[0m refetchQueries: ['[1m[31mConfigs[0m'],
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mAre you sure you want to update file configs?[0m"
     [33m→[0m message: '[1m[31mAre you sure you want to update file configs?[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/file-upload/schema/index.ts[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mAccess key id must be at least 16 characters.[0m"
     [33m→[0m .min(16, { message: '[1m[31mAccess key id must be at least 16 characters.[0m' })
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mAccess key id must be at most 128 characters.[0m"
     [33m→[0m .max(128, { message: '[1m[31mAccess key id must be at most 128 characters.[0m' })
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mAccess key ID is required when configuring AWS[0m"
     [33m→[0m message: '[1m[31mAccess key ID is required when configuring AWS[0m',
  [31m[Line 26][0m [[36mJS/TS String Literal[0m] Found: "[1mSecret access key must be at least 16 characters.[0m"
     [33m→[0m .min(16, { message: '[1m[31mSecret access key must be at least 16 characters.[0m' })
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mSecret access key must be at most 128 characters.[0m"
     [33m→[0m .max(128, { message: '[1m[31mSecret access key must be at most 128 characters.[0m' })
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mSecret access key is required when configuring AWS[0m"
     [33m→[0m message: '[1m[31mSecret access key is required when configuring AWS[0m',
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mBucket name must be at least 3 characters.[0m"
     [33m→[0m .min(3, { message: '[1m[31mBucket name must be at least 3 characters.[0m' })
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mBucket name must be at most 63 characters.[0m"
     [33m→[0m .max(63, { message: '[1m[31mBucket name must be at most 63 characters.[0m' })
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mBucket is required when configuring AWS[0m"
     [33m→[0m message: '[1m[31mBucket is required when configuring AWS[0m',
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mBucket name must be at least 3 characters.[0m"
     [33m→[0m .min(3, { message: '[1m[31mBucket name must be at least 3 characters.[0m' })
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mBucket name must be at most 63 characters.[0m"
     [33m→[0m .max(63, { message: '[1m[31mBucket name must be at most 63 characters.[0m' })
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mBucket is required when configuring Google Cloud Service[0m"
     [33m→[0m message: '[1m[31mBucket is required when configuring Google Cloud Service[0m',
  [31m[Line 65][0m [[36mJS/TS String Literal[0m] Found: "[1mAccount ID is required when configuring CLOUDFLARE[0m"
     [33m→[0m message: '[1m[31mAccount ID is required when configuring CLOUDFLARE[0m',
  [31m[Line 71][0m [[36mJS/TS String Literal[0m] Found: "[1mAPI token is required when configuring CLOUDFLARE[0m"
     [33m→[0m message: '[1m[31mAPI token is required when configuring CLOUDFLARE[0m',
  [31m[Line 77][0m [[36mJS/TS String Literal[0m] Found: "[1mAccess key ID is required when configuring CLOUDFLARE[0m"
     [33m→[0m message: '[1m[31mAccess key ID is required when configuring CLOUDFLARE[0m',
  [31m[Line 83][0m [[36mJS/TS String Literal[0m] Found: "[1mSecret access key is required when configuring CLOUDFLARE[0m"
     [33m→[0m message: '[1m[31mSecret access key is required when configuring CLOUDFLARE[0m',
  [31m[Line 89][0m [[36mJS/TS String Literal[0m] Found: "[1mBucket name is required when configuring CLOUDFLARE[0m"
     [33m→[0m message: '[1m[31mBucket name is required when configuring CLOUDFLARE[0m',
  [31m[Line 95][0m [[36mJS/TS String Literal[0m] Found: "[1mAccount hash is required when configuring CLOUDFLARE[0m"
     [33m→[0m message: '[1m[31mAccount hash is required when configuring CLOUDFLARE[0m',
  [31m[Line 107][0m [[36mJS/TS String Literal[0m] Found: "[1mContainer name is required when configuring Azure[0m"
     [33m→[0m message: '[1m[31mContainer name is required when configuring Azure[0m',
  [31m[Line 113][0m [[36mJS/TS String Literal[0m] Found: "[1mConnection string is required when configuring Azure[0m"
     [33m→[0m message: '[1m[31mConnection string is required when configuring Azure[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/general/components/GeneralSettings.tsx[0m
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdated successfully[0m"
     [33m→[0m title: '[1m[31mUpdated successfully[0m',
  [31m[Line 52][0m [[36mTemplate Literal String[0m] Found: "[1mLanguage switched to ([0m"
     [33m→[0m description: `[1m[31mLanguage switched to ([0m${data.languageCode})`,
  [31m[Line 114][0m [[36mJS/TS String Literal[0m] Found: "[1mLanguages[0m"
     [33m→[0m placeholder="[1m[31mLanguages[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/settings/general/components/SelectTeamMemberMasterUsers.tsx[0m
  [31m[Line 26][0m [[36mJSX Plain Text[0m] Found: "[1mWith team member restrictions[0m"
     [33m→[0m <Form.Label>[1m[31mWith team member restrictions[0m</Form.Label>
  [31m[Line 38][0m [[36mJSX Plain Text[0m] Found: "[1mTeam members who can access every branches[0m"
     [33m→[0m <Form.Label>[1m[31mTeam members who can access every branches[0m</Form.Label>
  [31m[Line 57][0m [[36mJSX Plain Text[0m] Found: "[1mTeam members who can access every departments[0m"
     [33m→[0m <Form.Label>[1m[31mTeam members who can access every departments[0m</Form.Label>

[1m[33m📄 File: frontend/core-ui/src/modules/settings/general/constants/data.ts[0m
  [31m[Line 5][0m [[36mJS/TS String Literal[0m] Found: "[1mMongolian tugrik[0m"
     [33m→[0m label: '[1m[31mMongolian tugrik[0m',
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mAlbanian[0m"
     [33m→[0m { label: '[1m[31mAlbanian[0m', value: 'sq' },
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mArabic[0m"
     [33m→[0m { label: '[1m[31mArabic[0m', value: 'ar' },
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mBengali[0m"
     [33m→[0m { label: '[1m[31mBengali[0m', value: 'bn' },
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mBulgarian[0m"
     [33m→[0m { label: '[1m[31mBulgarian[0m', value: 'bg' },
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mChinese[0m"
     [33m→[0m { label: '[1m[31mChinese[0m', value: 'zh_CN' },
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mCzech[0m"
     [33m→[0m { label: '[1m[31mCzech[0m', value: 'cs' },
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mDutch[0m"
     [33m→[0m { label: '[1m[31mDutch[0m', value: 'nl' },
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mEnglish[0m"
     [33m→[0m { label: '[1m[31mEnglish[0m', value: 'en' },
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mFrench[0m"
     [33m→[0m { label: '[1m[31mFrench[0m', value: 'fr' },
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mGerman[0m"
     [33m→[0m { label: '[1m[31mGerman[0m', value: 'de' },
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mHindi[0m"
     [33m→[0m { label: '[1m[31mHindi[0m', value: 'hi' },
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mIndonesian[0m"
     [33m→[0m { label: '[1m[31mIndonesian[0m', value: 'id_ID' },
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mItalian[0m"
     [33m→[0m { label: '[1m[31mItalian[0m', value: 'it' },
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mJapanese[0m"
     [33m→[0m { label: '[1m[31mJapanese[0m', value: 'ja' },
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mJavanese[0m"
     [33m→[0m { label: '[1m[31mJavanese[0m', value: 'jv' },
  [31m[Line 26][0m [[36mJS/TS String Literal[0m] Found: "[1mKazakh[0m"
     [33m→[0m { label: '[1m[31mKazakh[0m', value: 'kk' },
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mKorean[0m"
     [33m→[0m { label: '[1m[31mKorean[0m', value: 'ko' },
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mMarathi[0m"
     [33m→[0m { label: '[1m[31mMarathi[0m', value: 'mr' },
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mMongolian[0m"
     [33m→[0m { label: '[1m[31mMongolian[0m', value: 'mn' },
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mPersian[0m"
     [33m→[0m { label: '[1m[31mPersian[0m', value: 'fa_IR' },
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mPolish[0m"
     [33m→[0m { label: '[1m[31mPolish[0m', value: 'pl_PL' },
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mPortuguese[0m"
     [33m→[0m { label: '[1m[31mPortuguese[0m', value: 'pt_BR' },
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mPunjabi[0m"
     [33m→[0m { label: '[1m[31mPunjabi[0m', value: 'pa' },
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mRomanian[0m"
     [33m→[0m { label: '[1m[31mRomanian[0m', value: 'ro' },
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mRussian[0m"
     [33m→[0m { label: '[1m[31mRussian[0m', value: 'ru' },
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mSerbian[0m"
     [33m→[0m { label: '[1m[31mSerbian[0m', value: 'sr_RS' },
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mSpanish[0m"
     [33m→[0m { label: '[1m[31mSpanish[0m', value: 'es' },
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mTamil[0m"
     [33m→[0m { label: '[1m[31mTamil[0m', value: 'ta' },
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mTelugu[0m"
     [33m→[0m { label: '[1m[31mTelugu[0m', value: 'te' },
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mTurkish[0m"
     [33m→[0m { label: '[1m[31mTurkish[0m', value: 'tr_TR' },
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mUkrainian[0m"
     [33m→[0m { label: '[1m[31mUkrainian[0m', value: 'uk_UA' },
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mUrdu[0m"
     [33m→[0m { label: '[1m[31mUrdu[0m', value: 'ur_PK' },
  [31m[Line 43][0m [[36mJS/TS String Literal[0m] Found: "[1mVietnamese[0m"
     [33m→[0m { label: '[1m[31mVietnamese[0m', value: 'vi' },
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mYiddish[0m"
     [33m→[0m { label: '[1m[31mYiddish[0m', value: 'yi' },

[1m[33m📄 File: frontend/core-ui/src/modules/settings/mail-config/components/MailConfigForm.tsx[0m
  [31m[Line 84][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect type[0m"
     [33m→[0m <Select.Value placeholder={'[1m[31mSelect type[0m'} />
  [31m[Line 207][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdate[0m"
     [33m→[0m {isLoading ? <IconLoader2 className="animate-spin" /> : '[1m[31mUpdate[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/mail-config/constants/formData.ts[0m
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mMail Service Name[0m"
     [33m→[0m label: '[1m[31mMail Service Name[0m',
  [31m[Line 47][0m [[36mJS/TS String Literal[0m] Found: "[1mPort[0m"
     [33m→[0m label: '[1m[31mPort[0m',
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mUsername[0m"
     [33m→[0m label: '[1m[31mUsername[0m',
  [31m[Line 61][0m [[36mJS/TS String Literal[0m] Found: "[1mPassword[0m"
     [33m→[0m label: '[1m[31mPassword[0m',
  [31m[Line 68][0m [[36mJS/TS String Literal[0m] Found: "[1mHost[0m"
     [33m→[0m label: '[1m[31mHost[0m',
  [31m[Line 77][0m [[36mJS/TS String Literal[0m] Found: "[1mAWS SES Access Key id[0m"
     [33m→[0m label: '[1m[31mAWS SES Access Key id[0m',
  [31m[Line 84][0m [[36mJS/TS String Literal[0m] Found: "[1mAWS SES Secret Access Key[0m"
     [33m→[0m label: '[1m[31mAWS SES Secret Access Key[0m',
  [31m[Line 91][0m [[36mJS/TS String Literal[0m] Found: "[1mAWS Region[0m"
     [33m→[0m label: '[1m[31mAWS Region[0m',
  [31m[Line 98][0m [[36mJS/TS String Literal[0m] Found: "[1mAWS SES Config Set[0m"
     [33m→[0m label: '[1m[31mAWS SES Config Set[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/oauth-clients/components/CreateOAuthClient.tsx[0m
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mOAuth client created successfully[0m"
     [33m→[0m title: '[1m[31mOAuth client created successfully[0m',
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 58][0m [[36mJSX Plain Text[0m] Found: "[1mCreate OAuth client[0m"
     [33m→[0m <IconPlus />
  [31m[Line 70][0m [[36mJSX Plain Text[0m] Found: "[1mCreate OAuth client[0m"
     [33m→[0m <Sheet.Title>[1m[31mCreate OAuth client[0m</Sheet.Title>
  [31m[Line 77][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant="secondary" onClick={() => setOpen(false)}>
  [31m[Line 81][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate client[0m"
     [33m→[0m {loading ? <Spinner /> : '[1m[31mCreate client[0m'}
  [31m[Line 92][0m [[36mJS/TS String Literal[0m] Found: "[1mOAuth client[0m"
     [33m→[0m clientName={revealedSecret?.clientName || '[1m[31mOAuth client[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/oauth-clients/components/EditOAuthClient.tsx[0m
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mOAuth client updated successfully[0m"
     [33m→[0m title: '[1m[31mOAuth client updated successfully[0m',
  [31m[Line 72][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 95][0m [[36mJSX Plain Text[0m] Found: "[1mEdit OAuth client[0m"
     [33m→[0m <Sheet.Title>[1m[31mEdit OAuth client[0m</Sheet.Title>
  [31m[Line 102][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant="secondary" onClick={onClose}>
  [31m[Line 106][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdate client[0m"
     [33m→[0m {loading ? <Spinner /> : '[1m[31mUpdate client[0m'}
  [31m[Line 117][0m [[36mJS/TS String Literal[0m] Found: "[1mOAuth client[0m"
     [33m→[0m clientName={revealedSecret?.clientName || '[1m[31mOAuth client[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/oauth-clients/components/OAuthClientForm.tsx[0m
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1mName[0m"
     [33m→[0m <Form.Label>[1m[31mName[0m</Form.Label>
  [31m[Line 30][0m [[36mJSX Plain Text[0m] Found: "[1mDescription[0m"
     [33m→[0m <Form.Label>[1m[31mDescription[0m</Form.Label>
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mShort description for this client[0m"
     [33m→[0m placeholder="[1m[31mShort description for this client[0m"
  [31m[Line 49][0m [[36mJSX Plain Text[0m] Found: "[1mLogo[0m"
     [33m→[0m <Form.Label>[1m[31mLogo[0m</Form.Label>
  [31m[Line 66][0m [[36mJSX Plain Text[0m] Found: "[1mClient type[0m"
     [33m→[0m <Form.Label>[1m[31mClient type[0m</Form.Label>
  [31m[Line 70][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose a type[0m"
     [33m→[0m <Select.Value placeholder="[1m[31mChoose a type[0m" />
  [31m[Line 74][0m [[36mJSX Plain Text[0m] Found: "[1mPublic[0m"
     [33m→[0m <Select.Item value="public">[1m[31mPublic[0m</Select.Item>
  [31m[Line 75][0m [[36mJSX Plain Text[0m] Found: "[1mConfidential[0m"
     [33m→[0m <Select.Item value="confidential">[1m[31mConfidential[0m</Select.Item>
  [31m[Line 78][0m [[36mJSX Plain Text[0m] Found: "[1mUse public for local tools and device flow. Confidential clients
              get a one-time secret during creation.[0m"
     [33m→[0m <Form.Description>
  [31m[Line 92][0m [[36mJSX Plain Text[0m] Found: "[1mRedirect URLs[0m"
     [33m→[0m <Form.Label>[1m[31mRedirect URLs[0m</Form.Label>
  [31m[Line 97][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd a callback URL[0m"
     [33m→[0m placeholder="[1m[31mAdd a callback URL[0m"
  [31m[Line 105][0m [[36mJSX Plain Text[0m] Found: "[1mOptional. Leave empty for device-flow or polling-only clients.[0m"
     [33m→[0m <Form.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/settings/oauth-clients/components/OAuthClientLogoUpload.tsx[0m
  [31m[Line 56][0m [[36mJS/TS String Literal[0m] Found: "[1mLogo[0m"
     [33m→[0m alt="[1m[31mLogo[0m"
  [31m[Line 74][0m [[36mJS/TS String Literal[0m] Found: "[1mChange[0m"
     [33m→[0m {value ? '[1m[31mChange[0m' : 'Upload'}
  [31m[Line 74][0m [[36mJS/TS String Literal[0m] Found: "[1mUpload[0m"
     [33m→[0m {value ? 'Change' : '[1m[31mUpload[0m'}
  [31m[Line 85][0m [[36mJSX Plain Text[0m] Found: "[1mRemove[0m"
     [33m→[0m <IconTrash className="size-4" />
  [31m[Line 91][0m [[36mJSX Plain Text[0m] Found: "[1mPNG, JPG, SVG — max 2 MB[0m"
     [33m→[0m <p className="text-xs text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/settings/oauth-clients/components/OAuthClientSecretDialog.tsx[0m
  [31m[Line 26][0m [[36mJS/TS String Literal[0m] Found: "[1mClient secret copied to clipboard[0m"
     [33m→[0m title: '[1m[31mClient secret copied to clipboard[0m',
  [31m[Line 37][0m [[36mJSX Plain Text[0m] Found: "[1mClient secret created[0m"
     [33m→[0m <IconKey size={18} />
  [31m[Line 40][0m [[36mJSX Plain Text[0m] Found: "[1mSave this secret for[0m"
     [33m→[0m <Dialog.Description>
  [31m[Line 41][0m [[36mJSX Plain Text[0m] Found: "[1m. It will not be shown again after
            closing this dialog.[0m"
     [33m→[0m Save this secret for {clientName}. It will not be shown again after
  [31m[Line 48][0m [[36mJSX Plain Text[0m] Found: "[1mKeep this secret in a secure server-side store before you continue.[0m"
     [33m→[0m <div className="rounded-md border bg-muted/40 p-3 text-sm text-muted-foreground">
  [31m[Line 54][0m [[36mJSX Plain Text[0m] Found: "[1mClose[0m"
     [33m→[0m <Button variant="secondary" onClick={() => onOpenChange(false)}>
  [31m[Line 59][0m [[36mJS/TS String Literal[0m] Found: "[1mCopied[0m"
     [33m→[0m {copied ? '[1m[31mCopied[0m' : 'Copy secret'}
  [31m[Line 59][0m [[36mJS/TS String Literal[0m] Found: "[1mCopy secret[0m"
     [33m→[0m {copied ? 'Copied' : '[1m[31mCopy secret[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/oauth-clients/components/OAuthClientsCommandBar.tsx[0m
  [31m[Line 24][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to remove the selected ([0m"
     [33m→[0m message: `[1m[31mAre you sure you want to remove the selected ([0m${ids.length})?`,
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 58][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/oauth-clients/components/OAuthClientsHeader.tsx[0m
  [31m[Line 16][0m [[36mJSX Plain Text[0m] Found: "[1mOAuth clients[0m"
     [33m→[0m <IconApi />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/oauth-clients/components/table/OAuthClientsMoreColumn.tsx[0m
  [31m[Line 32][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete "[0m${name}"?`,
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 48][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to revoke "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to revoke "[0m${name}"?`,
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mOAuth client revoked successfully[0m"
     [33m→[0m title: '[1m[31mOAuth client revoked successfully[0m',
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 80][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m /> Edit
  [31m[Line 84][0m [[36mJSX Plain Text[0m] Found: "[1mRevoke[0m"
     [33m→[0m <IconLock /> [1m[31mRevoke[0m
  [31m[Line 88][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash /> [1m[31mDelete[0m

[1m[33m📄 File: frontend/core-ui/src/modules/settings/oauth-clients/components/table/OAuthClientsSettingsColumns.tsx[0m
  [31m[Line 14][0m [[36mJS/TS String Literal[0m] Found: "[1mClient ID copied to clipboard[0m"
     [33m→[0m toast({ variant: 'success', title: '[1m[31mClient ID copied to clipboard[0m' });
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mCopy client ID[0m"
     [33m→[0m title="[1m[31mCopy client ID[0m"
  [31m[Line 43][0m [[36mJS/TS String Literal[0m] Found: "[1mName[0m"
     [33m→[0m header: '[1m[31mName[0m',
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mClient ID[0m"
     [33m→[0m header: '[1m[31mClient ID[0m',
  [31m[Line 57][0m [[36mJS/TS String Literal[0m] Found: "[1mType[0m"
     [33m→[0m header: '[1m[31mType[0m',
  [31m[Line 67][0m [[36mJS/TS String Literal[0m] Found: "[1mStatus[0m"
     [33m→[0m header: '[1m[31mStatus[0m',
  [31m[Line 83][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated[0m"
     [33m→[0m header: '[1m[31mCreated[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/oauth-clients/schema.ts[0m
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m name: z.string().min(1, '[1m[31mName is required[0m'),

[1m[33m📄 File: frontend/core-ui/src/modules/settings/permissions/components/MemberPermission.tsx[0m
  [31m[Line 57][0m [[36mJS/TS String Literal[0m] Found: "[1mPermission groups updated[0m"
     [33m→[0m title: '[1m[31mPermission groups updated[0m',
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mPermission groups updated successfully[0m"
     [33m→[0m description: '[1m[31mPermission groups updated successfully[0m',
  [31m[Line 64][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 147][0m [[36mJSX Plain Text[0m] Found: "[1mCustom Permission Groups[0m"
     [33m→[0m <Collapsible.TriggerIcon />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/permissions/components/PermissionGroupDetails.tsx[0m
  [31m[Line 82][0m [[36mJSX Plain Text[0m] Found: "[1mView[0m"
     [33m→[0m <Button variant="ghost" size="sm">
  [31m[Line 101][0m [[36mJSX Plain Text[0m] Found: "[1mDefault[0m"
     [33m→[0m <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
  [31m[Line 124][0m [[36mJSX Plain Text[0m] Found: "[1mNo permissions configured[0m"
     [33m→[0m <p className="text-muted-foreground font-medium">
  [31m[Line 127][0m [[36mJSX Plain Text[0m] Found: "[1mThis group has no module permissions assigned[0m"
     [33m→[0m <p className="text-sm text-muted-foreground/70 mt-1">
  [31m[Line 223][0m [[36mJS/TS String Literal[0m] Found: "[1mYes[0m"
     [33m→[0m {hasPermission ? '[1m[31mYes[0m' : 'No'}
  [31m[Line 223][0m [[36mJS/TS String Literal[0m] Found: "[1mNo[0m"
     [33m→[0m {hasPermission ? 'Yes' : '[1m[31mNo[0m'}
  [31m[Line 246][0m [[36mJSX Plain Text[0m] Found: "[1mClose[0m"
     [33m→[0m <Button variant="secondary" onClick={() => setOpen(false)}>

[1m[33m📄 File: frontend/core-ui/src/modules/settings/permissions/components/PermissionGroups.tsx[0m
  [31m[Line 45][0m [[36mJSX Plain Text[0m] Found: "[1mName[0m"
     [33m→[0m <Table.Head>[1m[31mName[0m</Table.Head>
  [31m[Line 46][0m [[36mJSX Plain Text[0m] Found: "[1mDescription[0m"
     [33m→[0m <Table.Head>[1m[31mDescription[0m</Table.Head>
  [31m[Line 79][0m [[36mJSX Plain Text[0m] Found: "[1mName[0m"
     [33m→[0m <Table.Head>[1m[31mName[0m</Table.Head>
  [31m[Line 80][0m [[36mJSX Plain Text[0m] Found: "[1mDescription[0m"
     [33m→[0m <Table.Head>[1m[31mDescription[0m</Table.Head>
  [31m[Line 93][0m [[36mJSX Plain Text[0m] Found: "[1mPlugin[0m"
     [33m→[0m <span className="flex items-center gap-2">
  [31m[Line 135][0m [[36mJSX Plain Text[0m] Found: "[1mView[0m"
     [33m→[0m <IconEye size={16} />
  [31m[Line 157][0m [[36mJSX Plain Text[0m] Found: "[1mCustom Groups[0m"
     [33m→[0m <span className="flex items-center gap-2">[1m[31mCustom Groups[0m</span>
  [31m[Line 176][0m [[36mJSX Plain Text[0m] Found: "[1mNo custom groups yet[0m"
     [33m→[0m <p className="text-muted-foreground mb-4">
  [31m[Line 221][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete "[0m${group.name}"?`,
  [31m[Line 226][0m [[36mJS/TS String Literal[0m] Found: "[1mPermission group deleted[0m"
     [33m→[0m toast({ title: '[1m[31mPermission group deleted[0m', variant: 'success' });
  [31m[Line 230][0m [[36mJS/TS String Literal[0m] Found: "[1mError deleting permission group[0m"
     [33m→[0m title: '[1m[31mError deleting permission group[0m',
  [31m[Line 255][0m [[36mJSX Plain Text[0m] Found: "[1mView[0m"
     [33m→[0m <IconEye size={16} />
  [31m[Line 266][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m size={16} />
  [31m[Line 276][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash size={16} />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/permissions/components/form/PermissionGroupAdd.tsx[0m
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mPermission group added[0m"
     [33m→[0m toast({ title: '[1m[31mPermission group added[0m', variant: 'success' });
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mError adding permission group[0m"
     [33m→[0m title: '[1m[31mError adding permission group[0m',
  [31m[Line 55][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd Custom Group[0m"
     [33m→[0m <Button variant="secondary">{text || '[1m[31mAdd Custom Group[0m'}</Button>
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mEdit Group[0m"
     [33m→[0m title={defaultValues?.name ? '[1m[31mEdit Group[0m' : 'Add Custom Group'}
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd Custom Group[0m"
     [33m→[0m title={defaultValues?.name ? 'Edit Group' : '[1m[31mAdd Custom Group[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/permissions/components/form/PermissionGroupEdit.tsx[0m
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mPermission group updated[0m"
     [33m→[0m toast({ title: '[1m[31mPermission group updated[0m', variant: 'success' });
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mError updating permission group[0m"
     [33m→[0m title: '[1m[31mError updating permission group[0m',
  [31m[Line 57][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Button variant="ghost" size="sm">
  [31m[Line 63][0m [[36mJS/TS String Literal[0m] Found: "[1mEdit Permission Group[0m"
     [33m→[0m <FocusSheet.Header title="[1m[31mEdit Permission Group[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/permissions/components/form/PermissionGroupForm.tsx[0m
  [31m[Line 52][0m [[36mJSX Plain Text[0m] Found: "[1mName[0m"
     [33m→[0m <Form.Label>[1m[31mName[0m</Form.Label>
  [31m[Line 56][0m [[36mJS/TS String Literal[0m] Found: "[1mGroup name[0m"
     [33m→[0m placeholder="[1m[31mGroup name[0m"
  [31m[Line 69][0m [[36mJSX Plain Text[0m] Found: "[1mDescription[0m"
     [33m→[0m <Form.Label>[1m[31mDescription[0m</Form.Label>
  [31m[Line 73][0m [[36mJS/TS String Literal[0m] Found: "[1mDescription[0m"
     [33m→[0m placeholder="[1m[31mDescription[0m"
  [31m[Line 88][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button type="button" variant="ghost" onClick={on[1m[31mCancel[0m}>
  [31m[Line 94][0m [[36mJS/TS String Literal[0m] Found: "[1mSaving...[0m"
     [33m→[0m ? '[1m[31mSaving...[0m'
  [31m[Line 95][0m [[36mJS/TS String Literal[0m] Found: "[1mCreating...[0m"
     [33m→[0m : '[1m[31mCreating...[0m'
  [31m[Line 97][0m [[36mJS/TS String Literal[0m] Found: "[1mSave Changes[0m"
     [33m→[0m ? '[1m[31mSave Changes[0m'
  [31m[Line 98][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate Group[0m"
     [33m→[0m : '[1m[31mCreate Group[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/permissions/components/form/PermissionModulesForm.tsx[0m
  [31m[Line 207][0m [[36mJSX Plain Text[0m] Found: "[1mPlugins[0m"
     [33m→[0m <Sidebar.GroupLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 px-2">
  [31m[Line 280][0m [[36mJSX Plain Text[0m] Found: "[1mAccess Scope[0m"
     [33m→[0m <Label className="text-sm font-medium min-w-[80px]">
  [31m[Line 313][0m [[36mJSX Plain Text[0m] Found: "[1mAllowed Actions[0m"
     [33m→[0m <Label className="text-sm font-medium">
  [31m[Line 369][0m [[36mJSX Plain Text[0m] Found: "[1mSelect a plugin[0m"
     [33m→[0m <h4 className="text-base font-semibold text-foreground mb-2">
  [31m[Line 372][0m [[36mJSX Plain Text[0m] Found: "[1mChoose a plugin from the sidebar to configure its module
                permissions and access controls[0m"
     [33m→[0m <p className="text-sm text-muted-foreground max-w-[280px]">

[1m[33m📄 File: frontend/core-ui/src/modules/settings/permissions/schemas/permissionGroup.ts[0m
  [31m[Line 6][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m name: z.string().min(1, '[1m[31mName is required[0m'),
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mPlugin is required[0m"
     [33m→[0m plugin: z.string().min(1, '[1m[31mPlugin is required[0m'),
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mModule is required[0m"
     [33m→[0m module: z.string().min(1, '[1m[31mModule is required[0m'),
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mActions are required[0m"
     [33m→[0m actions: z.array(z.string()).min(1, '[1m[31mActions are required[0m'),
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect at least one module permission[0m"
     [33m→[0m .min(1, '[1m[31mSelect at least one module permission[0m'),

[1m[33m📄 File: frontend/core-ui/src/modules/settings/profile/components/ProfileForm.tsx[0m
  [31m[Line 106][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter email[0m"
     [33m→[0m placeholder: '[1m[31mEnter email[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/profile/components/fields/LinkFields.tsx[0m
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mToggle bold[0m"
     [33m→[0m aria-label="[1m[31mToggle bold[0m"
  [31m[Line 66][0m [[36mTemplate Literal String[0m] Found: "[1mEnter[0m"
     [33m→[0m placeholder: `[1m[31mEnter[0m ${currentLink}`,

[1m[33m📄 File: frontend/core-ui/src/modules/settings/profile/constants/profileFields.ts[0m
  [31m[Line 62][0m [[36mJS/TS String Literal[0m] Found: "[1mFacebook[0m"
     [33m→[0m fieldLabel: '[1m[31mFacebook[0m',
  [31m[Line 68][0m [[36mJS/TS String Literal[0m] Found: "[1mTwitter[0m"
     [33m→[0m fieldLabel: '[1m[31mTwitter[0m',
  [31m[Line 74][0m [[36mJS/TS String Literal[0m] Found: "[1mWebsite[0m"
     [33m→[0m fieldLabel: '[1m[31mWebsite[0m',
  [31m[Line 80][0m [[36mJS/TS String Literal[0m] Found: "[1mDiscord[0m"
     [33m→[0m fieldLabel: '[1m[31mDiscord[0m',
  [31m[Line 86][0m [[36mJS/TS String Literal[0m] Found: "[1mGitHub[0m"
     [33m→[0m fieldLabel: '[1m[31mGitHub[0m',
  [31m[Line 92][0m [[36mJS/TS String Literal[0m] Found: "[1mInstagram[0m"
     [33m→[0m fieldLabel: '[1m[31mInstagram[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/profile/hooks/useProfile.ts[0m
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mAre you sure you want to update the profile?[0m"
     [33m→[0m message: '[1m[31mAre you sure you want to update the profile?[0m',
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccessfully updated profile[0m"
     [33m→[0m title: '[1m[31mSuccessfully updated profile[0m',
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mError updating profile[0m"
     [33m→[0m title: '[1m[31mError updating profile[0m',
  [31m[Line 61][0m [[36mJS/TS String Literal[0m] Found: "[1mAn unexpected error occurred.[0m"
     [33m→[0m description: error.message || '[1m[31mAn unexpected error occurred.[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/profile/hooks/useProfileForm.ts[0m
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid Facebook URL[0m"
     [33m→[0m message: '[1m[31mInvalid Facebook URL[0m',
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid Twitter/X URL[0m"
     [33m→[0m message: '[1m[31mInvalid Twitter/X URL[0m',
  [31m[Line 55][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid website URL[0m"
     [33m→[0m .url({ message: '[1m[31mInvalid website URL[0m' })
  [31m[Line 67][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter a valid Discord profile URL or User ID[0m"
     [33m→[0m message: '[1m[31mEnter a valid Discord profile URL or User ID[0m',
  [31m[Line 75][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid GitHub URL[0m"
     [33m→[0m message: '[1m[31mInvalid GitHub URL[0m',
  [31m[Line 83][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid Instagram URL[0m"
     [33m→[0m message: '[1m[31mInvalid Instagram URL[0m',
  [31m[Line 89][0m [[36mJS/TS String Literal[0m] Found: "[1mUsername must be at least 3 characters[0m"
     [33m→[0m username: z.string().min(3, '[1m[31mUsername must be at least 3 characters[0m'),
  [31m[Line 90][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail must be a valid email[0m"
     [33m→[0m email: z.string().trim().email('[1m[31mEmail must be a valid email[0m'),

[1m[33m📄 File: frontend/core-ui/src/modules/settings/security/components/ChangePasswordForm.tsx[0m
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mPassword has changed successfully[0m"
     [33m→[0m title: '[1m[31mPassword has changed successfully[0m',
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mError changing password[0m"
     [33m→[0m title: '[1m[31mError changing password[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/security/components/PasswordStrength.tsx[0m
  [31m[Line 82][0m [[36mJS/TS String Literal[0m] Found: "[1mPassword requirements[0m"
     [33m→[0m <ul className="space-y-1.5" aria-label="[1m[31mPassword requirements[0m">
  [31m[Line 121][0m [[36mJS/TS String Literal[0m] Found: "[1m - Requirement met[0m"
     [33m→[0m {req.met ? '[1m[31m - Requirement met[0m' : ' - Requirement not met'}
  [31m[Line 121][0m [[36mJS/TS String Literal[0m] Found: "[1m - Requirement not met[0m"
     [33m→[0m {req.met ? ' - Requirement met' : '[1m[31m - Requirement not met[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/security/components/fields/password-field.tsx[0m
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mHide password[0m"
     [33m→[0m aria-label={isVisible ? '[1m[31mHide password[0m' : 'Show password'}
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mShow password[0m"
     [33m→[0m aria-label={isVisible ? 'Hide password' : '[1m[31mShow password[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/security/schema.ts[0m
  [31m[Line 15][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least 8 characters[0m"
     [33m→[0m .refine((val) => /.{8,}/.test(val), { message: '[1m[31mAt least 8 characters[0m' })
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least 1 number[0m"
     [33m→[0m .refine((val) => /[0-9]/.test(val), { message: '[1m[31mAt least 1 number[0m' })
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least 1 lowercase letter[0m"
     [33m→[0m message: '[1m[31mAt least 1 lowercase letter[0m',
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least 1 uppercase letter[0m"
     [33m→[0m message: '[1m[31mAt least 1 uppercase letter[0m',
  [31m[Line 26][0m [[36mJS/TS String Literal[0m] Found: "[1mPasswords must match[0m"
     [33m→[0m message: '[1m[31mPasswords must match[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/Structure.tsx[0m
  [31m[Line 68][0m [[36mJSX Plain Text[0m] Found: "[1mStructure[0m"
     [33m→[0m <h2 className="font-semibold text-lg mt-4 mb-12 px-4">[1m[31mStructure[0m</h2>
  [31m[Line 79][0m [[36mJS/TS String Literal[0m] Found: "[1mName[0m"
     [33m→[0m <Form.Label>{'[1m[31mName[0m'}</Form.Label>
  [31m[Line 109][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect supervisor[0m"
     [33m→[0m placeholder="[1m[31mSelect supervisor[0m"
  [31m[Line 133][0m [[36mJS/TS String Literal[0m] Found: "[1mPhone number[0m"
     [33m→[0m <Form.Label>{'[1m[31mPhone number[0m'}</Form.Label>
  [31m[Line 146][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail[0m"
     [33m→[0m <Form.Label>{'[1m[31mEmail[0m'}</Form.Label>
  [31m[Line 185][0m [[36mJSX Plain Text[0m] Found: "[1mUpdate[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/StructureSettingsBreadcrumb.tsx[0m
  [31m[Line 8][0m [[36mJSX Plain Text[0m] Found: "[1mStructure[0m"
     [33m→[0m <IconChartPie2 className="w-4 h-4 text-accent-foreground" />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/TimePicker.tsx[0m
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mhh:mm a[0m"
     [33m→[0m const [inputValue, setInputValue] = useState(format(value, '[1m[31mhh:mm a[0m'));
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mhh:mm a[0m"
     [33m→[0m const parsed = parse(val, '[1m[31mhh:mm a[0m', new Date());
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid time[0m"
     [33m→[0m setError('[1m[31mInvalid time[0m');
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1m00:00 aa[0m"
     [33m→[0m mask: '[1m[31m00:00 aa[0m',
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mhh:mm a[0m"
     [33m→[0m placeholder={format(new Date(), '[1m[31mhh:mm a[0m')}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/branches/BranchColumns.tsx[0m
  [31m[Line 180][0m [[36mJS/TS String Literal[0m] Found: "[1mteam member count[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mteam member count[0m" />,

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/branches/BranchForm.tsx[0m
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mTitle[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mTitle[0m" />
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mCode[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mCode[0m" />
  [31m[Line 47][0m [[36mJS/TS String Literal[0m] Found: "[1mProvide an address[0m"
     [33m→[0m <Textarea {...field} placeholder="[1m[31mProvide an address[0m" />
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mSupervisor[0m"
     [33m→[0m <Form.Label>{'[1m[31mSupervisor[0m'}</Form.Label>
  [31m[Line 72][0m [[36mJS/TS String Literal[0m] Found: "[1mParent[0m"
     [33m→[0m <Form.Label>{'[1m[31mParent[0m'}</Form.Label>
  [31m[Line 86][0m [[36mJS/TS String Literal[0m] Found: "[1mTeam members[0m"
     [33m→[0m <Form.Label>{'[1m[31mTeam members[0m'}</Form.Label>
  [31m[Line 101][0m [[36mJS/TS String Literal[0m] Found: "[1mPhone number[0m"
     [33m→[0m <Form.Label>{'[1m[31mPhone number[0m'}</Form.Label>
  [31m[Line 129][0m [[36mJSX Plain Text[0m] Found: "[1mLinks[0m"
     [33m→[0m <Form.Label>[1m[31mLinks[0m</Form.Label>
  [31m[Line 153][0m [[36mJS/TS String Literal[0m] Found: "[1mRadius[0m"
     [33m→[0m placeholder="[1m[31mRadius[0m"
  [31m[Line 167][0m [[36mJS/TS String Literal[0m] Found: "[1mLatitude[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mLatitude[0m" />
  [31m[Line 180][0m [[36mJS/TS String Literal[0m] Found: "[1mLongitude[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mLongitude[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/branches/BranchesCommandBar.tsx[0m
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mAre you sure you want to remove the selected?[0m"
     [33m→[0m message: '[1m[31mAre you sure you want to remove the selected?[0m',
  [31m[Line 49][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/branches/BranchesFilter.tsx[0m
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mBy Parent[0m"
     [33m→[0m label="[1m[31mBy Parent[0m"
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mBy Parent[0m"
     [33m→[0m label="[1m[31mBy Parent[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/branches/BranchesMoreColumn.tsx[0m
  [31m[Line 32][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete "[0m${title}"?`,
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 63][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m /> Edit
  [31m[Line 74][0m [[36mJSX Plain Text[0m] Found: "[1mWorking Hours[0m"
     [33m→[0m <IconClock /> [1m[31mWorking Hours[0m
  [31m[Line 83][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash /> [1m[31mDelete[0m

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/branches/BranchesTotalCount.tsx[0m
  [31m[Line 10][0m [[36mTemplate Literal String[0m] Found: "[1mrecords found[0m"
     [33m→[0m ? `${totalCount} [1m[31mrecords found[0m`

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/branches/CreateBranch.tsx[0m
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess![0m"
     [33m→[0m title: '[1m[31mSuccess![0m',
  [31m[Line 62][0m [[36mJS/TS String Literal[0m] Found: "[1mBranch created successfully[0m"
     [33m→[0m description: '[1m[31mBranch created successfully[0m',
  [31m[Line 69][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 82][0m [[36mJSX Plain Text[0m] Found: "[1mCreate Branch[0m"
     [33m→[0m <IconPlus /> [1m[31mCreate Branch[0m
  [31m[Line 100][0m [[36mJSX Plain Text[0m] Found: "[1mCreate branch[0m"
     [33m→[0m <IconGitBranch size={16} />
  [31m[Line 109][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant={'ghost'} onClick={() => setOpen(false)}>
  [31m[Line 113][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate[0m"
     [33m→[0m {loading ? <Spinner /> : '[1m[31mCreate[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/branches/details/BranchEdit.tsx[0m
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess![0m"
     [33m→[0m title: '[1m[31mSuccess![0m',
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mBranch updated successfully[0m"
     [33m→[0m description: '[1m[31mBranch updated successfully[0m',
  [31m[Line 57][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 99][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant={'ghost'} onClick={() => setOpen(null)}>
  [31m[Line 104][0m [[36mJS/TS String Literal[0m] Found: "[1mSave[0m"
     [33m→[0m {isLoading ? <Spinner /> : '[1m[31mSave[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/branches/details/BranchWorkingHoursSheet.tsx[0m
  [31m[Line 104][0m [[36mJSX Plain Text[0m] Found: "[1mSetup branch working hours[0m"
     [33m→[0m <Sheet.Title>[1m[31mSetup branch working hours[0m</Sheet.Title>
  [31m[Line 118][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant={'secondary'} onClick={() => setOpen(null)}>
  [31m[Line 126][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m >
  [31m[Line 160][0m [[36mJSX Plain Text[0m] Found: "[1mNot working on this day[0m"
     [33m→[0m <span className="font-normal text-sm h-8 text-accent-foreground flex items-center">
  [31m[Line 211][0m [[36mJSX Plain Text[0m] Found: "[1mLunch[0m"
     [33m→[0m <legend className="font-medium text-sm text-accent-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/departments/CreateDepartment.tsx[0m
  [31m[Line 67][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess![0m"
     [33m→[0m title: '[1m[31mSuccess![0m',
  [31m[Line 69][0m [[36mJS/TS String Literal[0m] Found: "[1mDepartment created successfully[0m"
     [33m→[0m description: '[1m[31mDepartment created successfully[0m',
  [31m[Line 76][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 89][0m [[36mJSX Plain Text[0m] Found: "[1mCreate Department[0m"
     [33m→[0m <IconPlus /> [1m[31mCreate Department[0m
  [31m[Line 107][0m [[36mJSX Plain Text[0m] Found: "[1mCreate department[0m"
     [33m→[0m <IconFolder size={16} />
  [31m[Line 116][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant={'ghost'} onClick={() => setOpen(false)}>
  [31m[Line 120][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate[0m"
     [33m→[0m {loading ? <Spinner /> : '[1m[31mCreate[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/departments/DepartmentColumns.tsx[0m
  [31m[Line 117][0m [[36mTemplate Literal String[0m] Found: "[1mDepartmentsPage.[0m"
     [33m→[0m scope={`[1m[31mDepartmentsPage.[0m${_id}`}
  [31m[Line 136][0m [[36mJS/TS String Literal[0m] Found: "[1mteam member count[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mteam member count[0m" />,

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/departments/DepartmentForm.tsx[0m
  [31m[Line 18][0m [[36mJS/TS String Literal[0m] Found: "[1mTitle[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mTitle[0m" />
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mCode[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mCode[0m" />
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mDescription[0m"
     [33m→[0m <Textarea {...field} placeholder="[1m[31mDescription[0m" />
  [31m[Line 55][0m [[36mJS/TS String Literal[0m] Found: "[1mSupervisor[0m"
     [33m→[0m <Form.Label>{'[1m[31mSupervisor[0m'}</Form.Label>
  [31m[Line 69][0m [[36mJS/TS String Literal[0m] Found: "[1mParent[0m"
     [33m→[0m <Form.Label>{'[1m[31mParent[0m'}</Form.Label>
  [31m[Line 86][0m [[36mJS/TS String Literal[0m] Found: "[1mTeam members[0m"
     [33m→[0m <Form.Label>{'[1m[31mTeam members[0m'}</Form.Label>

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/departments/DepartmentsCommandBar.tsx[0m
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mAre you sure you want to remove the selected?[0m"
     [33m→[0m message: '[1m[31mAre you sure you want to remove the selected?[0m',
  [31m[Line 49][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/departments/DepartmentsFilter.tsx[0m
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mBy Parent[0m"
     [33m→[0m label="[1m[31mBy Parent[0m"
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mBy Parent[0m"
     [33m→[0m label="[1m[31mBy Parent[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/departments/DepartmentsMoreColumn.tsx[0m
  [31m[Line 34][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete "[0m${title}"?`,
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 66][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m /> Edit
  [31m[Line 77][0m [[36mJSX Plain Text[0m] Found: "[1mWorking Hours[0m"
     [33m→[0m <IconClock /> [1m[31mWorking Hours[0m
  [31m[Line 86][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash /> [1m[31mDelete[0m

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/departments/DepartmentsTotalCount.tsx[0m
  [31m[Line 10][0m [[36mTemplate Literal String[0m] Found: "[1mrecords found[0m"
     [33m→[0m ? `${totalCount} [1m[31mrecords found[0m`

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/departments/detail/DepartmentEdit.tsx[0m
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess![0m"
     [33m→[0m title: '[1m[31mSuccess![0m',
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mDepartment updated successfully[0m"
     [33m→[0m description: '[1m[31mDepartment updated successfully[0m',
  [31m[Line 57][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 99][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant={'ghost'} onClick={() => setOpen(null)}>
  [31m[Line 104][0m [[36mJS/TS String Literal[0m] Found: "[1mSave[0m"
     [33m→[0m {isLoading ? <Spinner /> : '[1m[31mSave[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/departments/detail/DepartmentWorkingHoursSheet.tsx[0m
  [31m[Line 104][0m [[36mJSX Plain Text[0m] Found: "[1mSetup department working hours[0m"
     [33m→[0m <Sheet.Title>[1m[31mSetup department working hours[0m</Sheet.Title>
  [31m[Line 118][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant={'secondary'} onClick={() => setOpen(null)}>
  [31m[Line 126][0m [[36mJSX Plain Text[0m] Found: "[1mSave[0m"
     [33m→[0m >
  [31m[Line 160][0m [[36mJSX Plain Text[0m] Found: "[1mNot working on this day[0m"
     [33m→[0m <span className="font-normal text-sm h-8 text-accent-foreground flex items-center">
  [31m[Line 211][0m [[36mJSX Plain Text[0m] Found: "[1mLunch[0m"
     [33m→[0m <legend className="font-medium text-sm text-accent-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/positions/CreatePosition.tsx[0m
  [31m[Line 66][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess![0m"
     [33m→[0m title: '[1m[31mSuccess![0m',
  [31m[Line 68][0m [[36mJS/TS String Literal[0m] Found: "[1mPosition created successfully[0m"
     [33m→[0m description: '[1m[31mPosition created successfully[0m',
  [31m[Line 75][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 88][0m [[36mJSX Plain Text[0m] Found: "[1mCreate Position[0m"
     [33m→[0m <IconPlus /> [1m[31mCreate Position[0m
  [31m[Line 106][0m [[36mJSX Plain Text[0m] Found: "[1mCreate position[0m"
     [33m→[0m <IconBriefcase size={16} />
  [31m[Line 115][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant={'ghost'} onClick={() => setOpen(false)}>
  [31m[Line 119][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate[0m"
     [33m→[0m {loading ? <Spinner /> : '[1m[31mCreate[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/positions/PositionForm.tsx[0m
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mTitle[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mTitle[0m" />
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mCode[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mCode[0m" />
  [31m[Line 47][0m [[36mJS/TS String Literal[0m] Found: "[1mTeam members[0m"
     [33m→[0m <Form.Label>{'[1m[31mTeam members[0m'}</Form.Label>
  [31m[Line 65][0m [[36mJSX Plain Text[0m] Found: "[1mParent position[0m"
     [33m→[0m <Form.Label>[1m[31mParent position[0m</Form.Label>

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/positions/PositionsColumns.tsx[0m
  [31m[Line 158][0m [[36mJS/TS String Literal[0m] Found: "[1mteam member count[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mteam member count[0m" />,

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/positions/PositionsCommandBar.tsx[0m
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mAre you sure you want to remove the selected?[0m"
     [33m→[0m message: '[1m[31mAre you sure you want to remove the selected?[0m',
  [31m[Line 49][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/positions/PositionsFilter.tsx[0m
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mBy Parent[0m"
     [33m→[0m label="[1m[31mBy Parent[0m"
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mBy Parent[0m"
     [33m→[0m label="[1m[31mBy Parent[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/positions/PositionsMoreColumn.tsx[0m
  [31m[Line 31][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete "[0m${title}" position?`,
  [31m[Line 31][0m [[36mTemplate Literal String[0m] Found: "[1m" position?[0m"
     [33m→[0m message: `Are you sure you want to delete "${title}[1m[31m" position?[0m`,
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 63][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m /> Edit
  [31m[Line 72][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash /> [1m[31mDelete[0m

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/positions/PositionsTotalCount.tsx[0m
  [31m[Line 10][0m [[36mTemplate Literal String[0m] Found: "[1mrecords found[0m"
     [33m→[0m ? `${totalCount} [1m[31mrecords found[0m`

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/positions/detail/PositionEdit.tsx[0m
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess![0m"
     [33m→[0m title: '[1m[31mSuccess![0m',
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mPosition updated successfully[0m"
     [33m→[0m description: '[1m[31mPosition updated successfully[0m',
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 100][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant={'ghost'} onClick={() => setOpen(null)}>
  [31m[Line 105][0m [[36mJS/TS String Literal[0m] Found: "[1mSave[0m"
     [33m→[0m {isLoading ? <Spinner /> : '[1m[31mSave[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/units/CreateUnit.tsx[0m
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess![0m"
     [33m→[0m title: '[1m[31mSuccess![0m',
  [31m[Line 62][0m [[36mJS/TS String Literal[0m] Found: "[1mUnit created successfully[0m"
     [33m→[0m description: '[1m[31mUnit created successfully[0m',
  [31m[Line 69][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 82][0m [[36mJSX Plain Text[0m] Found: "[1mCreate Unit[0m"
     [33m→[0m <IconPlus /> [1m[31mCreate Unit[0m
  [31m[Line 100][0m [[36mJSX Plain Text[0m] Found: "[1mCreate unit[0m"
     [33m→[0m <IconUsersGroup size={16} />
  [31m[Line 109][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant={'ghost'} onClick={() => setOpen(false)}>
  [31m[Line 113][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate[0m"
     [33m→[0m {loading ? <Spinner /> : '[1m[31mCreate[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/units/UnitForm.tsx[0m
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mTitle[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mTitle[0m" />
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mCode[0m"
     [33m→[0m <Input {...field} placeholder="[1m[31mCode[0m" />
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mDescription[0m"
     [33m→[0m <Textarea {...field} placeholder="[1m[31mDescription[0m" />
  [31m[Line 59][0m [[36mJS/TS String Literal[0m] Found: "[1mSupervisor[0m"
     [33m→[0m <Form.Label>{'[1m[31mSupervisor[0m'}</Form.Label>
  [31m[Line 73][0m [[36mJS/TS String Literal[0m] Found: "[1mDepartment[0m"
     [33m→[0m <Form.Label>{'[1m[31mDepartment[0m'}</Form.Label>
  [31m[Line 90][0m [[36mJS/TS String Literal[0m] Found: "[1mTeam members[0m"
     [33m→[0m <Form.Label>{'[1m[31mTeam members[0m'}</Form.Label>

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/units/UnitsColumns.tsx[0m
  [31m[Line 141][0m [[36mTemplate Literal String[0m] Found: "[1mUnitsPage.[0m"
     [33m→[0m scope={`[1m[31mUnitsPage.[0m${_id}.Supervisor`}
  [31m[Line 177][0m [[36mJS/TS String Literal[0m] Found: "[1mteam member count[0m"
     [33m→[0m header: () => <RecordTable.InlineHead label="[1m[31mteam member count[0m" />,

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/units/UnitsCommandBar.tsx[0m
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mAre you sure you want to remove the selected?[0m"
     [33m→[0m message: '[1m[31mAre you sure you want to remove the selected?[0m',
  [31m[Line 49][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/units/UnitsMoreColumn.tsx[0m
  [31m[Line 31][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to remove "[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to remove "[0m${title}"?`,
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 63][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m /> Edit
  [31m[Line 72][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash /> [1m[31mDelete[0m

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/units/UnitsTotalCount.tsx[0m
  [31m[Line 10][0m [[36mTemplate Literal String[0m] Found: "[1mrecords found[0m"
     [33m→[0m ? `${totalCount} [1m[31mrecords found[0m`

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/components/units/detail/UnitEdit.tsx[0m
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess![0m"
     [33m→[0m title: '[1m[31mSuccess![0m',
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mUnit updated successfully[0m"
     [33m→[0m description: '[1m[31mUnit updated successfully[0m',
  [31m[Line 57][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 99][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m <Button variant={'ghost'} onClick={() => setOpen(null)}>
  [31m[Line 104][0m [[36mJS/TS String Literal[0m] Found: "[1mSave[0m"
     [33m→[0m {isLoading ? <Spinner /> : '[1m[31mSave[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/constants/structure-routes.ts[0m
  [31m[Line 2][0m [[36mJS/TS String Literal[0m] Found: "[1mStructure[0m"
     [33m→[0m '/settings/structures': '[1m[31mStructure[0m',
  [31m[Line 3][0m [[36mJS/TS String Literal[0m] Found: "[1mBranches[0m"
     [33m→[0m '/settings/structures/branches': '[1m[31mBranches[0m',
  [31m[Line 4][0m [[36mJS/TS String Literal[0m] Found: "[1mDepartments[0m"
     [33m→[0m '/settings/structures/departments': '[1m[31mDepartments[0m',
  [31m[Line 5][0m [[36mJS/TS String Literal[0m] Found: "[1mUnits[0m"
     [33m→[0m '/settings/structures/units': '[1m[31mUnits[0m',
  [31m[Line 6][0m [[36mJS/TS String Literal[0m] Found: "[1mPositions[0m"
     [33m→[0m '/settings/structures/positions': '[1m[31mPositions[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/graphql/mutations/branchMutations.ts[0m
  [31m[Line 3][0m [[36mTemplate Literal String[0m] Found: "[1m$userIds: [String]
  $coordinate: CoordinateInput
  $image: AttachmentInput
  $radius: Int
  $title: String
  $address: String
  $supervisorId: String
  $code: String
  $parentId: String
  $phoneNumber: String
  $email: String
  $links: JSON[0m"
     [33m→[0m const commonDefs = `
  [31m[Line 18][0m [[36mTemplate Literal String[0m] Found: "[1muserIds: $userIds
  coordinate: $coordinate
  image: $image
  radius: $radius
  title: $title
  address: $address
  supervisorId: $supervisorId
  code: $code
  parentId: $parentId
  phoneNumber: $phoneNumber
  email: $email
  links: $links[0m"
     [33m→[0m const commonVars = `

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/graphql/mutations/departmentMutations.ts[0m
  [31m[Line 3][0m [[36mTemplate Literal String[0m] Found: "[1m_id
  code
  title
  description
  supervisorId
  parentId
  userIds
  userCount[0m"
     [33m→[0m const returnFields = `
  [31m[Line 14][0m [[36mTemplate Literal String[0m] Found: "[1m$title: String
  $description: String
  $supervisorId: String
  $code: String
  $parentId: String
  $userIds: [String][0m"
     [33m→[0m const commonDefs = `
  [31m[Line 23][0m [[36mTemplate Literal String[0m] Found: "[1mtitle: $title
  description: $description
  supervisorId: $supervisorId
  code: $code
  parentId: $parentId
  userIds: $userIds[0m"
     [33m→[0m const commonVars = `

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/graphql/mutations/positionMutations.ts[0m
  [31m[Line 3][0m [[36mTemplate Literal String[0m] Found: "[1m$title: String
  $code: String
  $parentId: String
  $userIds: [String]
  $status: String[0m"
     [33m→[0m const commonDefs = `
  [31m[Line 11][0m [[36mTemplate Literal String[0m] Found: "[1mtitle: $title
  code: $code
  parentId: $parentId
  userIds: $userIds
  status: $status[0m"
     [33m→[0m const commonVals = `
  [31m[Line 19][0m [[36mTemplate Literal String[0m] Found: "[1m_id
  code
  title
  parentId
  userCount
  userIds
  order
  status[0m"
     [33m→[0m const returnValues = `

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/graphql/mutations/unitMutations.ts[0m
  [31m[Line 3][0m [[36mTemplate Literal String[0m] Found: "[1m$title: String
  $description: String
  $supervisorId: String
  $code: String
  $departmentId: String
  $userIds: [String][0m"
     [33m→[0m const commonDefs = `
  [31m[Line 12][0m [[36mTemplate Literal String[0m] Found: "[1mtitle: $title
  description: $description
  supervisorId: $supervisorId
  code: $code
  departmentId: $departmentId
  userIds: $userIds[0m"
     [33m→[0m const commonVars = `
  [31m[Line 21][0m [[36mTemplate Literal String[0m] Found: "[1m_id
  code
  departmentId
  description
  supervisorId
  title
  userIds
  userCount[0m"
     [33m→[0m const returnFields = `

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/hooks/useBranchActions.tsx[0m
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mBranches[0m"
     [33m→[0m refetchQueries: ['[1m[31mBranches[0m'],
  [31m[Line 47][0m [[36mJS/TS String Literal[0m] Found: "[1mRemoved successfully![0m"
     [33m→[0m toast({ title: '[1m[31mRemoved successfully![0m', variant: 'success' }),
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mBranches[0m"
     [33m→[0m refetchQueries: ['[1m[31mBranches[0m'],
  [31m[Line 85][0m [[36mJS/TS String Literal[0m] Found: "[1mBranch updated successfully![0m"
     [33m→[0m title: '[1m[31mBranch updated successfully![0m',
  [31m[Line 92][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/hooks/useDepartmentActions.tsx[0m
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mDepartments[0m"
     [33m→[0m refetchQueries: ['[1m[31mDepartments[0m'],
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mRemoved successfully![0m"
     [33m→[0m toast({ title: '[1m[31mRemoved successfully![0m', variant: 'success' }),
  [31m[Line 53][0m [[36mJS/TS String Literal[0m] Found: "[1mDepartments[0m"
     [33m→[0m refetchQueries: ['[1m[31mDepartments[0m'],
  [31m[Line 90][0m [[36mJS/TS String Literal[0m] Found: "[1mDepartment updated successfully![0m"
     [33m→[0m title: '[1m[31mDepartment updated successfully![0m',
  [31m[Line 97][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/hooks/usePositionActions.tsx[0m
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mPositions[0m"
     [33m→[0m refetchQueries: ['[1m[31mPositions[0m'],
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mRemoved successfully![0m"
     [33m→[0m toast({ title: '[1m[31mRemoved successfully![0m', variant: 'success' }),
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mPositions[0m"
     [33m→[0m refetchQueries: ['[1m[31mPositions[0m'],
  [31m[Line 84][0m [[36mTemplate Literal String[0m] Found: "[1mPosition[0m"
     [33m→[0m title: `[1m[31mPosition[0m ${data.positionsEdit.code} updated successfully.`,
  [31m[Line 84][0m [[36mTemplate Literal String[0m] Found: "[1mupdated successfully.[0m"
     [33m→[0m title: `Position ${data.positionsEdit.code} [1m[31mupdated successfully.[0m`,

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/hooks/useStructureDetails.tsx[0m
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdated[0m"
     [33m→[0m toast({ title: '[1m[31mUpdated[0m', variant: 'success' });
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 74][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated successfully![0m"
     [33m→[0m toast({ title: '[1m[31mCreated successfully![0m', variant: 'success' });
  [31m[Line 78][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/hooks/useUnitActions.tsx[0m
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mUnits[0m"
     [33m→[0m refetchQueries: ['[1m[31mUnits[0m'],
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mRemoved successfully![0m"
     [33m→[0m toast({ title: '[1m[31mRemoved successfully![0m', variant: 'success' }),
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mUnits[0m"
     [33m→[0m refetchQueries: ['[1m[31mUnits[0m'],
  [31m[Line 86][0m [[36mJS/TS String Literal[0m] Found: "[1mUnit updated successfully![0m"
     [33m→[0m title: '[1m[31mUnit updated successfully![0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/schemas/branchSchema.ts[0m
  [31m[Line 8][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid Facebook URL[0m"
     [33m→[0m message: '[1m[31mInvalid Facebook URL[0m',
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid Twitter URL[0m"
     [33m→[0m message: '[1m[31mInvalid Twitter URL[0m',
  [31m[Line 24][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid website URL[0m"
     [33m→[0m .url({ message: '[1m[31mInvalid website URL[0m' })
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid Youtube URL[0m"
     [33m→[0m message: '[1m[31mInvalid Youtube URL[0m',
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mInvalid whatsapp URL[0m"
     [33m→[0m message: '[1m[31mInvalid whatsapp URL[0m',
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mCode is required[0m"
     [33m→[0m code: z.string().min(1, { message: '[1m[31mCode is required[0m' }),

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/schemas/departmentSchema.ts[0m
  [31m[Line 7][0m [[36mJS/TS String Literal[0m] Found: "[1mCode is required[0m"
     [33m→[0m code: z.string().min(1, { message: '[1m[31mCode is required[0m' }),

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/schemas/positionSchema.ts[0m
  [31m[Line 5][0m [[36mJS/TS String Literal[0m] Found: "[1mCode is required[0m"
     [33m→[0m code: z.string().min(1, { message: '[1m[31mCode is required[0m' }),

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/schemas/unitSchema.ts[0m
  [31m[Line 6][0m [[36mJS/TS String Literal[0m] Found: "[1mCode is required[0m"
     [33m→[0m code: z.string().min(1, { message: '[1m[31mCode is required[0m' }),

[1m[33m📄 File: frontend/core-ui/src/modules/settings/structure/types/workhours.ts[0m
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mMonday[0m"
     [33m→[0m [1m[31mMonday[0m = 'Monday',
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mTuesday[0m"
     [33m→[0m [1m[31mTuesday[0m = 'Tuesday',
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mWednesday[0m"
     [33m→[0m [1m[31mWednesday[0m = 'Wednesday',
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mThursday[0m"
     [33m→[0m [1m[31mThursday[0m = 'Thursday',
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mFriday[0m"
     [33m→[0m [1m[31mFriday[0m = 'Friday',
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mSaturday[0m"
     [33m→[0m [1m[31mSaturday[0m = 'Saturday',
  [31m[Line 43][0m [[36mJS/TS String Literal[0m] Found: "[1mSunday[0m"
     [33m→[0m [1m[31mSunday[0m = 'Sunday',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/tags/components/TagAddButtons.tsx[0m
  [31m[Line 40][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Group[0m"
     [33m→[0m >
  [31m[Line 52][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Tag[0m"
     [33m→[0m <IconPlus className="size-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/tags/components/TagsListRowOptionMenu.tsx[0m
  [31m[Line 84][0m [[36mJSX Plain Text[0m] Found: "[1mConvert to[0m"
     [33m→[0m <IconTransform />
  [31m[Line 94][0m [[36mJSX Plain Text[0m] Found: "[1mAdd tag to group[0m"
     [33m→[0m <IconPlus />
  [31m[Line 100][0m [[36mJS/TS String Literal[0m] Found: "[1mMove to group[0m"
     [33m→[0m {!tag.parentId ? '[1m[31mMove to group[0m' : 'Change group'}
  [31m[Line 100][0m [[36mJS/TS String Literal[0m] Found: "[1mChange group[0m"
     [33m→[0m {!tag.parentId ? 'Move to group' : '[1m[31mChange group[0m'}
  [31m[Line 108][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />
  [31m[Line 119][0m [[36mJS/TS String Literal[0m] Found: "[1mSearch tag groups[0m"
     [33m→[0m placeholder="[1m[31mSearch tag groups[0m"
  [31m[Line 121][0m [[36mJSX Plain Text[0m] Found: "[1mNo groups found[0m"
     [33m→[0m <Command.Empty>[1m[31mNo groups found[0m</Command.Empty>

[1m[33m📄 File: frontend/core-ui/src/modules/settings/tags/components/TagsSidebar.tsx[0m
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mCore tags[0m"
     [33m→[0m {key === 'core' ? '[1m[31mCore tags[0m' : `${key} tags`}
  [31m[Line 22][0m [[36mJSX Plain Text[0m] Found: "[1mWorkspace tags[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/modules/settings/tags/components/fields/TagsListDescriptionField.tsx[0m
  [31m[Line 83][0m [[36mJSX Plain Text[0m] Found: "[1mAdd tag description...[0m"
     [33m→[0m <p className="text-xs font-medium text-accent-foreground invisible group-hover:visible">
  [31m[Line 99][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd tag description...[0m"
     [33m→[0m placeholder="[1m[31mAdd tag description...[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/settings/tags/components/fields/TagsListNameField.tsx[0m
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m name: z.string().min(1, '[1m[31mName is required[0m'),
  [31m[Line 91][0m [[36mJS/TS String Literal[0m] Found: "[1mId is required when editing tag, Add id or use isForm prop[0m"
     [33m→[0m '[1m[31mId is required when editing tag, Add id or use isForm prop[0m',
  [31m[Line 103][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 104][0m [[36mJS/TS String Literal[0m] Found: "[1mName cannot be empty[0m"
     [33m→[0m description: '[1m[31mName cannot be empty[0m',
  [31m[Line 128][0m [[36mJSX Plain Text[0m] Found: "[1mAdd tag name[0m"
     [33m→[0m <p className="text-xs font-medium truncate  text-accent-foreground">
  [31m[Line 142][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd tag name[0m"
     [33m→[0m placeholder="[1m[31mAdd tag name[0m"
  [31m[Line 162][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/components/TeamMemberCounts.tsx[0m
  [31m[Line 10][0m [[36mTemplate Literal String[0m] Found: "[1mrecords found[0m"
     [33m→[0m ? `${totalCount} [1m[31mrecords found[0m`

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/components/TeamMemberSettingsBreadcrumb.tsx[0m
  [31m[Line 7][0m [[36mJSX Plain Text[0m] Found: "[1mMembers & Permission groups[0m"
     [33m→[0m <IconUsersGroup className="w-4 h-4 text-accent-foreground" />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/components/TeamMemberTable.tsx[0m
  [31m[Line 28][0m [[36mJSX Plain Text[0m] Found: "[1mError loading members:[0m"
     [33m→[0m <div className="text-destructive">

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/components/header/TeamMemberFilterBar.tsx[0m
  [31m[Line 45][0m [[36mJS/TS String Literal[0m] Found: "[1mBrands[0m"
     [33m→[0m label="[1m[31mBrands[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/components/header/TeamMemberFilterPopover.tsx[0m
  [31m[Line 19][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m <[1m[31mFilter[0m.CommandInput placeholder="Filter" variant="secondary" />
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mBrands[0m"
     [33m→[0m <Select[1m[31mBrands[0m.FilterItem value="brandIds" label="Brands" />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/components/invite/AddInviteRow.tsx[0m
  [31m[Line 29][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Invite[0m"
     [33m→[0m <IconPlus />
  [31m[Line 43][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Multiple Invites[0m"
     [33m→[0m <IconPlus />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/components/invite/InviteForm.tsx[0m
  [31m[Line 76][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease enter a valid email address[0m"
     [33m→[0m setError('[1m[31mPlease enter a valid email address[0m');
  [31m[Line 81][0m [[36mJS/TS String Literal[0m] Found: "[1mThis email has already been added[0m"
     [33m→[0m setError('[1m[31mThis email has already been added[0m');
  [31m[Line 139][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease add at least one email address[0m"
     [33m→[0m title: '[1m[31mPlease add at least one email address[0m',
  [31m[Line 146][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease enter a valid email address[0m"
     [33m→[0m setError('[1m[31mPlease enter a valid email address[0m');
  [31m[Line 151][0m [[36mJS/TS String Literal[0m] Found: "[1mThis email has already been added[0m"
     [33m→[0m setError('[1m[31mThis email has already been added[0m');
  [31m[Line 199][0m [[36mJS/TS String Literal[0m] Found: "[1mInvitation has been sent[0m"
     [33m→[0m toast({ title: '[1m[31mInvitation has been sent[0m', variant: 'success' });
  [31m[Line 204][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to send invitation[0m"
     [33m→[0m title: '[1m[31mFailed to send invitation[0m',
  [31m[Line 330][0m [[36mJS/TS String Literal[0m] Found: "[1mEnter email addresses[0m"
     [33m→[0m placeholder="[1m[31mEnter email addresses[0m"
  [31m[Line 359][0m [[36mTemplate Literal String[0m] Found: "[1mRemove[0m"
     [33m→[0m aria-label={`[1m[31mRemove[0m ${tag}`}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/components/invite/InviteRow.tsx[0m
  [31m[Line 61][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail[0m"
     [33m→[0m placeholder="[1m[31mEmail[0m"
  [31m[Line 88][0m [[36mJS/TS String Literal[0m] Found: "[1mPassword[0m"
     [33m→[0m placeholder="[1m[31mPassword[0m"

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/components/invite/InviteTeamMember.tsx[0m
  [31m[Line 26][0m [[36mJSX Plain Text[0m] Found: "[1mAdd a new account[0m"
     [33m→[0m <Dialog.Description className="sr-only">

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/components/invite/RemoveButton.tsx[0m
  [31m[Line 28][0m [[36mJSX Plain Text[0m] Found: "[1mRemove Selected[0m"
     [33m→[0m <IconX />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/components/record/TeamMemberColumns.tsx[0m
  [31m[Line 90][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to update user details[0m"
     [33m→[0m title: '[1m[31mFailed to update user details[0m',
  [31m[Line 101][0m [[36mJS/TS String Literal[0m] Found: "[1mName[0m"
     [33m→[0m scope={clsx(SettingsHotKeyScope.UsersPage, _id, '[1m[31mName[0m')}
  [31m[Line 255][0m [[36mJS/TS String Literal[0m] Found: "[1mYYYY/MM/DD[0m"
     [33m→[0m '[1m[31mYYYY/MM/DD[0m'}
  [31m[Line 286][0m [[36mJS/TS String Literal[0m] Found: "[1mNot verified[0m"
     [33m→[0m {status ? (cell.getValue() as string) : '[1m[31mNot verified[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/components/record/TeamMemberMoreColumn.tsx[0m
  [31m[Line 67][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m /> Edit
  [31m[Line 75][0m [[36mJSX Plain Text[0m] Found: "[1mEdit Permission Groups[0m"
     [33m→[0m <IconSettings size={18} /> [1m[31mEdit Permission Groups[0m
  [31m[Line 86][0m [[36mJSX Plain Text[0m] Found: "[1mReset Password[0m"
     [33m→[0m <IconLock /> [1m[31mReset Password[0m
  [31m[Line 99][0m [[36mTemplate Literal String[0m] Found: "[1mUser[0m"
     [33m→[0m title: `[1m[31mUser[0m ${
  [31m[Line 115][0m [[36mJS/TS String Literal[0m] Found: "[1mDeactivate[0m"
     [33m→[0m {isActive ? '[1m[31mDeactivate[0m' : 'Activate'}
  [31m[Line 115][0m [[36mJS/TS String Literal[0m] Found: "[1mActivate[0m"
     [33m→[0m {isActive ? 'Deactivate' : '[1m[31mActivate[0m'}
  [31m[Line 131][0m [[36mJS/TS String Literal[0m] Found: "[1mInvitation has been resent[0m"
     [33m→[0m title: '[1m[31mInvitation has been resent[0m',
  [31m[Line 138][0m [[36mJSX Plain Text[0m] Found: "[1mResend Invite[0m"
     [33m→[0m {loading ? <Spinner size="sm" /> : <IconRefresh size={18} />}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/components/record/team-member-command-bar/assign-permissions/TeamMemberAssignPermissions.tsx[0m
  [31m[Line 59][0m [[36mJS/TS String Literal[0m] Found: "[1mPermission groups assigned[0m"
     [33m→[0m title: '[1m[31mPermission groups assigned[0m',
  [31m[Line 60][0m [[36mTemplate Literal String[0m] Found: "[1mUpdated[0m"
     [33m→[0m description: `[1m[31mUpdated[0m ${teamMemberIds.length} team member(s)`,
  [31m[Line 60][0m [[36mTemplate Literal String[0m] Found: "[1mteam member(s)[0m"
     [33m→[0m description: `Updated ${teamMemberIds.length} [1m[31mteam member(s)[0m`,
  [31m[Line 69][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 91][0m [[36mJSX Plain Text[0m] Found: "[1mAssign Permissions[0m"
     [33m→[0m <IconShieldCheck />
  [31m[Line 144][0m [[36mJSX Plain Text[0m] Found: "[1mCustom Permission Groups[0m"
     [33m→[0m <Collapsible.TriggerIcon />
  [31m[Line 177][0m [[36mJSX Plain Text[0m] Found: "[1mgroup(s) ·[0m"
     [33m→[0m {selectedGroupIds.length} [1m[31mgroup(s) ·[0m {teamMemberIds.length}{' '}
  [31m[Line 185][0m [[36mJS/TS String Literal[0m] Found: "[1mApply[0m"
     [33m→[0m {updateLoading ? <Spinner size="sm" /> : '[1m[31mApply[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/components/record/team-member-command-bar/delete/TeamMemberDelete.tsx[0m
  [31m[Line 22][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${teamMemberIds.length} selected team member?`,
  [31m[Line 22][0m [[36mTemplate Literal String[0m] Found: "[1mselected team member?[0m"
     [33m→[0m message: `Are you sure you want to delete the ${teamMemberIds.length} [1m[31mselected team member?[0m`,
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mTeam member deleted successfully[0m"
     [33m→[0m description: '[1m[31mTeam member deleted successfully[0m',
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 42][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/components/record/team-member-edit/TeamMemberRoleSelect.tsx[0m
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mSearch role[0m"
     [33m→[0m <Command.Input placeholder="[1m[31mSearch role[0m" />
  [31m[Line 35][0m [[36mJSX Plain Text[0m] Found: "[1mNo results found.[0m"
     [33m→[0m <Command.Empty>[1m[31mNo results found.[0m</Command.Empty>

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/constants/memberDetailFields.ts[0m
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mFirst name[0m"
     [33m→[0m label: '[1m[31mFirst name[0m',
  [31m[Line 38][0m [[36mJS/TS String Literal[0m] Found: "[1mFirst Name[0m"
     [33m→[0m placeholder: '[1m[31mFirst Name[0m',
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mFirst name[0m"
     [33m→[0m description: '[1m[31mFirst name[0m',
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mMiddle name[0m"
     [33m→[0m label: '[1m[31mMiddle name[0m',
  [31m[Line 46][0m [[36mJS/TS String Literal[0m] Found: "[1mMiddle Name[0m"
     [33m→[0m placeholder: '[1m[31mMiddle Name[0m',
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mMiddle name[0m"
     [33m→[0m description: '[1m[31mMiddle name[0m',
  [31m[Line 52][0m [[36mJS/TS String Literal[0m] Found: "[1mLast name[0m"
     [33m→[0m label: '[1m[31mLast name[0m',
  [31m[Line 54][0m [[36mJS/TS String Literal[0m] Found: "[1mLast Name[0m"
     [33m→[0m placeholder: '[1m[31mLast Name[0m',
  [31m[Line 57][0m [[36mJS/TS String Literal[0m] Found: "[1mLast name[0m"
     [33m→[0m description: '[1m[31mLast name[0m',
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mShort name[0m"
     [33m→[0m label: '[1m[31mShort name[0m',
  [31m[Line 62][0m [[36mJS/TS String Literal[0m] Found: "[1mShort Name[0m"
     [33m→[0m placeholder: '[1m[31mShort Name[0m',
  [31m[Line 65][0m [[36mJS/TS String Literal[0m] Found: "[1mShort name[0m"
     [33m→[0m description: '[1m[31mShort name[0m',
  [31m[Line 68][0m [[36mJS/TS String Literal[0m] Found: "[1mEmployee Id[0m"
     [33m→[0m label: '[1m[31mEmployee Id[0m',
  [31m[Line 70][0m [[36mJS/TS String Literal[0m] Found: "[1mEmployee Id[0m"
     [33m→[0m placeholder: '[1m[31mEmployee Id[0m',
  [31m[Line 72][0m [[36mJS/TS String Literal[0m] Found: "[1mEmployee Id[0m"
     [33m→[0m description: '[1m[31mEmployee Id[0m',
  [31m[Line 75][0m [[36mJS/TS String Literal[0m] Found: "[1mDescription[0m"
     [33m→[0m label: '[1m[31mDescription[0m',
  [31m[Line 77][0m [[36mJS/TS String Literal[0m] Found: "[1mDescription[0m"
     [33m→[0m placeholder: '[1m[31mDescription[0m',
  [31m[Line 80][0m [[36mJS/TS String Literal[0m] Found: "[1mDescription[0m"
     [33m→[0m description: '[1m[31mDescription[0m',
  [31m[Line 83][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail[0m"
     [33m→[0m label: '[1m[31mEmail[0m',
  [31m[Line 85][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail[0m"
     [33m→[0m placeholder: '[1m[31mEmail[0m',
  [31m[Line 87][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail[0m"
     [33m→[0m description: '[1m[31mEmail[0m',
  [31m[Line 90][0m [[36mJS/TS String Literal[0m] Found: "[1mUsername[0m"
     [33m→[0m label: '[1m[31mUsername[0m',
  [31m[Line 92][0m [[36mJS/TS String Literal[0m] Found: "[1mUsername[0m"
     [33m→[0m placeholder: '[1m[31mUsername[0m',
  [31m[Line 94][0m [[36mJS/TS String Literal[0m] Found: "[1mUsername[0m"
     [33m→[0m description: '[1m[31mUsername[0m',
  [31m[Line 97][0m [[36mJS/TS String Literal[0m] Found: "[1mBirth date[0m"
     [33m→[0m label: '[1m[31mBirth date[0m',
  [31m[Line 99][0m [[36mJS/TS String Literal[0m] Found: "[1mBirth date[0m"
     [33m→[0m placeholder: '[1m[31mBirth date[0m',
  [31m[Line 102][0m [[36mJS/TS String Literal[0m] Found: "[1mBirth date[0m"
     [33m→[0m description: '[1m[31mBirth date[0m',
  [31m[Line 105][0m [[36mJS/TS String Literal[0m] Found: "[1mLocation[0m"
     [33m→[0m label: '[1m[31mLocation[0m',
  [31m[Line 107][0m [[36mJS/TS String Literal[0m] Found: "[1mLocation[0m"
     [33m→[0m placeholder: '[1m[31mLocation[0m',
  [31m[Line 110][0m [[36mJS/TS String Literal[0m] Found: "[1mLocation[0m"
     [33m→[0m description: '[1m[31mLocation[0m',
  [31m[Line 113][0m [[36mJS/TS String Literal[0m] Found: "[1mJoin date[0m"
     [33m→[0m label: '[1m[31mJoin date[0m',
  [31m[Line 115][0m [[36mJS/TS String Literal[0m] Found: "[1mJoin date[0m"
     [33m→[0m placeholder: '[1m[31mJoin date[0m',
  [31m[Line 118][0m [[36mJS/TS String Literal[0m] Found: "[1mJoin date[0m"
     [33m→[0m description: '[1m[31mJoin date[0m',
  [31m[Line 121][0m [[36mJS/TS String Literal[0m] Found: "[1mPositions[0m"
     [33m→[0m label: '[1m[31mPositions[0m',
  [31m[Line 123][0m [[36mJS/TS String Literal[0m] Found: "[1mPositions[0m"
     [33m→[0m placeholder: '[1m[31mPositions[0m',
  [31m[Line 125][0m [[36mJS/TS String Literal[0m] Found: "[1mPositions[0m"
     [33m→[0m description: '[1m[31mPositions[0m',
  [31m[Line 128][0m [[36mJS/TS String Literal[0m] Found: "[1mBranches[0m"
     [33m→[0m label: '[1m[31mBranches[0m',
  [31m[Line 130][0m [[36mJS/TS String Literal[0m] Found: "[1mBranches[0m"
     [33m→[0m placeholder: '[1m[31mBranches[0m',
  [31m[Line 132][0m [[36mJS/TS String Literal[0m] Found: "[1mBranches[0m"
     [33m→[0m description: '[1m[31mBranches[0m',
  [31m[Line 135][0m [[36mJS/TS String Literal[0m] Found: "[1mDepartments[0m"
     [33m→[0m label: '[1m[31mDepartments[0m',
  [31m[Line 137][0m [[36mJS/TS String Literal[0m] Found: "[1mDepartments[0m"
     [33m→[0m placeholder: '[1m[31mDepartments[0m',
  [31m[Line 139][0m [[36mJS/TS String Literal[0m] Found: "[1mDepartments[0m"
     [33m→[0m description: '[1m[31mDepartments[0m',
  [31m[Line 145][0m [[36mJS/TS String Literal[0m] Found: "[1mFacebook[0m"
     [33m→[0m label: '[1m[31mFacebook[0m',
  [31m[Line 150][0m [[36mJS/TS String Literal[0m] Found: "[1mTwitter[0m"
     [33m→[0m label: '[1m[31mTwitter[0m',
  [31m[Line 155][0m [[36mJS/TS String Literal[0m] Found: "[1mWebsite[0m"
     [33m→[0m label: '[1m[31mWebsite[0m',
  [31m[Line 160][0m [[36mJS/TS String Literal[0m] Found: "[1mDiscord[0m"
     [33m→[0m label: '[1m[31mDiscord[0m',
  [31m[Line 165][0m [[36mJS/TS String Literal[0m] Found: "[1mGitHub[0m"
     [33m→[0m label: '[1m[31mGitHub[0m',
  [31m[Line 170][0m [[36mJS/TS String Literal[0m] Found: "[1mInstagram[0m"
     [33m→[0m label: '[1m[31mInstagram[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/details/components/MemberActivityRows.tsx[0m
  [31m[Line 62][0m [[36mJS/TS String Literal[0m] Found: "[1ma member[0m"
     [33m→[0m {targetText || invitedEmail || '[1m[31ma member[0m'}
  [31m[Line 75][0m [[36mJSX Plain Text[0m] Found: "[1mchanged role from[0m"
     [33m→[0m <span className="text-muted-foreground">[1m[31mchanged role from[0m</span>
  [31m[Line 88][0m [[36mJS/TS String Literal[0m] Found: "[1msigned in[0m"
     [33m→[0m verb: 'activated' | 'deactivated' | '[1m[31msigned in[0m' | 'signed out';
  [31m[Line 88][0m [[36mJS/TS String Literal[0m] Found: "[1msigned out[0m"
     [33m→[0m verb: 'activated' | 'deactivated' | 'signed in' | '[1m[31msigned out[0m';
  [31m[Line 125][0m [[36mJS/TS String Literal[0m] Found: "[1msigned in[0m"
     [33m→[0m <UserStatusRow activity={activity} verb="[1m[31msigned in[0m" />
  [31m[Line 131][0m [[36mJS/TS String Literal[0m] Found: "[1msigned out[0m"
     [33m→[0m <UserStatusRow activity={activity} verb="[1m[31msigned out[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/details/components/MemberDetail.tsx[0m
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mMember Detail[0m"
     [33m→[0m <FocusSheet.Header title="[1m[31mMember Detail[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/details/components/MemberDetailEmptyState.tsx[0m
  [31m[Line 12][0m [[36mJSX Plain Text[0m] Found: "[1mMember not found[0m"
     [33m→[0m <Empty.Title>[1m[31mMember not found[0m</Empty.Title>
  [31m[Line 13][0m [[36mJSX Plain Text[0m] Found: "[1mThere seems to be no member with this ID.[0m"
     [33m→[0m <Empty.Description>

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/details/components/MemberDetailErrorState.tsx[0m
  [31m[Line 14][0m [[36mJSX Plain Text[0m] Found: "[1mError[0m"
     [33m→[0m <Empty.Title>[1m[31mError[0m</Empty.Title>

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/details/components/MemberDetailSidebar.tsx[0m
  [31m[Line 8][0m [[36mJSX Plain Text[0m] Found: "[1mGeneral[0m"
     [33m→[0m <Sidebar.GroupLabel>[1m[31mGeneral[0m</Sidebar.GroupLabel>

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/details/components/MemberGeneral.tsx[0m
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mEmail[0m"
     [33m→[0m <DataListItem label="[1m[31mEmail[0m">
  [31m[Line 23][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd Primary Email[0m"
     [33m→[0m placeholder="[1m[31mAdd Primary Email[0m"
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mPhone[0m"
     [33m→[0m <DataListItem label="[1m[31mPhone[0m">
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mUsername[0m"
     [33m→[0m <DataListItem label="[1m[31mUsername[0m">
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mUsername[0m"
     [33m→[0m placeholder="[1m[31mUsername[0m"
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mShort name[0m"
     [33m→[0m <DataListItem label="[1m[31mShort name[0m">
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mShort name[0m"
     [33m→[0m placeholder="[1m[31mShort name[0m"
  [31m[Line 48][0m [[36mJS/TS String Literal[0m] Found: "[1mBirthday[0m"
     [33m→[0m <DataListItem label="[1m[31mBirthday[0m">
  [31m[Line 51][0m [[36mJS/TS String Literal[0m] Found: "[1mBirth date[0m"
     [33m→[0m placeholder="[1m[31mBirth date[0m"
  [31m[Line 57][0m [[36mJS/TS String Literal[0m] Found: "[1mScore[0m"
     [33m→[0m <DataListItem label="[1m[31mScore[0m">
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mAdd Score[0m"
     [33m→[0m placeholder="[1m[31mAdd Score[0m"
  [31m[Line 70][0m [[36mJSX Plain Text[0m] Found: "[1mJoined date[0m"
     [33m→[0m <Label>[1m[31mJoined date[0m</Label>
  [31m[Line 81][0m [[36mJS/TS String Literal[0m] Found: "[1mDescription[0m"
     [33m→[0m <DataListItem label="[1m[31mDescription[0m">

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/details/components/MembersPermissions.tsx[0m
  [31m[Line 10][0m [[36mJSX Plain Text[0m] Found: "[1mThis user is owner, no permission needed.[0m"
     [33m→[0m <p className="text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/details/components/ResetPasswordDialog.tsx[0m
  [31m[Line 50][0m [[36mJS/TS String Literal[0m] Found: "[1mThis user's password has been changed[0m"
     [33m→[0m title: "[1m[31mThis user's password has been changed[0m",
  [31m[Line 71][0m [[36mJS/TS String Literal[0m] Found: "[1mReset password[0m"
     [33m→[0m title="[1m[31mReset password[0m"
  [31m[Line 72][0m [[36mJS/TS String Literal[0m] Found: "[1mSet new password for the user[0m"
     [33m→[0m description="[1m[31mSet new password for the user[0m"
  [31m[Line 82][0m [[36mJSX Plain Text[0m] Found: "[1mNew password[0m"
     [33m→[0m <Form.Label>[1m[31mNew password[0m</Form.Label>
  [31m[Line 87][0m [[36mJS/TS String Literal[0m] Found: "[1mNew password[0m"
     [33m→[0m placeholder="[1m[31mNew password[0m"
  [31m[Line 100][0m [[36mJSX Plain Text[0m] Found: "[1mRe-type password[0m"
     [33m→[0m <Form.Label>[1m[31mRe-type password[0m</Form.Label>
  [31m[Line 105][0m [[36mJS/TS String Literal[0m] Found: "[1mRe-type password[0m"
     [33m→[0m placeholder="[1m[31mRe-type password[0m"
  [31m[Line 106][0m [[36mJS/TS String Literal[0m] Found: "[1mnew-password webauthn[0m"
     [33m→[0m autoComplete={'[1m[31mnew-password webauthn[0m'}
  [31m[Line 124][0m [[36mJS/TS String Literal[0m] Found: "[1mSave[0m"
     [33m→[0m {loading ? <Spinner /> : '[1m[31mSave[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/details/components/fields/LinkInput.tsx[0m
  [31m[Line 104][0m [[36mJSX Plain Text[0m] Found: "[1mDouble click to visit[0m"
     [33m→[0m <IconLink size={12} />

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/details/components/fields/PhoneFieldUser.tsx[0m
  [31m[Line 21][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease enter a valid phone number.[0m"
     [33m→[0m setErrorMessage('[1m[31mPlease enter a valid phone number.[0m');

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/hooks/useRoleUpsert.tsx[0m
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mRole has been updated[0m"
     [33m→[0m toast({ title: '[1m[31mRole has been updated[0m', variant: 'success' });
  [31m[Line 17][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to update role[0m"
     [33m→[0m title: '[1m[31mFailed to update role[0m',
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mUser[0m"
     [33m→[0m id: cache.identify({ _id: variables?.userId, __typename: '[1m[31mUser[0m' }),

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/hooks/useUserEdit.tsx[0m
  [31m[Line 56][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdated[0m"
     [33m→[0m onCompleted: () => toast({ title: '[1m[31mUpdated[0m', variant: 'success' }),
  [31m[Line 59][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 83][0m [[36mJS/TS String Literal[0m] Found: "[1mUserDetail[0m"
     [33m→[0m refetchQueries: ['[1m[31mUserDetail[0m'],
  [31m[Line 109][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdated[0m"
     [33m→[0m onCompleted: () => toast({ title: '[1m[31mUpdated[0m', variant: 'success' }),
  [31m[Line 112][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 117][0m [[36mJS/TS String Literal[0m] Found: "[1mUsers[0m"
     [33m→[0m refetchQueries: ['[1m[31mUsers[0m'],

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/hooks/useUsersInvite.tsx[0m
  [31m[Line 6][0m [[36mJS/TS String Literal[0m] Found: "[1mUsers[0m"
     [33m→[0m refetchQueries: ['[1m[31mUsers[0m'],

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/schema/users.ts[0m
  [31m[Line 5][0m [[36mJS/TS String Literal[0m] Found: "[1mRequired field[0m"
     [33m→[0m .string({ required_error: '[1m[31mRequired field[0m' })
  [31m[Line 7][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease fill a valid email address[0m"
     [33m→[0m message: '[1m[31mPlease fill a valid email address[0m',
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mUsername required[0m"
     [33m→[0m .string({ required_error: '[1m[31mUsername required[0m' })
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mUsername must be at least 3 characters[0m"
     [33m→[0m .min(3, '[1m[31mUsername must be at least 3 characters[0m')
  [31m[Line 13][0m [[36mJS/TS String Literal[0m] Found: "[1mUsername must not exceed 30 characters[0m"
     [33m→[0m .max(30, '[1m[31mUsername must not exceed 30 characters[0m')
  [31m[Line 16][0m [[36mJS/TS String Literal[0m] Found: "[1mUsername can only contain letters, numbers, hyphens, and underscores[0m"
     [33m→[0m '[1m[31mUsername can only contain letters, numbers, hyphens, and underscores[0m',
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mRequired field[0m"
     [33m→[0m .string({ required_error: '[1m[31mRequired field[0m' })
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease fill a valid email address[0m"
     [33m→[0m message: '[1m[31mPlease fill a valid email address[0m',
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least 8 characters[0m"
     [33m→[0m message: '[1m[31mAt least 8 characters[0m',
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least 1 number[0m"
     [33m→[0m .refine((val) => /[0-9]/.test(val), { message: '[1m[31mAt least 1 number[0m' })
  [31m[Line 62][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least 1 lowercase letter[0m"
     [33m→[0m message: '[1m[31mAt least 1 lowercase letter[0m',
  [31m[Line 65][0m [[36mJS/TS String Literal[0m] Found: "[1mAt least 1 uppercase letter[0m"
     [33m→[0m message: '[1m[31mAt least 1 uppercase letter[0m',
  [31m[Line 70][0m [[36mJS/TS String Literal[0m] Found: "[1mPasswords must match[0m"
     [33m→[0m message: '[1m[31mPasswords must match[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/settings/team-member/types.ts[0m
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mVerified[0m"
     [33m→[0m [1m[31mVerified[0m = 'Verified',
  [31m[Line 31][0m [[36mJS/TS String Literal[0m] Found: "[1mNot verified[0m"
     [33m→[0m NotVerified = '[1m[31mNot verified[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/TemplateExport.tsx[0m
  [31m[Line 20][0m [[36mJS/TS String Literal[0m] Found: "[1mAuthentication required[0m"
     [33m→[0m title: '[1m[31mAuthentication required[0m',
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mPlease login to export templates. Redirecting to login...[0m"
     [33m→[0m '[1m[31mPlease login to export templates. Redirecting to login...[0m',
  [31m[Line 27][0m [[36mJS/TS String Literal[0m] Found: "[1mExport failed[0m"
     [33m→[0m title: '[1m[31mExport failed[0m',
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to export template. Please try again.[0m"
     [33m→[0m description: '[1m[31mFailed to export template. Please try again.[0m',
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mExport failed[0m"
     [33m→[0m title: '[1m[31mExport failed[0m',
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to export template. Please try again.[0m"
     [33m→[0m description: '[1m[31mFailed to export template. Please try again.[0m',
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mExporting...[0m"
     [33m→[0m {exporting ? '[1m[31mExporting...[0m' : 'Export'}
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mExport[0m"
     [33m→[0m {exporting ? '[1m[31mExport[0ming...' : 'Export'}

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/TemplateImport.tsx[0m
  [31m[Line 29][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mTemplate imported successfully![0m"
     [33m→[0m description: '[1m[31mTemplate imported successfully![0m',
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mImport failed[0m"
     [33m→[0m title: '[1m[31mImport failed[0m',
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mImport failed[0m"
     [33m→[0m title: '[1m[31mImport failed[0m',
  [31m[Line 43][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to import template. Please check the file format.[0m"
     [33m→[0m description: '[1m[31mFailed to import template. Please check the file format.[0m',
  [31m[Line 69][0m [[36mJS/TS String Literal[0m] Found: "[1mImporting...[0m"
     [33m→[0m {importing ? '[1m[31mImporting...[0m' : 'Import'}
  [31m[Line 69][0m [[36mJS/TS String Literal[0m] Found: "[1mImport[0m"
     [33m→[0m {importing ? '[1m[31mImport[0ming...' : 'Import'}

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/TemplateMoreCell.tsx[0m
  [31m[Line 41][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m className="w-4 h-4" />
  [31m[Line 45][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash className="w-4 h-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/TemplateUse.tsx[0m
  [31m[Line 15][0m [[36mJSX Plain Text[0m] Found: "[1mUse[0m"
     [33m→[0m <IconCopy className="w-4 h-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/TemplatesBreadcrumb.tsx[0m
  [31m[Line 12][0m [[36mJSX Plain Text[0m] Found: "[1mTemplates[0m"
     [33m→[0m <IconBrandDatabricks />
  [31m[Line 23][0m [[36mJSX Plain Text[0m] Found: "[1mCategories[0m"
     [33m→[0m <IconCategory />

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/TemplatesColumns.tsx[0m
  [31m[Line 22][0m [[36mJS/TS String Literal[0m] Found: "[1mName[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mName[0m" icon={IconLabelFilled} />
  [31m[Line 36][0m [[36mJS/TS String Literal[0m] Found: "[1mType[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mType[0m" icon={IconLabelFilled} />
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mCategory[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mCategory[0m" icon={IconLabelFilled} />
  [31m[Line 67][0m [[36mJS/TS String Literal[0m] Found: "[1mNo Category[0m"
     [33m→[0m placeholder="[1m[31mNo Category[0m"
  [31m[Line 77][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated By[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mCreated By[0m" icon={IconLabelFilled} />
  [31m[Line 83][0m [[36mJSX Plain Text[0m] Found: "[1mImport[0m"
     [33m→[0m return <RecordTableInlineCell>[1m[31mImport[0m</RecordTableInlineCell>;
  [31m[Line 88][0m [[36mJS/TS String Literal[0m] Found: "[1mNo Member[0m"
     [33m→[0m <MembersInline members={[member]} placeholder="[1m[31mNo Member[0m" />
  [31m[Line 98][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated At[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mCreated At[0m" icon={IconLabelFilled} />
  [31m[Line 114][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdated By[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mUpdated By[0m" icon={IconLabelFilled} />
  [31m[Line 121][0m [[36mJS/TS String Literal[0m] Found: "[1mNot updated yet[0m"
     [33m→[0m <MembersInline members={[member]} placeholder="[1m[31mNot updated yet[0m" />
  [31m[Line 130][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdated At[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mUpdated At[0m" icon={IconLabelFilled} />
  [31m[Line 136][0m [[36mJS/TS String Literal[0m] Found: "[1mNot updated yet[0m"
     [33m→[0m return <MembersInline placeholder="[1m[31mNot updated yet[0m" className="px-3" />;

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/TemplatesFilter.tsx[0m
  [31m[Line 86][0m [[36mJSX Plain Text[0m] Found: "[1mTypes[0m"
     [33m→[0m <IconBox />
  [31m[Line 109][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated By[0m"
     [33m→[0m <SelectMember.FilterBar queryKey="createdBy" label="[1m[31mCreated By[0m" />
  [31m[Line 113][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdated By[0m"
     [33m→[0m <SelectMember.FilterBar queryKey="updatedBy" label="[1m[31mUpdated By[0m" />
  [31m[Line 119][0m [[36mJS/TS String Literal[0m] Found: "[1mCategory[0m"
     [33m→[0m label="[1m[31mCategory[0m"
  [31m[Line 136][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m placeholder="[1m[31mFilter[0m"
  [31m[Line 147][0m [[36mJSX Plain Text[0m] Found: "[1mTypes[0m"
     [33m→[0m <IconBox />
  [31m[Line 153][0m [[36mJS/TS String Literal[0m] Found: "[1mCategory[0m"
     [33m→[0m label="[1m[31mCategory[0m"
  [31m[Line 156][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated By[0m"
     [33m→[0m <SelectMember.FilterItem value="createdBy" label="[1m[31mCreated By[0m" />
  [31m[Line 157][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdated By[0m"
     [33m→[0m <SelectMember.FilterItem value="updatedBy" label="[1m[31mUpdated By[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/category/TemplateCategoryAddSheet.tsx[0m
  [31m[Line 9][0m [[36mJSX Plain Text[0m] Found: "[1mCategory[0m"
     [33m→[0m <IconPlus />

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/category/TemplateCategoryColumns.tsx[0m
  [31m[Line 37][0m [[36mJS/TS String Literal[0m] Found: "[1mName[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mName[0m" icon={IconLabelFilled} />
  [31m[Line 63][0m [[36mJS/TS String Literal[0m] Found: "[1mCode[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mCode[0m" icon={IconLabelFilled} />
  [31m[Line 77][0m [[36mJS/TS String Literal[0m] Found: "[1mTemplate Count[0m"
     [33m→[0m <RecordTable.InlineHead label="[1m[31mTemplate Count[0m" icon={IconLabelFilled} />

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/category/TemplateCategoryDetailSheet.tsx[0m
  [31m[Line 36][0m [[36mJSX Plain Text[0m] Found: "[1mEdit Category[0m"
     [33m→[0m <Sheet.Title>[1m[31mEdit Category[0m</Sheet.Title>
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mCategory updated successfully[0m"
     [33m→[0m title: '[1m[31mCategory updated successfully[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/category/TemplateCategoryFilter.tsx[0m
  [31m[Line 100][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated By[0m"
     [33m→[0m <SelectMember.FilterBar queryKey="createdBy" label="[1m[31mCreated By[0m" />
  [31m[Line 104][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdated By[0m"
     [33m→[0m <SelectMember.FilterBar queryKey="updatedBy" label="[1m[31mUpdated By[0m" />
  [31m[Line 108][0m [[36mJS/TS String Literal[0m] Found: "[1mParent[0m"
     [33m→[0m <SelectTemplateCategory.FilterBar queryKey="parentIds" label="[1m[31mParent[0m" />
  [31m[Line 124][0m [[36mJS/TS String Literal[0m] Found: "[1mFilter[0m"
     [33m→[0m placeholder="[1m[31mFilter[0m"
  [31m[Line 136][0m [[36mJS/TS String Literal[0m] Found: "[1mParent[0m"
     [33m→[0m label="[1m[31mParent[0m"
  [31m[Line 139][0m [[36mJS/TS String Literal[0m] Found: "[1mCreated By[0m"
     [33m→[0m <SelectMember.FilterItem value="createdBy" label="[1m[31mCreated By[0m" />
  [31m[Line 140][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdated By[0m"
     [33m→[0m <SelectMember.FilterItem value="updatedBy" label="[1m[31mUpdated By[0m" />

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/category/TemplateCategoryForm.tsx[0m
  [31m[Line 11][0m [[36mJS/TS String Literal[0m] Found: "[1mName is required[0m"
     [33m→[0m name: z.string().min(1, '[1m[31mName is required[0m'),
  [31m[Line 12][0m [[36mJS/TS String Literal[0m] Found: "[1mCode is required[0m"
     [33m→[0m code: z.string().min(1, '[1m[31mCode is required[0m'),
  [31m[Line 60][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to update category[0m"
     [33m→[0m message: error.message || '[1m[31mFailed to update category[0m',
  [31m[Line 78][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to create category[0m"
     [33m→[0m message: error.message || '[1m[31mFailed to create category[0m',
  [31m[Line 98][0m [[36mJSX Plain Text[0m] Found: "[1mName[0m"
     [33m→[0m <Form.Label>[1m[31mName[0m</Form.Label>
  [31m[Line 110][0m [[36mJSX Plain Text[0m] Found: "[1mCode[0m"
     [33m→[0m <Form.Label>[1m[31mCode[0m</Form.Label>
  [31m[Line 141][0m [[36mJSX Plain Text[0m] Found: "[1mCancel[0m"
     [33m→[0m >
  [31m[Line 151][0m [[36mJS/TS String Literal[0m] Found: "[1mSaving...[0m"
     [33m→[0m ? '[1m[31mSaving...[0m'
  [31m[Line 153][0m [[36mJS/TS String Literal[0m] Found: "[1mUpdate Category[0m"
     [33m→[0m ? '[1m[31mUpdate Category[0m'
  [31m[Line 154][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate Category[0m"
     [33m→[0m : '[1m[31mCreate Category[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/category/TemplateCategoryMoreCell.tsx[0m
  [31m[Line 41][0m [[36mJSX Plain Text[0m] Found: "[1mEdit[0m"
     [33m→[0m <Icon[1m[31mEdit[0m className="w-4 h-4" />
  [31m[Line 45][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash className="w-4 h-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/category/TemplateCategorySheet.tsx[0m
  [31m[Line 26][0m [[36mJSX Plain Text[0m] Found: "[1mCategory[0m"
     [33m→[0m <IconFolderPlus /> [1m[31mCategory[0m
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mEdit Category[0m"
     [33m→[0m {category ? '[1m[31mEdit Category[0m' : 'Create Category'}
  [31m[Line 33][0m [[36mJS/TS String Literal[0m] Found: "[1mCreate Category[0m"
     [33m→[0m {category ? 'Edit Category' : '[1m[31mCreate Category[0m'}

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/commands/TemplateCategoryDelete.tsx[0m
  [31m[Line 26][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${templateCategoryIds.length} selected template categor${templateCategoryIds.length === 1 ? 'y' : 'ies'}?`,
  [31m[Line 26][0m [[36mTemplate Literal String[0m] Found: "[1mselected template categor[0m"
     [33m→[0m message: `Are you sure you want to delete the ${templateCategoryIds.length} [1m[31mselected template categor[0m${templateCategoryIds.length === 1 ? 'y' : 'ies'}?`,
  [31m[Line 32][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 44][0m [[36mTemplate Literal String[0m] Found: "[1mTemplate categor[0m"
     [33m→[0m description: `[1m[31mTemplate categor[0m${templateCategoryIds.length === 1 ? 'y' : 'ies'} deleted successfully`,
  [31m[Line 44][0m [[36mTemplate Literal String[0m] Found: "[1mdeleted successfully[0m"
     [33m→[0m description: `Template categor${templateCategoryIds.length === 1 ? 'y' : 'ies'} [1m[31mdeleted successfully[0m`,
  [31m[Line 51][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/commands/TemplateDelete.tsx[0m
  [31m[Line 25][0m [[36mTemplate Literal String[0m] Found: "[1mAre you sure you want to delete the[0m"
     [33m→[0m message: `[1m[31mAre you sure you want to delete the[0m ${templateIds.length} selected broadcast?`,
  [31m[Line 25][0m [[36mTemplate Literal String[0m] Found: "[1mselected broadcast?[0m"
     [33m→[0m message: `Are you sure you want to delete the ${templateIds.length} [1m[31mselected broadcast?[0m`,
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 42][0m [[36mJS/TS String Literal[0m] Found: "[1mBroadcast deleted successfully[0m"
     [33m→[0m description: '[1m[31mBroadcast deleted successfully[0m',
  [31m[Line 49][0m [[36mJSX Plain Text[0m] Found: "[1mDelete[0m"
     [33m→[0m <IconTrash />

[1m[33m📄 File: frontend/core-ui/src/modules/templates/components/select/TemplateContentTypeSelect.tsx[0m
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1museSelectStatusContext must be used within SelectStatusProvider[0m"
     [33m→[0m '[1m[31museSelectStatusContext must be used within SelectStatusProvider[0m',
  [31m[Line 74][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect status...[0m"
     [33m→[0m {placeholder || '[1m[31mSelect status...[0m'}
  [31m[Line 97][0m [[36mJSX Plain Text[0m] Found: "[1mТөрөл сонгоно уу[0m"
     [33m→[0m <span>[1m[31mТөрөл сонгоно уу[0m</span>
  [31m[Line 139][0m [[36mJS/TS String Literal[0m] Found: "[1mТөрөл сонгоно уу[0m"
     [33m→[0m <Command.Input placeholder="[1m[31mТөрөл сонгоно уу[0m" />
  [31m[Line 141][0m [[36mJSX Plain Text[0m] Found: "[1mNo status found[0m"
     [33m→[0m <Command.Empty>[1m[31mNo status found[0m</Command.Empty>

[1m[33m📄 File: frontend/core-ui/src/modules/templates/hooks/useTemplateAction.tsx[0m
  [31m[Line 25][0m [[36mJS/TS String Literal[0m] Found: "[1mTemplate use failed[0m"
     [33m→[0m title: '[1m[31mTemplate use failed[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/templates/hooks/useTemplateCategoryAdd.tsx[0m
  [31m[Line 57][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mCategory added successfully[0m"
     [33m→[0m description: '[1m[31mCategory added successfully[0m',
  [31m[Line 67][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/templates/hooks/useTemplateCategoryEdit.tsx[0m
  [31m[Line 58][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 59][0m [[36mJS/TS String Literal[0m] Found: "[1mCategory updated successfully[0m"
     [33m→[0m description: '[1m[31mCategory updated successfully[0m',
  [31m[Line 68][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/templates/hooks/useTemplateCategoryRemove.tsx[0m
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess[0m"
     [33m→[0m title: '[1m[31mSuccess[0m',
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mCategory removed successfully[0m"
     [33m→[0m description: '[1m[31mCategory removed successfully[0m',
  [31m[Line 49][0m [[36mJS/TS String Literal[0m] Found: "[1mError[0m"
     [33m→[0m title: '[1m[31mError[0m',

[1m[33m📄 File: frontend/core-ui/src/modules/widgets/core-widgets/company/CompanyWidgets.tsx[0m
  [31m[Line 44][0m [[36mJSX Plain Text[0m] Found: "[1mNo companies to display at the moment.[0m"
     [33m→[0m <span className="text-sm">[1m[31mNo companies to display at the moment.[0m</span>
  [31m[Line 47][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Company[0m"
     [33m→[0m <IconPlus className="mr-2 h-4 w-4" />

[1m[33m📄 File: frontend/core-ui/src/modules/widgets/core-widgets/customer/CustomerWidgets.tsx[0m
  [31m[Line 50][0m [[36mJSX Plain Text[0m] Found: "[1mNo customers to display at the moment.[0m"
     [33m→[0m <span className="text-sm">[1m[31mNo customers to display at the moment.[0m</span>
  [31m[Line 54][0m [[36mJSX Plain Text[0m] Found: "[1mAdd Customer[0m"
     [33m→[0m <IconPlus className="mr-2 w-4 h-4" />

[1m[33m📄 File: frontend/core-ui/src/pages/auth/ResetPasswordPage.tsx[0m
  [31m[Line 28][0m [[36mJSX Plain Text[0m] Found: "[1mReset password[0m"
     [33m→[0m <h2 className="font-semibold text-2xl">[1m[31mReset password[0m</h2>

[1m[33m📄 File: frontend/core-ui/src/pages/components/SelectComponentIndexPage.tsx[0m
  [31m[Line 101][0m [[36mJSX Plain Text[0m] Found: "[1mSelect Components[0m"
     [33m→[0m <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
  [31m[Line 109][0m [[36mJSX Plain Text[0m] Found: "[1mThis page is only available in the development environment.[0m"
     [33m→[0m <p>
  [31m[Line 117][0m [[36mJS/TS String Literal[0m] Found: "[1mBrands[0m"
     [33m→[0m label="[1m[31mBrands[0m"
  [31m[Line 118][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect component for different brand types[0m"
     [33m→[0m description="[1m[31mSelect component for different brand types[0m"
  [31m[Line 121][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect brands[0m"
     [33m→[0m label="[1m[31mSelect brands[0m"
  [31m[Line 122][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose from available brands[0m"
     [33m→[0m description="[1m[31mChoose from available brands[0m"
  [31m[Line 133][0m [[36mJS/TS String Literal[0m] Found: "[1mTags[0m"
     [33m→[0m label="[1m[31mTags[0m"
  [31m[Line 134][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect component for different tag types[0m"
     [33m→[0m description="[1m[31mSelect component for different tag types[0m"
  [31m[Line 137][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect tags[0m"
     [33m→[0m label="[1m[31mSelect tags[0m"
  [31m[Line 138][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose from available tags[0m"
     [33m→[0m description="[1m[31mChoose from available tags[0m"
  [31m[Line 150][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect company tags[0m"
     [33m→[0m label="[1m[31mSelect company tags[0m"
  [31m[Line 151][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose from available company tags[0m"
     [33m→[0m description="[1m[31mChoose from available company tags[0m"
  [31m[Line 162][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect product tags[0m"
     [33m→[0m label="[1m[31mSelect product tags[0m"
  [31m[Line 163][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose from available product tags[0m"
     [33m→[0m description="[1m[31mChoose from available product tags[0m"
  [31m[Line 174][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect customer tags[0m"
     [33m→[0m label="[1m[31mSelect customer tags[0m"
  [31m[Line 175][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose from available customer tags[0m"
     [33m→[0m description="[1m[31mChoose from available customer tags[0m"
  [31m[Line 187][0m [[36mJS/TS String Literal[0m] Found: "[1mContact[0m"
     [33m→[0m label="[1m[31mContact[0m"
  [31m[Line 188][0m [[36mJS/TS String Literal[0m] Found: "[1mComponents for managing contacts[0m"
     [33m→[0m description="[1m[31mComponents for managing contacts[0m"
  [31m[Line 191][0m [[36mJS/TS String Literal[0m] Found: "[1mCompany Select[0m"
     [33m→[0m label="[1m[31mCompany Select[0m"
  [31m[Line 192][0m [[36mJS/TS String Literal[0m] Found: "[1mSearch and select companies[0m"
     [33m→[0m description="[1m[31mSearch and select companies[0m"
  [31m[Line 197][0m [[36mJS/TS String Literal[0m] Found: "[1mCustomer Select[0m"
     [33m→[0m label="[1m[31mCustomer Select[0m"
  [31m[Line 198][0m [[36mJS/TS String Literal[0m] Found: "[1mSearch and select customers[0m"
     [33m→[0m description="[1m[31mSearch and select customers[0m"
  [31m[Line 207][0m [[36mJS/TS String Literal[0m] Found: "[1mTeam[0m"
     [33m→[0m label="[1m[31mTeam[0m"
  [31m[Line 208][0m [[36mJS/TS String Literal[0m] Found: "[1mComponents for managing team members[0m"
     [33m→[0m description="[1m[31mComponents for managing team members[0m"
  [31m[Line 211][0m [[36mJS/TS String Literal[0m] Found: "[1mMember Select[0m"
     [33m→[0m label="[1m[31mMember Select[0m"
  [31m[Line 212][0m [[36mJS/TS String Literal[0m] Found: "[1mSelect team members[0m"
     [33m→[0m description="[1m[31mSelect team members[0m"
  [31m[Line 229][0m [[36mJS/TS String Literal[0m] Found: "[1mContent[0m"
     [33m→[0m label="[1m[31mContent[0m"
  [31m[Line 230][0m [[36mJS/TS String Literal[0m] Found: "[1mComponents for managing content and products[0m"
     [33m→[0m description="[1m[31mComponents for managing content and products[0m"
  [31m[Line 233][0m [[36mJS/TS String Literal[0m] Found: "[1mProduct Select[0m"
     [33m→[0m label="[1m[31mProduct Select[0m"
  [31m[Line 234][0m [[36mJS/TS String Literal[0m] Found: "[1mBrowse and select products[0m"
     [33m→[0m description="[1m[31mBrowse and select products[0m"
  [31m[Line 239][0m [[36mJS/TS String Literal[0m] Found: "[1mProduct Select[0m"
     [33m→[0m label="[1m[31mProduct Select[0m"
  [31m[Line 240][0m [[36mJS/TS String Literal[0m] Found: "[1mBrowse and select products[0m"
     [33m→[0m description="[1m[31mBrowse and select products[0m"
  [31m[Line 248][0m [[36mJSX Plain Text[0m] Found: "[1mColors[0m"
     [33m→[0m <h2 className="text-xl font-medium tracking-tight pb-4">[1m[31mColors[0m</h2>
  [31m[Line 328][0m [[36mJS/TS String Literal[0m] Found: "[1mDefault Toast[0m"
     [33m→[0m title: '[1m[31mDefault Toast[0m',
  [31m[Line 329][0m [[36mJS/TS String Literal[0m] Found: "[1mThis is a default toast.[0m"
     [33m→[0m description: '[1m[31mThis is a default toast.[0m',
  [31m[Line 332][0m [[36mJSX Plain Text[0m] Found: "[1mShow Default Toast[0m"
     [33m→[0m >
  [31m[Line 340][0m [[36mJS/TS String Literal[0m] Found: "[1mSuccess Toast[0m"
     [33m→[0m title: '[1m[31mSuccess Toast[0m',
  [31m[Line 341][0m [[36mJS/TS String Literal[0m] Found: "[1mThis is a success toast.[0m"
     [33m→[0m description: '[1m[31mThis is a success toast.[0m',
  [31m[Line 344][0m [[36mJSX Plain Text[0m] Found: "[1mShow Success Toast[0m"
     [33m→[0m >
  [31m[Line 352][0m [[36mJS/TS String Literal[0m] Found: "[1mWarning Toast[0m"
     [33m→[0m title: '[1m[31mWarning Toast[0m',
  [31m[Line 353][0m [[36mJS/TS String Literal[0m] Found: "[1mThis is a warning toast.[0m"
     [33m→[0m description: '[1m[31mThis is a warning toast.[0m',
  [31m[Line 356][0m [[36mJSX Plain Text[0m] Found: "[1mShow Warning Toast[0m"
     [33m→[0m >
  [31m[Line 364][0m [[36mJS/TS String Literal[0m] Found: "[1mDestructive Toast[0m"
     [33m→[0m title: '[1m[31mDestructive Toast[0m',
  [31m[Line 365][0m [[36mJS/TS String Literal[0m] Found: "[1mThis is a destructive toast.[0m"
     [33m→[0m description: '[1m[31mThis is a destructive toast.[0m',
  [31m[Line 368][0m [[36mJSX Plain Text[0m] Found: "[1mShow Destructive Toast[0m"
     [33m→[0m >

[1m[33m📄 File: frontend/core-ui/src/pages/import-export/ExportIndexPage.tsx[0m
  [31m[Line 15][0m [[36mJSX Plain Text[0m] Found: "[1mExports[0m"
     [33m→[0m <Link to="/import-export/export">[1m[31mExports[0m</Link>

[1m[33m📄 File: frontend/core-ui/src/pages/import-export/ImportIndexPage.tsx[0m
  [31m[Line 15][0m [[36mJSX Plain Text[0m] Found: "[1mImports[0m"
     [33m→[0m <Link to="/import-export/import">[1m[31mImports[0m</Link>

[1m[33m📄 File: frontend/core-ui/src/pages/no-access/NoAccessPage.tsx[0m
  [31m[Line 10][0m [[36mJSX Plain Text[0m] Found: "[1mAccess Denied[0m"
     [33m→[0m <h2 className="text-2xl font-semibold text-gray-800">[1m[31mAccess Denied[0m</h2>
  [31m[Line 11][0m [[36mJSX Plain Text[0m] Found: "[1mYou don't have permission to access this page. Contact your
          administrator to request access.[0m"
     [33m→[0m <p className="text-gray-500">

[1m[33m📄 File: frontend/core-ui/src/pages/not-found/NotFoundPage.tsx[0m
  [31m[Line 20][0m [[36mJSX Plain Text[0m] Found: "[1mOops! Page not found.[0m"
     [33m→[0m <p className="text-xl text-gray-600 mb-8">[1m[31mOops! Page not found.[0m</p>
  [31m[Line 21][0m [[36mJSX Plain Text[0m] Found: "[1mGo back[0m"
     [33m→[0m <Button variant="link" onClick={() => navigate('/')}>

[1m[33m📄 File: frontend/core-ui/src/pages/onboarding/Onboarding.tsx[0m
  [31m[Line 28][0m [[36mJS/TS String Literal[0m] Found: "[1mRevamped UI[0m"
     [33m→[0m title: '[1m[31mRevamped UI[0m',
  [31m[Line 30][0m [[36mJS/TS String Literal[0m] Found: "[1mBuilt with ShadCN and Radix UI, delivering a smoother, more accessible interface.[0m"
     [33m→[0m '[1m[31mBuilt with ShadCN and Radix UI, delivering a smoother, more accessible interface.[0m',
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mKeyboard Shortcuts[0m"
     [33m→[0m title: '[1m[31mKeyboard Shortcuts[0m',
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mNavigate erxes with ease using built-in shortcuts.[0m"
     [33m→[0m description: '[1m[31mNavigate erxes with ease using built-in shortcuts.[0m',
  [31m[Line 39][0m [[36mJS/TS String Literal[0m] Found: "[1mDark & Light Mode[0m"
     [33m→[0m title: '[1m[31mDark & Light Mode[0m',
  [31m[Line 40][0m [[36mJS/TS String Literal[0m] Found: "[1mChoose the theme that suits your preference, by default.[0m"
     [33m→[0m description: '[1m[31mChoose the theme that suits your preference, by default.[0m',
  [31m[Line 63][0m [[36mJSX Plain Text[0m] Found: "[1mWelcome to[0m"
     [33m→[0m <h1 className="text-3xl font-bold tracking-tight">
  [31m[Line 66][0m [[36mJS/TS String Literal[0m] Found: "[1myour organization[0m"
     [33m→[0m ? organization?.orgShortName || '[1m[31myour organization[0m'
  [31m[Line 67][0m [[36mJS/TS String Literal[0m] Found: "[1merxes 3.0[0m"
     [33m→[0m : '[1m[31merxes 3.0[0m'}{' '}
  [31m[Line 67][0m [[36mJSX Plain Text[0m] Found: "[1m- A New Experience Begins![0m"
     [33m→[0m : 'erxes 3.0'}{' '}
  [31m[Line 70][0m [[36mJSX Plain Text[0m] Found: "[1mA Fresh Start with a New UX/UI[0m"
     [33m→[0m <p className="text-muted-foreground">
  [31m[Line 76][0m [[36mJSX Plain Text[0m] Found: "[1mWe've completely redesigned erxes from the ground up, bringing a
                modern, faster, and more intuitive experience. This is just the
                beginning—the new UX/UI will continue to evolve, with more
                features and plugins rolling out daily.[0m"
     [33m→[0m <p className="text-center text-muted-foreground">
  [31m[Line 97][0m [[36mJSX Plain Text[0m] Found: "[1mWhat to Expect?[0m"
     [33m→[0m <h2 className="text-xl font-semibold text-center">
  [31m[Line 100][0m [[36mJSX Plain Text[0m] Found: "[1mAt launch, only a few plugins will feature the new UI, but we
                  are actively working to upgrade the entire platform. Every
                  day, you'll see new improvements.[0m"
     [33m→[0m <p className="text-center text-muted-foreground">
  [31m[Line 108][0m [[36mJSX Plain Text[0m] Found: "[1mYour Feedback Shapes[0m"
     [33m→[0m <h2 className="text-xl font-semibold text-center">
  [31m[Line 111][0m [[36mJS/TS String Literal[0m] Found: "[1myour organization[0m"
     [33m→[0m ? organization?.orgShortName || '[1m[31myour organization[0m'
  [31m[Line 112][0m [[36mJS/TS String Literal[0m] Found: "[1merxes 3.0[0m"
     [33m→[0m : '[1m[31merxes 3.0[0m'}
  [31m[Line 114][0m [[36mJSX Plain Text[0m] Found: "[1mYour input is essential! Share your thoughts and help us
                  refine this new experience.[0m"
     [33m→[0m <p className="text-center text-muted-foreground">
  [31m[Line 128][0m [[36mJSX Plain Text[0m] Found: "[1mJoin the Community[0m"
     [33m→[0m >
  [31m[Line 134][0m [[36mJSX Plain Text[0m] Found: "[1mWe've been working tirelessly for the last a month to make this
                happen—now it's your turn to explore![0m"
     [33m→[0m <p className="text-sm text-center text-muted-foreground italic">

[1m[33m📄 File: frontend/core-ui/src/pages/organization/CreateOwnerPage.tsx[0m
  [31m[Line 26][0m [[36mJSX Plain Text[0m] Found: "[1mInitial Configuration Steps[0m"
     [33m→[0m <h2 className="font-semibold text-2xl">
  [31m[Line 29][0m [[36mJSX Plain Text[0m] Found: "[1mPlease fill out the following form to complete your installation[0m"
     [33m→[0m <p className="text-xs text-muted-foreground">

[1m[33m📄 File: frontend/core-ui/src/pages/products/ProductsSimilarityGroupPage.tsx[0m
  [31m[Line 22][0m [[36mJSX Plain Text[0m] Found: "[1mNew Config[0m"
     [33m→[0m <IconPlus size={16} />

[1m[33m📄 File: frontend/core-ui/src/pages/settings/account/ExperiencePage.tsx[0m
  [31m[Line 12][0m [[36mJSX Plain Text[0m] Found: "[1mExperience[0m"
     [33m→[0m <h2 className="font-semibold text-lg mt-4 mb-12 px-4">[1m[31mExperience[0m</h2>

[1m[33m📄 File: frontend/core-ui/src/pages/settings/workspace/PermissionPage.tsx[0m
  [31m[Line 14][0m [[36mJSX Plain Text[0m] Found: "[1mPermissions[0m"
     [33m→[0m <IconUserCog className="w-4 h-4 text-accent-foreground" />

[1m[33m📄 File: frontend/core-ui/src/pages/settings/workspace/tags/TagsPage.tsx[0m
  [31m[Line 20][0m [[36mJSX Plain Text[0m] Found: "[1mType:[0m"
     [33m→[0m <span className="font-medium">[1m[31mType:[0m</span>

[1m[33m📄 File: frontend/core-ui/src/plugins/components/RenderPluginsComponent.tsx[0m
  [31m[Line 34][0m [[36mJS/TS String Literal[0m] Found: "[1mPlugin module is empty or invalid[0m"
     [33m→[0m throw new Error('[1m[31mPlugin module is empty or invalid[0m');
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to load plugin[0m"
     [33m→[0m error instanceof Error ? error.message : '[1m[31mFailed to load plugin[0m',

[1m[33m📄 File: frontend/core-ui/src/plugins/components/RenderPluginsComponentErrorState.tsx[0m
  [31m[Line 35][0m [[36mJS/TS String Literal[0m] Found: "[1mPlugin module is empty or invalid[0m"
     [33m→[0m throw new Error('[1m[31mPlugin module is empty or invalid[0m');
  [31m[Line 41][0m [[36mJS/TS String Literal[0m] Found: "[1mFailed to load plugin[0m"
     [33m→[0m error instanceof Error ? error.message : '[1m[31mFailed to load plugin[0m',
  [31m[Line 54][0m [[36mJSX Plain Text[0m] Found: "[1mModule unavailable[0m"
     [33m→[0m <p className="text-sm font-semibold">[1m[31mModule unavailable[0m</p>
  [31m[Line 58][0m [[36mJSX Plain Text[0m] Found: "[1mfailed to load[0m"
     [33m→[0m <p className="text-xs text-muted-foreground">[1m[31mfailed to load[0m</p>
  [31m[Line 64][0m [[36mJSX Plain Text[0m] Found: "[1mTry again[0m"
     [33m→[0m <IconRefresh className="size-3.5" />

[1m[33m📄 File: frontend/core-ui/src/plugins/constants/core-plugins.constants.ts[0m
  [31m[Line 44][0m [[36mJS/TS String Literal[0m] Found: "[1mClient Portal Users[0m"
     [33m→[0m name: '[1m[31mClient Portal Users[0m',

[1m[33m📄 File: frontend/core-ui/src/providers/providers.tsx[0m
  [31m[Line 29][0m [[36mJSX Plain Text[0m] Found: "[1mLoading...[0m"
     [33m→[0m <Suspense fallback={<div>[1m[31mLoading...[0m</div>}>

[1m📊 Scan Summary:[0m
  Scanned Files: [1m[32m1495[0m
  Violations Found: [1m[31m3505[0m

[1m[31m❌ Linter failed: Please replace the hardcoded strings above with i18n translation functions like t('key').[0m
