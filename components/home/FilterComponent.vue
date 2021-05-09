<template>
  <v-card outlined>
    <v-list-item three-line>
      <v-list-item-content class="px-3">
        <div class="overline mb-4 font-weight-bold">Filter Pencarianmu</div>

        <v-divider></v-divider>

        <v-list-item-title class="mt-5"
          >Tampilkan berdasarkan</v-list-item-title
        >
        <v-card-actions>
          <v-btn outlined rounded text> Paling Sesuai </v-btn>
          <v-btn outlined rounded text> Paling Baru </v-btn>
        </v-card-actions>

        <v-divider></v-divider>

        <v-list-item-title class="mt-5"
          >Terakhir diperbaharui</v-list-item-title
        >
        <v-radio-group>
          <v-radio label="24 jam terakhir" value="1"></v-radio>
          <v-radio label="Seminggu terakhir" value="2"></v-radio>
          <v-radio label="Sebulan terakhir" value="3"></v-radio>
        </v-radio-group>

        <v-divider></v-divider>

        <v-switch inset label="Bisa kerja remote"></v-switch>

        <v-divider></v-divider>
        <v-list-item-title class="mt-5">Tipe Pekerjaan</v-list-item-title>
        <v-row>
          <v-col col="12" md="12" class="pb-0">
            <v-checkbox label="Fulltime" value="John"></v-checkbox>
          </v-col>
          <v-col col="12" md="12" class="py-0">
            <v-checkbox label="Magang" value="John"></v-checkbox>
          </v-col>
          <v-col col="12" md="12" class="py-0">
            <v-checkbox label="Part-time" value="John"></v-checkbox>
          </v-col>
          <v-col col="12" md="12" class="py-0">
            <v-checkbox label="Freelance" value="John"></v-checkbox>
          </v-col>
        </v-row>

        <v-divider></v-divider>
        <v-list-item-title class="mt-5">Pengalaman</v-list-item-title>
        <v-row>
          <v-col col="12" md="12" class="pb-0">
            <v-checkbox label="Kurang dari 1 tahun" value="John"></v-checkbox>
          </v-col>
          <v-col col="12" md="12" class="py-0">
            <v-checkbox label="1-3 tahun" value="John"></v-checkbox>
          </v-col>
          <v-col col="12" md="12" class="py-0">
            <v-checkbox label="3-5 tahun" value="John"></v-checkbox>
          </v-col>
          <v-col col="12" md="12" class="py-0">
            <v-checkbox label="5 tahun lebih" value="John"></v-checkbox>
          </v-col>
        </v-row>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions class="mb-5 mx-3">
      <v-btn rounded class="white--text" block color="#b95ee7">
        Temukan Lowongan
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
